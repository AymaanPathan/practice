// Output based Question -1
// What is the output of this code the answer is 24 because?
// the call method will look for age in person2 because we say call getAge in person2
// but if we remove call method it will give 20
const myName = {
  name: "Aymaan",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

const person2 = { age: 1 };
console.log(myName.getAge.call(person2)); // this will check person2
