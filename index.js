// Function Statements
function a() {
  console.log("a called");
}

// function Expression or Function Declaration
var b = function () {
  console.log("B called");
};

// Anonymous Function -> function with no name
// function(){

// }

// Named Function Expression
var c = function xyz() {
  console.log("c Called");
};
c();
// Parameter and Argument
function d(params) {
  console.log(params);
}
d(1); //Argument

// First Class Function
// ability to use function as a value is known as first class function
// Example 1 :
function e() {
  return function eChild(params) {};
}

// Example 2
function fPara() {
  console.log("hello from fPara");
}

function f(fun) {
  return fun;
}
f(fPara);

// Arrow Function
const arrow = () => {
  console.log("Hello from Arrow Function");
};
arrow();
