function a(fun) {
  fun();
}

function sayHi() {
  console.log("hello from function b");
}

a(sayHi);
