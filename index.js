const user = {
  name: "aymaan",
  age: 20,
  job: "software Developer",
};

localStorage.setItem("user", JSON.stringify(user));
const userLocal = JSON.parse(localStorage.getItem("user"));
console.log(userLocal.age);
