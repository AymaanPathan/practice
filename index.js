const express = require("express");

const app = express();
const port = 3000;
let userLoggedIn = true;

app.use((req, res, next) => {
  if (!userLoggedIn) {
    return res.status(401).json({ message: "Please Login" });
  }
  next();
});

app.use((req, res) => {
  return res.status(200).json({ message: "Login Success" });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
