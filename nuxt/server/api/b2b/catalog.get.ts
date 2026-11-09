// B2B 公开目录：无鉴权，客户系统与 Agent 可直接拉取（即拉即用）
export default defineEventHandler(async () => {
  const items = await readCatalog()
  return { ok: true, items }
})
