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
  const fwd = await forwardToPlatform('/api/leads/consult', lead)
  if (!fwd.forwarded) console.log('[lead:consult]', JSON.stringify(lead))

  return { ok: true }
})
