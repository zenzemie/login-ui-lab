# AiTM setup outline (VPS)

Requirements:

- VPS with a public IP (any small Linux host)
- Domain you control (A/AAAA or CNAME to the VPS)
- Ability to issue TLS certs (Let’s Encrypt / Cloudflare)

## High-level steps

1. **Point DNS**  
   Example: `login.yourdomain.com` → VPS IP

2. **Install an AiTM toolkit** on the VPS  
   Typical choice: Evilginx3 (Go binary) or similar reverse-proxy phish toolkit.  
   Follow upstream install docs for the current release.

3. **Configure a phishlet**  
   A phishlet describes:
   - upstream hosts (real site)
   - which requests carry credentials
   - which cookies mean “authenticated”
   - hostname mapping (your domain ↔ real domain)

   Instagram web is harder than Microsoft 365 / Google Workspace (more subdomains, stricter cookies). Many operators test AiTM first against well-documented IdPs, then adapt.

4. **TLS**  
   Terminate TLS on the lure hostname so the browser shows a valid lock on *your* domain while traffic is proxied upstream.

5. **Lure**  
   Send victims the HTTPS URL on *your* domain (not the real Instagram URL).  
   The proxy fetches live content from the real site and rewrites hosts as needed.

6. **Session capture**  
   When the toolkit detects auth-complete cookies, it stores the session.  
   Export / import into a browser controlled by the operator.

## Operational notes

- Passkeys and WebAuthn are bound to the real origin; a proxy on a different domain generally cannot complete those ceremonies.
- Native mobile apps often pin certificates; AiTM is primarily a **browser** attack.
- Rotate domains and infrastructure; phishing domains get blocked quickly.
- Logging and legal scope: only systems and accounts you are authorized to test.

## Relation to Login UI Lab

The static lab in the repo root remains useful for:

- UI practice
- environments without a domain/VPS
- targets without strong MFA
- collecting typed recovery / 2FA codes when a full proxy is not deployed

For post-MFA **session** theft, use a real reverse-proxy toolkit on a VPS as above.
