// Servidor local para probar la app con login de Google.
// El puerto 3000 ya está en la lista de URLs permitidas de Supabase, así que el login funciona.
// Uso:  node servir.js     →  abrir http://localhost:3000
const http = require("http"), fs = require("fs"), path = require("path");
const TIPOS = { ".html": "text/html; charset=utf-8", ".svg": "image/svg+xml",
                ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8" };

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  const rel = url === "/" ? "index.html" : url.replace(/^\/+/, "");
  const file = path.join(__dirname, rel);
  if (!file.startsWith(__dirname)) { res.writeHead(403).end("no"); return; }
  fs.readFile(file, (e, buf) => {
    if (e) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("No está: " + rel); return; }
    res.writeHead(200, { "Content-Type": TIPOS[path.extname(file)] || "application/octet-stream",
                         "Cache-Control": "no-store" });
    res.end(buf);
  });
}).listen(3000, () => console.log("Ventas+ en http://localhost:3000  (Ctrl+C para cortar)"));
