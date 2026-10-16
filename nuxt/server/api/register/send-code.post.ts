// 注册第一步：发送验证码
// 平台已接通 → 由 adventure-platform 负责发信；未接通 → 返回 devCode 演示
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email = String(body?.email || '').trim()
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'invalid email' })
  }
  const code = String(Math.floor(100000 + Math.random() * 900000))
  await putCode(event, email, code)

  const lead = {
    kind: 'register_code',
    name: String(body?.name || ''),
    email,
    company: String(body?.company || ''),
    type: String(body?.type || ''),
    code,
    ts: Date.now()
  }
  const fwd = await forwardToPlatform('/api/leads/register-code', lead)
  if (!fwd.forwarded) console.log('[lead:register-code]', JSON.stringify({ ...lead, code: '***' }))

  // 已转发平台 = 平台发信，前端不显示验证码；否则演示模式回显
  return fwd.forwarded ? { ok: true } : { ok: true, devCode: code }
})
