const myName = {
  firstName: "aymaan",
  lastName: "pathan",
};

const printFullName = function (homeTown) {
  return `${this.firstName} ${this.lastName} From ${homeTown}`;
};
const name2 = {
  firstName: "Jack",
  lastName: "Jackson",
};

// Function borrowing
console.log(printFullName.call(name2, "India"));
