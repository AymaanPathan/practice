const user = {
  name: "aymaan",
  age: 21,
  job: "Software Developer",
  partner: { mom: "shahin", dad: "abid" },
};

Object.entries(user).forEach(([key, value]) => {
  if (typeof value === "object" && value !== null) {
    Object.entries(value).forEach(([nestKey, nestedVakue]) => {
      console.log(`${nestKey}`);
    });
  }
});
