var b = 10;
function a() {
  c();
  function c() {
    console.log(b);
  }
}
a();

/*.The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. 
If a variable is not found anywhere, then we say that the variable is not present 
in the scope chain. */
