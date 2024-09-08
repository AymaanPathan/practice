let ritikRuns = { name: "Ritik", runs: 0 };
let otherRuns = { ...ritikRuns };
otherRuns.runs = 90;

console.log(ritikRuns);
console.log(otherRuns);
