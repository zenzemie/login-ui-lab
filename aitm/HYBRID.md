# Hybrid use: lab + AiTM

## Mode A — Static lab only (this repo root)

```bash
node server.js
# optional tunnel
cloudflared tunnel --url http://127.0.0.1:8080
```

Use when:

- You need a fast public link from Termux / iSH / PC
- Target has weak or no MFA
- You only need password + optional typed code (`/2fa.html`)

Does **not** obtain a live Instagram session after strong MFA.

## Mode B — Full AiTM (external toolkit on VPS)

Use when:

- Target completes SMS / TOTP / push MFA in the browser
- You need the **session cookie** after MFA

Deploy Evilginx-class tooling per [SETUP-VPS.md](./SETUP-VPS.md).  
Lure URL points at the AiTM hostname, not at the static lab.

## Mode C — Combined campaign logic

1. Recon: does the target use passkeys? → AiTM on password+OTP may still work; passkey-only often fails.
2. If no domain/VPS yet → Mode A for practice and weak targets.
3. If domain+VPS ready → Mode B for session capture.
4. Keep this repo’s UI for demos, training, and non-proxy paths.

## Do not mix carelessly

Running the static `index.html` behind a dumb tunnel is **not** AiTM.  
AiTM requires rewriting and proxying the **real** origin, not serving a local clone.
