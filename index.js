let ritikRuns = {
  name: "Ritik",
  runs: 0,
  ball: { type: "leather" },
  time: { day: "Wednesday" },
};
let otherRuns = { ...ritikRuns };
otherRuns.ball.time = "tuesday";

console.log(ritikRuns);
console.log(otherRuns);
