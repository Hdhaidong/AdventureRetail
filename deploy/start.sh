#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! command -v mvn >/dev/null 2>&1; then
  sudo apt-get update -qq
  sudo apt-get install -y -qq maven
fi

cd "$ROOT/server"
mvn -q -DskipTests package
pkill -f 'portal-server' || true
nohup java -jar target/portal-server.jar > /tmp/portal-api.log 2>&1 &

cd "$ROOT/web"
if [ ! -d node_modules ]; then
  npm install
fi
npm run build
pkill -f 'nuxt preview' || true
pkill -f '.output/server/index.mjs' || true
API_BASE=http://127.0.0.1:8080 nohup npm run preview > /tmp/portal-web.log 2>&1 &

for i in 1 2 3 4 5 6 7 8 9 10; do
  if curl -sf http://127.0.0.1:8080/api/health >/dev/null && curl -sf -o /dev/null http://127.0.0.1:3000; then
    echo "READY"
    exit 0
  fi
  sleep 2
done
echo "NOT_READY"
tail -n 40 /tmp/portal-api.log || true
tail -n 40 /tmp/portal-web.log || true
exit 1
