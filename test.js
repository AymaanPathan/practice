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

// Apply is same as Call Method Just Difference is Passsing An Args
// 1. in Call We just pass normally
// 2. in Bind Wen Pass In An Array list
me.printFullName.apply(me, ["India"]);
