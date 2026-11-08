# 织筑 AI（ai-portal）

面向**布料纺织**与**房屋建筑工程**（维修 / 设计 / 施工 / 工程）的行业 AI 产品。

## 技术栈

| 层 | 技术 |
| --- | --- |
| 前端 | Nuxt 3 |
| 后端 | Spring Boot 3 |
| AI | LangChain4j（OpenAI 兼容） |

## 目录

```
api/   Spring Boot + LangChain4j
web/   Nuxt 官网 + 对话入口
```

## 本地 / Instabox

```bash
# API
cd api
export OPENAI_API_KEY=sk-...
mvn spring-boot:run

# Web
cd web
pnpm install
pnpm dev
```

部署（Instabox）：

```bash
instabox-port publish 3000   # Nuxt
instabox-port publish 8080   # API（可选）
```
