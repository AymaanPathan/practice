const cartItem = ["Mobile", "purse", "cover", "bike"];
localStorage.setItem("user", JSON.stringify(cartItem));
const userCart = localStorage.getItem("user");
console.log(JSON.parse(userCart));
