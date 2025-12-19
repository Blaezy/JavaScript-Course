import { cart, deleteFromCart, updateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { changeMoney } from "./utils/money.js";
let cartItemHTMl = "";

cart.forEach((cartItem) => {
  let matchingCartItem;
  products.forEach((product) => {
    if (cartItem.productId === product.id) {
      matchingCartItem = product;
    }
  });

  cartItemHTMl += `
  
        <div class="cart-item-container cart-item-container-${
          cartItem.productId
        }">
            <div class="delivery-date">Delivery date: Tuesday, June 21</div>

            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src=${matchingCartItem.image}
              />

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingCartItem.name}
                </div>
                <div class="product-price">$${changeMoney(
                  matchingCartItem.priceCents
                )}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${
                    cartItem.quantity
                  }</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${
                    cartItem.productId
                  }">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    checked
                    class="delivery-option-input"
                    name="delivery-option-${cartItem.productId}"
                  />
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${cartItem.productId}"
                  />
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${cartItem.productId}"
                  />
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        `;
});

document.querySelector(".js-order-summary").innerHTML = cartItemHTMl;

const deleteLinkElement = document.querySelectorAll(".js-delete-quantity-link");

deleteLinkElement.forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    deleteFromCart(productId);
    updateDisplay(productId);
    document.querySelector(".js-middle-cart-quantity").innerHTML =
      updateCartQuantity() + " items";
  });
});

function updateDisplay(productId) {
  document.querySelector(`.cart-item-container-${productId}`).remove();
}

document.querySelector(".js-middle-cart-quantity").innerHTML =
  updateCartQuantity() + " items";

