function Unicorn(code){
  var chars = code.split(" ").map(function(ch) {
	var emoji = ch.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g)[0];
	  return ch.charCodeAt()<5000?ch:emoji==="🦄"?String.fromCharCode(ch.length/2):emoji==="🐐"?String.fromCharCode(ch.length*2):ch
  }).join("");
  return eval(chars);
}
