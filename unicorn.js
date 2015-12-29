function Unicorn(code) {
  if (!/[🦄]/.test(code)) return alert("Error: No unicorns!");
  if (code.indexOf("!") || code.indexOf('"')) code = RemoveEncoding(code);
  var chars = code.split(" ").map(function(ch) {
    var emoji = ch.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g)[0];
    return ch.charCodeAt() < 5000 ? ch : emoji === "🌈" ? String.fromCharCode(ch.length * 2) : emoji === "✨" ? String.fromCharCode((ch.length/2)*3) : emoji === "🦄" ? String.fromCharCode(ch.length / 2) : emoji === "🐐" ? String.fromCharCode(ch.length) : ch
  }).join("");
  return eval(chars);
}

function GenerateUnicorn(JavaScriptCode) {
  return JavaScriptCode.split ``.map(function(l) {
    return l.charCodeAt() % 4 ? "🌈".repeat(l.charCodeAt()) : l.charCodeAt() % 3 ? "✨".repeat(l.charCodeAt()) : l.charCodeAt() % 2 ? "🦄".repeat(l.charCodeAt()) : "🐐".repeat(l.charCodeAt() / 2)
  }).join ` `;
}

function ApplyEncoding(code) {
  return code.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g).map(function(l) {
    return l === "🦄" ? '\\' : l === " " ? " " : "🐐";
  }).join("")
}

function RemoveEncoding(code) {
  return code.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g).map(function(l) {
    return l === '\\' ? "🦄" : l === " " ? " " : "!";
  }).join("")
}
