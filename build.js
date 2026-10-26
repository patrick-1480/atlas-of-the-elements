// Builds index.html, a standalone page for static hosting, from atlas.html (the artifact fragment).
// Run after editing atlas.html: node build.js
const fs = require("fs");
const src = fs.readFileSync(__dirname + "/atlas.html", "utf8");
const cut = src.indexOf("</style>") + "</style>".length;
const head = src.slice(0, cut).replace(/<meta name="claude:viewport-fit-sides"[^>]*>\s*/, "");
const body = src.slice(cut).trim();
fs.writeFileSync(__dirname + "/index.html", `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
</head>
<body>
${body}
</body>
</html>
`);
console.log("wrote index.html");
