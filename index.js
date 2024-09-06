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

printFullName.apply(person2, ["india"]); // this is how we can set a value in argument in apply

// the only difference in call and apply is how we pass and argument in call we can
// pass with comma seperated and in apply witg array list
