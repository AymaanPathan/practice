const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 success"), 3000);
});

const promise2 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("Promise 2 success"), 1000);
  setTimeout(() => reject("Promise 2 failed"), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 success"), 2000);
});

Promise.all([promise1, promise2, promise3]).then((data) => console.log(data));
