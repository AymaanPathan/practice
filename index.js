// Object
const user = {
  name: "John", // adding the data
  age: 12,
  isDeveloper: true,
  Info: function () {
    return this.city;
  },
};

// user.Info = () => {
//   // update the data

//   return "hello";
// };

// Hoisting in object
user.city = "L.A";

// Spacing in key
user["pin code"] = "1098";
console.log(user["pin code"]);
// delete user.Info; // deletion of object data
