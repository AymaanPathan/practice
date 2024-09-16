console.log("Start");

const blockWhile = 3000;
const delay = Date.now() + blockWhile;
while (Date.now() < delay) {}

console.log("End");
