# AiTM companion (Adversary-in-the-Middle)

This folder is **optional**. The main Login UI Lab (`node server.js`) does not depend on it.

## Problem

Classic clone pages steal passwords (and maybe a typed 2FA code).  
Modern accounts issue a **session after MFA**. Stealing only the password is often useless.

**AiTM** sits between the victim and the *real* site:

```
Victim → your domain (reverse proxy) → real Instagram / IdP
```

The victim completes password + MFA on what looks like the real flow.  
The proxy captures the **session cookies / tokens** issued after MFA succeeds.  
Those sessions can be replayed without repeating MFA (until revoked or expired).

## What this is not

- Not a full Evilginx binary shipped in this repo
- Not a Termux one-liner that fully proxies Instagram
- Not a bypass of passkeys / WebAuthn (origin-bound)

## What this is

- Architecture notes
- When to use the static lab vs a real reverse-proxy toolkit
- VPS-oriented setup outline for Evilginx-class tools

See:

- [SETUP-VPS.md](./SETUP-VPS.md) — domain + VPS + Evilginx-class path
- [HYBRID.md](./HYBRID.md) — combine this lab with AiTM

## Tools in this class (external)

| Tool | Role |
|------|------|
| Evilginx3 | Reverse proxy + phishlets + session capture |
| Modlishka | Flexible reverse-proxy phishing |
| Similar commercial kits | Same idea: proxy real login, steal post-MFA session |

Install and run those on infrastructure you control. This repo stays the lightweight UI lab + documentation.
