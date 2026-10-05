@echo off
cd /d "%~dp0"
if not defined PORT set PORT=8080
echo Starting Login UI Lab on port %PORT% ...
echo Open http://127.0.0.1:%PORT%
echo For a public link, run in another window: cloudflared tunnel --url http://127.0.0.1:%PORT%
echo or: ngrok http %PORT%
node server.js
pause
