const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise resolved 1");
  }, 6000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved 2");
  }, 10000);
});

async function a() {
  console.log("hello world");
  const [data1, data2] = await Promise.all([p1, p2]);
  console.log(data1, data2);
}

a();
