// 我的样品预定：按邮箱查询
export default defineEventHandler(async (event) => {
  const q = getQuery(event)
  const mail = String(q.mail || '').trim().toLowerCase()
  if (!mail) return { reservations: [] }
  const all = await readReservations()
  return { reservations: all.filter((r) => r.email.toLowerCase() === mail) }
})
