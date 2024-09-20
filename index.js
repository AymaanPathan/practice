const user = {
  name: "aymaan",
  age: 21,
  job: "Software Developer",
};

Object.keys(user).forEach((key) => {
  console.log(key + ":" + " " + user[key]);
});
