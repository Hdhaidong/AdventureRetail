#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
if ! command -v mvn >/dev/null 2>&1 && [ ! -x /opt/maven/bin/mvn ]; then
  sudo apt-get update -qq
  sudo apt-get install -y -qq maven
fi
export PATH="/opt/maven/bin:$PATH"

cd "$ROOT/api"
mvn -q -DskipTests package
pkill -f 'ai-portal-api|spring-boot:run' 2>/dev/null || true
nohup java -jar target/ai-portal-api-0.1.0.jar > /tmp/ai-portal-api.log 2>&1 &

cd "$ROOT/web"
pnpm install --frozen-lockfile=false
pnpm build
pkill -f 'nuxt|ai-portal-web|.output/server' 2>/dev/null || true
PORT=3000 HOST=0.0.0.0 nohup node .output/server/index.mjs > /tmp/ai-portal-web.log 2>&1 &

sleep 2
instabox-port publish 8080 || true
instabox-port publish 3000 || true
echo "API log: /tmp/ai-portal-api.log"
echo "WEB log: /tmp/ai-portal-web.log"
instabox-port list || true
