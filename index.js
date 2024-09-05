const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved 1");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved 2");
  }, 6000);
});

async function a() {
  console.log("hello world");
  const data1 = await p1;

  console.log("Im First but...");
  const data2 = await p2;

  console.log(data1);
  console.log(data2);
}

a();
