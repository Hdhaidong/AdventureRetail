<template>
  <main>
    <header class="top">
      <a class="brand" href="#top">织衡</a>
      <a class="jump" href="#consult">咨询</a>
    </header>

    <section id="top" class="hero">
      <img
        src="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=2000&q=80"
        alt="成卷的布料堆在仓库光里"
      />
      <div class="hero-copy">
        <p class="brand-hero">织衡</p>
        <h1>布料与房屋工程，先问清楚。</h1>
        <p class="lede">面向面料选用，以及维修、设计、施工、工程。</p>
        <p class="actions">
          <a class="cta" href="#consult">开始咨询</a>
        </p>
      </div>
    </section>

    <section class="support">
      <p class="kicker">顾问</p>
      <h2>按现场语言回答，不按目录堆功能。</h2>
      <p>克重、渗漏、工序、验收，各说各的。一次只处理一个问题。</p>
    </section>

    <section class="field" ref="field">
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
        alt="未封顶的混凝土结构，天光落在楼板上"
      />
      <div class="field-copy">
        <p class="kicker">房屋</p>
        <h2>维修、设计、施工、工程，分开问。</h2>
      </div>
    </section>

    <section class="trades" ref="tradesEl">
      <h2>先做这两件事</h2>
      <ol>
        <li v-for="item in tradeList" :key="item.name">
          <button type="button" @click="ask(item)">
            <span>{{ item.name }}</span>
            <small>{{ item.line }}</small>
          </button>
        </li>
      </ol>
    </section>

    <section id="consult" class="consult">
      <h2>把问题交给织衡</h2>
      <p>结构、消防和临电的结论，仍须持证工程师现场复核。</p>
      <form @submit.prevent="send">
        <label>
          <span class="sr">问题</span>
          <textarea v-model="draft" rows="3" placeholder="例如：窗帘要遮光，客厅朝西，选什么布？" />
        </label>
        <button type="submit" :disabled="pending || !draft.trim()">{{ pending ? "正在答复" : "发送" }}</button>
      </form>
      <ol class="thread" v-if="messages.length">
        <li v-for="(msg, i) in messages" :key="i" :class="msg.role">
          <span>{{ msg.role === "user" ? "你" : "织衡" }}</span>
          <p>{{ msg.text }}</p>
        </li>
      </ol>
    </section>
  </main>
</template>

<script setup>
const tradeList = [
  { name: "布料", line: "成分、克重、用途、护理", prompt: "客厅朝西要做遮光窗帘，该怎么选布？" },
  { name: "维修", line: "渗漏、开裂、回路老化", prompt: "顶楼墙角渗水，维修应该先查哪里？" },
  { name: "设计", line: "动线、图纸、饰面规格", prompt: "老房改造，设计阶段要先定哪些边界？" },
  { name: "施工", line: "工序、隐蔽验收、变更", prompt: "装修施工，饰面之前必须完成哪些验收？" },
  { name: "工程", line: "范围、工期、责任界面", prompt: "小型改造工程，清单里应该写清什么？" },
]

const draft = ref("")
const pending = ref(false)
const industry = ref("")
const messages = ref([])
const tradesEl = ref(null)
const field = ref(null)

function ask(item) {
  industry.value = item.name
  draft.value = item.prompt
  document.getElementById("consult")?.scrollIntoView({ behavior: "smooth" })
}

async function send() {
  const message = draft.value.trim()
  if (!message || pending.value) return
  messages.value.push({ role: "user", text: message })
  draft.value = ""
  pending.value = true
  try {
    const res = await $fetch("/api/chat", {
      method: "POST",
      body: { message, industry: industry.value },
    })
    messages.value.push({ role: "advisor", text: res.reply })
  } catch {
    messages.value.push({ role: "advisor", text: "暂时连不上顾问服务，请稍后再试。" })
  } finally {
    pending.value = false
  }
}

onMounted(() => {
  const watch = (node) => {
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) node.classList.add("in")
      },
      { threshold: 0.28 },
    )
    io.observe(node)
  }
  watch(tradesEl.value)
  watch(field.value)
})
</script>

<style>
:root {
  --ink: #14171a;
  --muted: #3c434b;
  --paper: #eef1f4;
  --line: #c5ccd3;
  --mark: #d89a12;
  --display: "Syne", "Segoe UI", sans-serif;
  --text: "Figtree", "Segoe UI", sans-serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: var(--text);
  font-size: 18px;
  line-height: 1.5;
}
button, textarea { font: inherit; color: inherit; }
.sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.top {
  position: absolute;
  z-index: 2;
  inset: 0 0 auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 28px;
  color: #f4f6f8;
}
.brand, .jump {
  color: inherit;
  text-decoration: none;
  font-family: var(--display);
  letter-spacing: 0.08em;
}
.jump { font-size: 14px; }

.hero {
  position: relative;
  min-height: 100svh;
  color: #f6f7f8;
  display: flex;
  align-items: flex-end;
}
.hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
}
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(12, 14, 16, 0.78) 0%, rgba(12, 14, 16, 0.18) 62%, rgba(12, 14, 16, 0.05) 100%);
}
.hero-copy {
  position: relative;
  z-index: 1;
  padding: 18vh 8vw 12vh;
  max-width: 40rem;
}
.brand-hero {
  margin: 0;
  font-family: var(--display);
  font-weight: 800;
  font-size: clamp(4.5rem, 12vw, 8.5rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  animation: rise 0.8s ease both;
}
.hero h1 {
  margin: 1rem 0 0.4rem;
  font-family: var(--text);
  font-weight: 500;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
  animation: rise 0.8s ease 0.12s both;
}
.lede {
  margin: 0;
  color: #d5dbe1;
  animation: rise 0.8s ease 0.22s both;
}
.actions { margin: 1.6rem 0 0; animation: rise 0.8s ease 0.32s both; }
.cta {
  display: inline-block;
  color: #14171a;
  background: var(--mark);
  text-decoration: none;
  padding: 0.75rem 1.2rem;
  transition: transform 0.25s ease;
}
.cta:hover { transform: translateY(-2px); }

.support, .trades, .consult {
  padding: 12vh 8vw;
}
.support { max-width: 46rem; }
.kicker {
  margin: 0 0 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: var(--muted);
}
h2 {
  margin: 0 0 0.6rem;
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3.4rem);
  letter-spacing: -0.03em;
  line-height: 1.05;
}
.support p:last-child { margin: 0; max-width: 36rem; color: var(--muted); }

.field {
  position: relative;
  min-height: 88svh;
  color: #f6f7f8;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.field img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 60%;
  transform: scale(1.06);
}
.field.in img {
  animation: settle 1.4s ease forwards;
}
.field::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(12, 14, 16, 0.05) 30%, rgba(12, 14, 16, 0.78) 100%);
}
.field-copy {
  position: relative;
  z-index: 1;
  padding: 10vh 8vw;
  max-width: 36rem;
}
.field .kicker { color: #d5dbe1; }
.field h2 { margin: 0; }

.trades { background: #e4e8ec; }
.trades ol {
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
}
.trades li { border-top: 1px solid var(--line); }
.trades li:last-child { border-bottom: 1px solid var(--line); }
.trades button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: baseline;
  background: none;
  border: 0;
  padding: 1.1rem 0;
  text-align: left;
  cursor: pointer;
  transform: translateY(12px);
  opacity: 0;
}
.trades.in button {
  animation: rise 0.6s ease forwards;
}
.trades.in li:nth-child(2) button { animation-delay: 0.06s; }
.trades.in li:nth-child(3) button { animation-delay: 0.12s; }
.trades.in li:nth-child(4) button { animation-delay: 0.18s; }
.trades.in li:nth-child(5) button { animation-delay: 0.24s; }
.trades button span {
  font-family: var(--display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: -0.03em;
}
.trades button small { color: var(--muted); }
.trades button:hover span { color: #8a6410; }

.consult form {
  display: grid;
  gap: 0.8rem;
  max-width: 40rem;
  margin-top: 1.4rem;
}
textarea {
  width: 100%;
  border: 0;
  border-bottom: 1px solid var(--ink);
  background: transparent;
  resize: vertical;
  padding: 0.4rem 0;
}
textarea:focus { outline: 2px solid var(--mark); outline-offset: 4px; }
form button {
  justify-self: start;
  background: var(--ink);
  color: #f4f6f8;
  border: 0;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
}
form button:disabled { opacity: 0.45; cursor: default; }
.thread { list-style: none; margin: 2rem 0 0; padding: 0; max-width: 40rem; }
.thread li { margin-top: 1.2rem; }
.thread span {
  display: block;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  color: var(--muted);
}
.thread p { margin: 0.25rem 0 0; white-space: pre-wrap; }

@keyframes rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}
@keyframes settle {
  to { transform: scale(1); }
}
@media (max-width: 700px) {
  .hero::after {
    background: linear-gradient(180deg, rgba(12, 14, 16, 0.25), rgba(12, 14, 16, 0.82));
  }
  .trades button { flex-direction: column; gap: 0.2rem; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
  .trades button { opacity: 1; transform: none; }
}
</style>
