// Hiding data and encapsulation with closure most imp advantage of closure
function Counter() {
  var count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}

// console.log(count) <- it will throw error thats how closure is used in encapsulation
// and hiding a data

const add1 = Counter();
add1(); // 1
add1(); // 2
add1(); // 3

const add2 = Counter();
add2(); // 1  coz we are calling a fresh Counter function
