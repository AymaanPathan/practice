// Bind
const me = {
  firstName: "Aymaan",
  lastName: "Pathan",
  printFullName: function (homeTown) {
    console.log(
      `My Name ${this.firstName} And LastName is ${this.lastName} From ${homeTown}`
    );
  },
};

const frnd = {
  firstName: "Jack",
  lastName: "Clinton",
};

// Bind Will Return us a Method Which Can Call Later
// Bind Give You The Copy Of That Method
const printData = me.printFullName.bind(frnd, "India");
printData();
