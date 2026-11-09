// CRM 阶段推进（管理台用）：POST { id, stage, note? }，配置 crmAdminToken 后需带 x-crm-key
export default defineEventHandler(async (event) => {
  const token = (useRuntimeConfig().crmAdminToken as string) || ''
  if (token) {
    const key = String(getHeader(event, 'x-crm-key') || '')
    if (key !== token) throw createError({ statusCode: 401, statusMessage: 'unauthorized' })
  }
  const body = await readBody(event)
  const lead = await setStage(String(body?.id || ''), String(body?.stage || ''), String(body?.note || ''))
  if (!lead) throw createError({ statusCode: 404, statusMessage: 'lead not found or invalid stage' })
  return { ok: true, lead }
})
