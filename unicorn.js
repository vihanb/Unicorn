function Unicorn(code) {
  var chars = code.split(" ").map(function(ch) {
    var emoji = ch.match(/🌈|✨|🦄|🐐/g)[0];
    return /[\d\(\)\[\]]/.test(ch) ? ch : ch.charCodeAt() < 5000 ? "" : emoji === "🌈" ? String.fromCharCode(ch.length * 2) : emoji === "✨" ? String.fromCharCode(ch.length * 3) : emoji === "🦄" ? String.fromCharCode(ch.length / 2) : emoji === "🐐" ? String.fromCharCode(ch.length) : "" 
  }).join("");
  return chars;
}

function GenerateUnicorn(JavaScriptCode) {
  return JavaScriptCode.split``.map(function(l) {
    return /[\d\(\)\[\]]/.test(l) ? l : l.charCodeAt() % 4 === 0 ? "🌈".repeat(l.charCodeAt()/4) : l.charCodeAt() % 3 === 0 ? "✨".repeat(l.charCodeAt() / 3) : l.charCodeAt() % 2 ? "🦄".repeat(l.charCodeAt()) : "🐐".repeat(l.charCodeAt() / 2)
  }).join ` `;
}
