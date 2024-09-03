//  Higher order function
function x() {
  console.log("Hello");
}

function y(x) {
  // here y is a higher order function
  x(); // here x is a callback function
}

y(x);
