import { adviseLocally } from "../utils/advise"

let upstream: "unknown" | "up" | "down" = "unknown"

export default defineEventHandler(async (event) => {
  const body = await readBody<{ message?: string; industry?: string }>(event)
  const message = body?.message?.trim() ?? ""
  if (!message) {
    throw createError({ statusCode: 400, statusMessage: "message required" })
  }
  const industry = body?.industry?.trim() ?? ""
  const forwarded = await forward(message, industry)
  if (forwarded) return forwarded
  return adviseLocally(message, industry)
})

async function forward(message: string, industry: string) {
  if (upstream === "down") return null
  const config = useRuntimeConfig()
  try {
    const res = await $fetch(`${config.apiBase}/api/chat`, {
      method: "POST",
      body: { message, industry },
      timeout: upstream === "up" ? 20000 : 800,
    })
    upstream = "up"
    return res
  } catch {
    upstream = "down"
    return null
  }
}
