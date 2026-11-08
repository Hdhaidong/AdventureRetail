<template>
  <main class="chat-page">
    <section class="panel">
      <header>
        <h1>行业助手</h1>
        <p>布料工艺、房屋维修、设计、施工与工程问题，直接提问。</p>
      </header>

      <div ref="listEl" class="messages">
        <article v-for="(m, i) in messages" :key="i" :class="m.role">
          <span>{{ m.role === 'user' ? '我' : '织筑 AI' }}</span>
          <p>{{ m.text }}</p>
        </article>
      </div>

      <form class="composer" @submit.prevent="send">
        <textarea
          v-model="input"
          rows="3"
          placeholder="例如：客厅墙面空鼓怎么修？或：夏季连衣裙用什么面料更抗皱？"
          :disabled="loading"
        />
        <button type="submit" :disabled="loading || !input.trim()">
          {{ loading ? '思考中…' : '发送' }}
        </button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </section>
  </main>
</template>

<script setup lang="ts">
type Msg = { role: 'user' | 'assistant'; text: string }

const config = useRuntimeConfig()
const input = ref('')
const loading = ref(false)
const error = ref('')
const listEl = ref<HTMLElement | null>(null)
const messages = ref<Msg[]>([
  {
    role: 'assistant',
    text: '你好，我是织筑 AI。可以问布料选型，或房屋维修、设计、施工、工程管理问题。'
  }
])

async function send() {
  const text = input.value.trim()
  if (!text || loading.value) return

  messages.value.push({ role: 'user', text })
  input.value = ''
  loading.value = true
  error.value = ''
  await nextTick()
  listEl.value?.scrollTo({ top: listEl.value.scrollHeight, behavior: 'smooth' })

  try {
    const res = await $fetch<{ reply: string }>(`${config.public.apiBase}/api/chat`, {
      method: 'POST',
      body: { message: text }
    })
    messages.value.push({ role: 'assistant', text: res.reply })
  } catch (e: any) {
    error.value = '接口暂时不可用。请确认后端已启动，并配置 OPENAI_API_KEY。'
    messages.value.push({
      role: 'assistant',
      text: '当前无法连接 AI 服务。部署时请设置 OPENAI_API_KEY 后重启 api。'
    })
  } finally {
    loading.value = false
    await nextTick()
    listEl.value?.scrollTo({ top: listEl.value.scrollHeight, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.chat-page {
  min-height: 100svh;
  padding: 5.5rem 1.5rem 2rem;
  background:
    linear-gradient(180deg, #1c1812 0%, #1c1812 28%, var(--paper) 28%);
}

.panel {
  width: min(52rem, 100%);
  margin: 0 auto;
  display: grid;
  gap: 1.25rem;
}

header h1 {
  margin: 0;
  color: #f7f2e8;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
}

header p {
  margin: 0.5rem 0 0;
  color: rgba(247, 242, 232, 0.78);
}

.messages {
  max-height: min(55vh, 28rem);
  overflow: auto;
  display: grid;
  gap: 1rem;
  padding: 1.25rem 0;
}

article {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--mist);
}

article span {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.55;
}

article p {
  margin: 0;
  white-space: pre-wrap;
  line-height: 1.65;
}

.composer {
  display: grid;
  gap: 0.75rem;
}

textarea,
button {
  border: 1px solid rgba(22, 20, 15, 0.18);
  background: #fff;
  color: var(--ink);
}

textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  resize: vertical;
}

button {
  justify-self: start;
  min-height: 2.75rem;
  padding: 0 1.25rem;
  border: none;
  background: var(--accent);
  color: #fff7ef;
  cursor: pointer;
}

button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.error {
  margin: 0;
  color: var(--accent);
}
</style>
