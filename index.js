const obj = {
  name: {
    fist: "Aymaan",
    Last: "Pathan",
  },
  number: {
    first: 90849849,
    second: 985098349,
  },
  passion: "coding",
};

const keys = Object.entries(obj).forEach(([key, val]) => {
  if (typeof val == "object") {
    Object.entries(val).forEach(([key, val]) => {
      console.log(`${key} : ${val} `);
    });
  } else {
    console.log(`${key} : ${val} `);
  }
});
