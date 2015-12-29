function Unicorn(code) {
  var chars = code.split(" ").map(function(ch) {
    var emoji = ch.match(/🌈|✨|🦄|🐐/g)[0];
    return ch.charCodeAt() < 5000 ? "" : emoji === "🌈" ? String.fromCharCode(ch.length * 2) : emoji === "✨" ? String.fromCharCode((ch.length/2)*3) : emoji === "🦄" ? String.fromCharCode(ch.length / 2) : emoji === "🐐" ? String.fromCharCode(ch.length) : "" 
  }).join("");
  return eval(chars);
}

function GenerateUnicorn(JavaScriptCode) {
  return JavaScriptCode.split ``.map(function(l) {
    return l.charCodeAt() % 4 ? "🌈".repeat(l.charCodeAt()) : l.charCodeAt() % 3 ? "✨".repeat(l.charCodeAt()) : l.charCodeAt() % 2 ? "🦄".repeat(l.charCodeAt()) : "🐐".repeat(l.charCodeAt() / 2)
  }).join ` `;
}
