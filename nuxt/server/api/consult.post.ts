// 客户专区 · 业务咨询：转发业务平台，平台侧 48 小时内回复
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email = String(body?.email || '').trim()
  if (!email) throw createError({ statusCode: 400, statusMessage: 'email required' })

  const lead = {
    kind: 'consult',
    name: String(body?.name || ''),
    email,
    company: String(body?.company || ''),
    type: String(body?.type || ''),
    topic: String(body?.topic || ''),
    message: String(body?.message || ''),
    ts: Date.now()
  }
  // 本站 CRM 落库：无论平台是否配置，线索都不丢（客户专区 CRM 页签与管理台 /crm 可见）
  const saved = await addLead({
    kind: 'consult',
    name: lead.name,
    email: lead.email,
    company: lead.company,
    type: lead.type,
    topic: lead.topic,
    message: lead.message
  })
  const fwd = await forwardToPlatform('/api/leads/consult', lead)
  if (!fwd.forwarded) console.log('[lead:consult]', JSON.stringify(lead))

  return { ok: true, leadId: saved.id }
})
