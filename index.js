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

//  function borrowing
// person.printFullName.call(person2);

printFullName.call(person2, "india"); // this is how we can set a value in argument
