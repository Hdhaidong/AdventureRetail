// 业务平台打通：线索/注册/咨询统一转发到 adventure-platform
// 平台 API 未配置时退化为本地模式（验证码直接回显，线索仅记日志）
export async function forwardToPlatform(path: string, payload: Record<string, any>) {
  const config = useRuntimeConfig()
  const base = (config.platformApiBase as string) || ''
  if (!base) return { forwarded: false as const }
  try {
    const headers: Record<string, string> = { 'content-type': 'application/json' }
    if (config.platformApiToken) headers.authorization = `Bearer ${config.platformApiToken}`
    const res = await $fetch(path, {
      baseURL: base.replace(/\/$/, ''),
      method: 'POST',
      body: payload,
      headers,
      timeout: 8000
    })
    return { forwarded: true as const, res }
  } catch (e: any) {
    console.error('[platform] forward failed:', path, e?.message)
    return { forwarded: false as const, error: String(e?.message || e) }
  }
}

// 验证码存储：优先 Cloudflare KV（binding: AR_KV），未绑定时用内存 Map（仅演示）
const mem: Map<string, { code: string; exp: number }> =
  (globalThis as any).__arCodes || ((globalThis as any).__arCodes = new Map())

function kvOf(event: any): any {
  try { return event?.context?.cloudflare?.env?.AR_KV } catch { return null }
}

export async function putCode(event: any, email: string, code: string, ttlSec = 600) {
  const kv = kvOf(event)
  if (kv) { await kv.put(`code:${email}`, code, { expirationTtl: ttlSec }); return }
  mem.set(email, { code, exp: Date.now() + ttlSec * 1000 })
}

export async function checkCode(event: any, email: string, code: string) {
  const kv = kvOf(event)
  if (kv) {
    const v = await kv.get(`code:${email}`)
    if (v && v === code) { await kv.delete(`code:${email}`); return true }
    return false
  }
  const it = mem.get(email)
  if (it && it.exp > Date.now() && it.code === code) { mem.delete(email); return true }
  return false
}
