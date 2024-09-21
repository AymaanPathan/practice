const user = {
  name: "aymaan",
  partner: { dad: "Abid", mom: "shahin" },
};

// const user2 = { ...user }; // shallow copy
const user2 = JSON.parse(JSON.stringify(user)); // deep copy
user2.partner.dad = "bob";

console.log(user);
console.log(user2);
