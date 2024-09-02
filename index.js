console.log("Start");

function cb() {
  console.log("Timer");
}

setTimeout(cb, 1000);

let start = new Date().getTime();
let end = new Date().getTime() + 5000;
let count = 0;
while (start <= end) {
  count++;
  start = new Date().getTime();
}

console.log(count);
