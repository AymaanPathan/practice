"use strict";

// call method [here over riding the value of this.name]
const student1 = {
  name: "Aymaan",
  printName: function () {
    console.log(this.name);
  },
};

const student2 = {
  name: "bob",
};

student1.printName.call(student2);
