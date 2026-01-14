import { renderOderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";
// import "../data/cart-class.js";
// import '../data/car.js';
// import '../data/backend-practice.js';

new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderOderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});

/*
This is promise.all it'll run all the promise in it's array one by one and run then
Promise.all([
  new promise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }),
  new promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderOderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});

// loadProducts(() => {
//   renderOderSummary();
//   renderPaymentSummary();
//   renderCheckoutHeader();
// });

*/
