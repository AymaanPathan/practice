function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

const abc = outer();
abc();
