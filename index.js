const grandParent = document.querySelector("#grandParent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#children");

grandParent.addEventListener(
  "click",
  () => {
    console.log("grandParent Clicked!!!");
  },
  false // bubble
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent Clicked!!!");
  },
  false // bubble
);

child.addEventListener(
  "click",
  () => {
    console.log("child Clicked!!!");
  },
  true // capture
);
