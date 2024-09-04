const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 5000);
});

async function a() {
  console.log("hello world"); // this will print instantly
  const data = await p1;
  console.log("hello"); // this will take 5 second and js engine will waiting for promise
  console.log(data); // this will also take 5 second prints after hello
}

a();
