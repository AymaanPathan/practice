const myName = {
  firstName: "aymaan",
  lastName: "pathan",
  printFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const name2 = {
  firstName: "Jack",
  lastName: "Jackson",
};

// Function borrowing
console.log(myName.printFullName.call(myName));
