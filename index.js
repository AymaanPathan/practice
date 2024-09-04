const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 success"), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 success"), 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 success"), 1000);
});
Promise.any([promise1, promise2, promise3]).then((data) => console.log(data));
