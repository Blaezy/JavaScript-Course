import { addToCart, calculateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { changeMoney } from "./utils/money.js";

let allProduct = "";

products.forEach((product) => {
  allProduct += `
         <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src=${product.getStarUrl()}>
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          ${product.extraInfoHTML()}

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>
    `;
});

const productGridElement = document.querySelector(".js-products-grid");
productGridElement.innerHTML = allProduct;

const productButtonElement = document.querySelectorAll(
  ".js-add-to-cart-button"
);

let timeoutId;
let previousProductId;
const addedToCartTimeouts = {};

productButtonElement.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    const selectElement = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    const quantity = Number(selectElement.value);

    addToCart(productId, quantity);
    addedToCartTimeout(productId);
    document.querySelector(".js-cart-quantity").innerHTML =
      calculateCartQuantity();
  });
});

document.querySelector(".js-cart-quantity").innerHTML = calculateCartQuantity();

// Todo: fix this 'quickly switching different products does remove the class early'
// function addedToCartTimeout(productId) {
//   const addedToCartElement = document.querySelector(
//     `.js-added-to-cart-${productId}`
//   );

//   addedToCartElement.classList.add("added-to-cart-opacity");

//   if (productId === previousProductId) {
//     clearTimeout(timeoutId);
//   }

//   previousProductId = productId;
//   timeoutId = setTimeout(() => {
//     addedToCartElement.classList.remove("added-to-cart-opacity");
//   }, 2000);
// }

// hack: this is todo work fix by chatgpt 
function addedToCartTimeout(productId) {
  const addedToCartElement = document.querySelector(
    `.js-added-to-cart-${productId}`
  );

  if (!addedToCartElement) return;

  // Clear existing timeout for this product
  if (addedToCartTimeouts[productId]) {
    clearTimeout(addedToCartTimeouts[productId]);
  }

  // Ensure class is applied
  addedToCartElement.classList.add("added-to-cart-opacity");

  // Set new timeout for this product only
  addedToCartTimeouts[productId] = setTimeout(() => {
    addedToCartElement.classList.remove("added-to-cart-opacity");
    delete addedToCartTimeouts[productId];
  }, 2000);
}
