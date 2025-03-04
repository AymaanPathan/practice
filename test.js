const myName = {
  firstName: "aymaan",
  lastName: "pathan",
};

const printFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const name2 = {
  firstName: "Jack",
  lastName: "Jackson",
};

// Function borrowing
console.log(printFullName.call(name2));
