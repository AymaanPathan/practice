// 1 get full names
const users = [
  { firstName: "Alex", lastName: "Smith", age: 25 },
  { firstName: "Jordan", lastName: "Doe", age: 30 },
  { firstName: "Taylor", lastName: "Johnson", age: 27 },
  { firstName: "Morgan", lastName: "Lee", age: 28 },
  { firstName: "Casey", lastName: "Brown", age: 26 },
  { firstName: "Riley", lastName: "Davis", age: 29 },
];

// get firstName whos age is less than 28 with reduce function
// ["Alex","jordan"] like this

const ageFilter = users.reduce((acc, curr) => {
  if (curr.age < 28) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(ageFilter);
