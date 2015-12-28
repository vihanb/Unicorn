function Unicorn(code){
  var chars = code.split(" ").map(function(ch) {
    return ch!=="🦄"?ch:String.fromCharCode(ch.length);
  });
  return eval(chars);
}
