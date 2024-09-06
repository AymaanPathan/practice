"use strict";

let person = {
  firstName: "Aymaan",
  lastName: "Pathan",
  // printFullName: function () {
  //   console.log(this.firstName + this.lastName);
  // },
};

let printFullName = function (city) {
  //we can also pass the parameter also
  console.log(this.firstName + " " + this.lastName + " " + "from" + " " + city);
};

let person2 = {
  firstName: "job",
  lastName: "clinton",
};

//  bind method gives you the copy of that method which can be invoke later
const print = printFullName.bind(person2, "india");
print();
