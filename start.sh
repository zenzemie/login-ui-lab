#!/usr/bin/env bash
# Login UI Lab — Unix / macOS / Linux / Termux / iSH
set -e
cd "$(dirname "$0")"
export PORT="${PORT:-8080}"
echo "Starting Login UI Lab on port $PORT ..."
if command -v cloudflared >/dev/null 2>&1; then
  echo "Tip: in another terminal run: cloudflared tunnel --url http://127.0.0.1:$PORT"
fi
exec node server.js
