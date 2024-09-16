const grandParent = document.querySelector("#grandParent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#children");

grandParent.addEventListener("click", (e) => {
  console.log("grandParent Clicked!!!");
});

parent.addEventListener("click", (e) => {
  console.log("parent Clicked!!!");
  e.stopPropagation(); // after this event it will stop
});

child.addEventListener("click", (e) => {
  console.log("child Clicked!!!");
});
