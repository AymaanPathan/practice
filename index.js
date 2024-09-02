// 1 get full names
const users = [
  { firstName: "Alex", lastName: "Smith", age: 25 },
  { firstName: "Jordan", lastName: "Doe", age: 30 },
  { firstName: "Taylor", lastName: "Johnson", age: 27 },
  { firstName: "Morgan", lastName: "Lee", age: 28 },
  { firstName: "Casey", lastName: "Brown", age: 26 },
  { firstName: "Riley", lastName: "Davis", age: 29 },
];

const names = users.map((user) => {
  return user.firstName + " " + user.lastName;
});

// console.log(names);

// 2 count age like  {22:2}
const age = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(age);

// get firstName whos age is less than 28

const filteredName = users
  .filter((user) => {
    return user.age < 28;
  })
  .map((user) => user.firstName);

console.log(filteredName);
