var countSegments = function (s) {
  let arr = s.split(" ").filter((word) => word !== "");
  return arr;
};
const s = ", , , ,        a, eaefa";
console.log(countSegments(s));
