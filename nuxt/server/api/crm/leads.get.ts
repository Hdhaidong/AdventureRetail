// CRM 线索查询：带 mail 只看自己（客户专区用）；不带 mail 需要管理密钥（/crm 管理台用）
export default defineEventHandler(async (event) => {
  const q = getQuery(event)
  const mail = String(q.mail || '').trim()
  if (mail) return { ok: true, leads: await listLeads(mail) }

  const token = (useRuntimeConfig().crmAdminToken as string) || ''
  if (token) {
    const key = String(getHeader(event, 'x-crm-key') || '')
    if (key !== token) throw createError({ statusCode: 401, statusMessage: 'unauthorized' })
  }
  return { ok: true, leads: await listLeads() }
})
