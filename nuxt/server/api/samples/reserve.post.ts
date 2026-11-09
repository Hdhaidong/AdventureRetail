// 样品预定：校验 → 落预定记录 → 同步进 CRM 管线（kind=sample）
export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}))
  const name = String(body?.name || '').trim()
  const email = String(body?.email || '').trim()
  const sku = String(body?.sku || '').trim()
  const qty = Math.max(1, Math.min(10, parseInt(body?.qty, 10) || 0))
  const plan = String(body?.plan || '').trim().slice(0, 300)
  if (!name || !email || !sku || !email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'name/email/sku required' })
  }
  const slots = await readSampleSlots()
  const slot = slots.find((s) => s.sku === sku)
  if (!slot) throw createError({ statusCode: 404, statusMessage: 'unknown sku' })
  if (slot.status === 'full') throw createError({ statusCode: 409, statusMessage: 'sample quota full' })
  const r = await addReservation({ sku, name, email, qty, plan })
  await addLead({
    kind: 'sample',
    name,
    email,
    company: '',
    type: 'sample',
    topic: '样品预定 ' + sku + ' × ' + qty,
    message: plan || '样品位锁定，待投放计划确认',
    source: 'portal-samples'
  })
  return { ok: true, id: r.id, left: slot.sampleQty }
})