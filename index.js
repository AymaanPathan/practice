// make a promise of createOrder,proceedpayment,show order summary, update wallet

const cart = ["jeans", "t-shirt", "jacket"];

createOrder(cart)
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((orderId) => {
    return proceedPaymet(orderId);
  })

  .then((cartInfo) => {
    return orderSummary(cartInfo);
  })
  .then((data) => console.log(data))
  .then(() => {
    return updateWallet();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .then(() => {
    console.log("the api fetching is over");
  });

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    if (cart.length >= 1) {
      resolve(1234);
    } else {
      reject("Please Add Product To Cart before Procceding");
    }
  });
  return promise;
}

function proceedPaymet(orderId) {
  const promise = new Promise((resolve, reject) => {
    if (!validCart(cart)) {
      reject("Cart is Not Valid");
    } else {
      resolve(`The payment of rupees 2000 is successfull id is ${orderId}`);
    }
  });
  return promise;
}

function orderSummary(cartInfo) {
  const promise = new Promise((resolve, reject) => {
    if (cartInfo) {
      setTimeout(() => {
        resolve("Generating a report summary");
      }, 3000);
    } else {
      reject("Summary is will be not created");
    }
  });
  return promise;
}

function updateWallet() {
  let cash = 2000;
  const promise = new Promise((resolve, reject) => {
    if (cash) {
      setTimeout(() => {
        resolve(`Current Balance is ${cash - 1340}`);
      }, 1000);
    } else {
      reject("There is some issue with wallet");
    }
  });
  return promise;
}

function validCart(cart) {
  if (cart) {
    return true;
  } else {
    false;
  }
}
