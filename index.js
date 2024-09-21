let RitikRuns = { name: "Ritik", total: 0, ball: { type: "Leather" } };
let otherRuns = deepCopy(RitikRuns); //shallow copy
otherRuns.ball.type = "tennis"; //shallow will not work in nested object

console.log(RitikRuns);
console.log(otherRuns);

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
