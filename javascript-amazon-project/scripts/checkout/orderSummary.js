import {cart,deleteFromCart,calculateCartQuantity,updateQuantity,updateDeliveryOption} from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import  changeMoney  from "../utils/money.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions,getDeliveryOption } from "../../data/deliveryOptions.js";
import { rederPaymentSummary } from "./paymentSummary.js";


export function renderOderSummary(){
  let cartItemHTMl = "";

  cart.forEach((cartItem) => {
    const matchingCartItem = getProduct(cartItem.productId);

    
    const deliveryOptionId = cartItem.deliveryOptionsId;
    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const newDate = today.add(deliveryOption.deliveryDays,'day');
    const dateString = newDate.format("dddd, MMMM D");


    cartItemHTMl += `
    
          <div class="cart-item-container cart-item-container-${
            cartItem.productId
          }">
              <div class="delivery-date">Delivery date: ${dateString}</div>

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
                    <span> Quantity: <span class="quantity-label js-quantity-label-${
                      matchingCartItem.id
                    }">${cartItem.quantity}</span> </span>
                    <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id="${
                      matchingCartItem.id
                    }">
                      Update
                    </span>
                    <input class="input-quantity input-quantity-${
                      matchingCartItem.id
                    }">
                    <span class="save-quantity-link js-save-quantity-link link-primary" data-product-id="${
                      matchingCartItem.id
                    }">Save</span>
                    <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id="${
                      matchingCartItem.id
                    }">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                    ${deliveryOptionsHTML(matchingCartItem,cartItem)}
                    
                </div>
              </div>
          </div>
          `;
  });


  function deliveryOptionsHTML (matchingCartItem,cartItem){

    let Html = '';

    deliveryOptions.forEach((deliveryOption)=>{

      const today = dayjs();
      const newDate = today.add(deliveryOption.deliveryDays,'day');
      const dateString = newDate.format("dddd, MMMM D");

      const priceString = deliveryOption.priceCents === 0 ? 'Free' : `$${changeMoney(deliveryOption.priceCents)}`

      const isChecked = deliveryOption.id === cartItem.deliveryOptionsId;

      Html += `
        <div class="delivery-option js-delivery-option" 
            data-product-id="${matchingCartItem.id}"
            data-delivery-options-id="${deliveryOption.id}">
          <input
            type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingCartItem.id}"
          />
          <div>
            <div class="delivery-option-date">${dateString}</div>
            <div class="delivery-option-price">${priceString} - Shipping</div>
          </div>
        </div>
      `
    });

    return Html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartItemHTMl;

  const deleteLinkElement = document.querySelectorAll(".js-delete-quantity-link");

  deleteLinkElement.forEach((deleteLink) => {
    deleteLink.addEventListener("click", () => {
      const productId = deleteLink.dataset.productId;
      deleteFromCart(productId);
      updateDisplayRemovedItem(productId);
      updateDisplayMiddle();
      rederPaymentSummary();
    });
  });

  function updateDisplayRemovedItem(productId) {
    document.querySelector(`.cart-item-container-${productId}`).remove();
  }

  document.querySelector(".js-middle-cart-quantity").innerHTML =
    calculateCartQuantity() + " items";

  const updateLinkElement = document.querySelectorAll(".js-update-quantity-link");
  updateLinkElement.forEach((updateLink) => {
    updateLink.addEventListener("click", () => {
      const productId = updateLink.dataset.productId;

      document
        .querySelector(`.cart-item-container-${productId}`)
        .classList.add("is-editing-quantity");

      const inputQuantityElement = document.querySelector(
        `.input-quantity-${productId}`
      );
      inputQuantityElement.addEventListener("keydown", (Event) => {
        if (Event.key === "Enter") {
          document
            .querySelector(`.cart-item-container-${productId}`)
            .classList.remove("is-editing-quantity");

          const newQuantity = Number(inputQuantityElement.value);

          if (newQuantity > 0 && newQuantity < 1000) {
            updateQuantity(productId, newQuantity);
            updateDisplayQuantity(productId, newQuantity);
            updateDisplayMiddle();
            rederPaymentSummary();
          }
        }
      });
    });
  });

  const saveLinkElement = document.querySelectorAll(".js-save-quantity-link");
  saveLinkElement.forEach((saveLink) => {
    saveLink.addEventListener("click", () => {
      const productId = saveLink.dataset.productId;

      document
        .querySelector(`.cart-item-container-${productId}`)
        .classList.remove("is-editing-quantity");

      const inputQuantityElement = document.querySelector(
        `.input-quantity-${productId}`
      );

      const newQuantity = Number(inputQuantityElement.value);
      if (newQuantity > 0 && newQuantity < 1000) {
        updateQuantity(productId, newQuantity);
        updateDisplayQuantity(productId, newQuantity);
        updateDisplayMiddle();
        rederPaymentSummary();
      }
    });
  });

  function updateDisplayQuantity(productId, newQuantity) {
    document.querySelector(`.js-quantity-label-${productId}`).innerHTML =
      newQuantity;
  }

  function updateDisplayMiddle() {
    document.querySelector(".js-middle-cart-quantity").innerHTML =
      calculateCartQuantity() + " items";
  }


  document.querySelectorAll('.js-delivery-option')
    .forEach((element)=>{
      element.addEventListener(('click'),()=>{
        const {productId,deliveryOptionsId} = element.dataset ;
        updateDeliveryOption(productId,deliveryOptionsId);
        renderOderSummary();
        rederPaymentSummary();
      })
    })
}
renderOderSummary();
