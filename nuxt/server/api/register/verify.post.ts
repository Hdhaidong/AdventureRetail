// 注册第二步：校验验证码，通过后把客户档案同步到业务平台
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email = String(body?.email || '').trim()
  const code = String(body?.code || '').trim()
  if (!email || !code) throw createError({ statusCode: 400, statusMessage: 'email and code required' })

  const ok = await checkCode(event, email, code)
  if (!ok) return { ok: false }

  const p = body?.profile || {}
  const lead = {
    kind: 'register_verified',
    name: String(p.name || ''),
    email,
    company: String(p.co || ''),
    type: String(p.typeEn || ''),
    ts: Date.now()
  }
  const fwd = await forwardToPlatform('/api/leads/register-verified', lead)
  if (!fwd.forwarded) console.log('[lead:register-verified]', JSON.stringify(lead))

  return { ok: true }
})
