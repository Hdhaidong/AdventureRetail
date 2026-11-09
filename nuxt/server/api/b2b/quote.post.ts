// B2B 询单：来自已登录客户（姓名/邮箱由前端表单填入），直接落本站 CRM 管线
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const sku = String(body?.sku || '').trim()
  const email = String(body?.email || '').trim()
  if (!sku || !email) throw createError({ statusCode: 400, statusMessage: 'sku and email required' })

  const qty = String(body?.qty || '').trim()
  const market = String(body?.market || '').trim()
  const message = String(body?.message || '').trim()

  const saved = await addLead({
    kind: 'b2b',
    name: String(body?.name || ''),
    email,
    type: 'B2B',
    topic: 'B2B 询单 · ' + sku,
    message: `qty=${qty}; market=${market}; ${message}`
  })
  return { ok: true, leadId: saved.id }
})
