const btn = document.querySelector(".btn");
const timer = document.querySelector(".time");

let isCount = true;
let count = 0;
let interval;

btn.addEventListener("click", () => {
  if (isCount) {
    const interval = setInterval(() => {
      count++;
      btn.disabled = true;
      timer.innerHTML = count;
      if (count === 10) {
        clearInterval(interval);
        isCount = false;
        btn.disabled = false;
      }
    }, 100);
  } else {
    const interval = setInterval(() => {
      count--;
      btn.disabled = true;
      timer.innerHTML = count;
      if (count <= 1) {
        clearInterval(interval);
        isCount = true;
        btn.disabled = false;
      }
    }, 100);
  }
});
