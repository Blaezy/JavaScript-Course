export let cart = JSON.parse(localStorage.getItem("savedCartItem")) || [];

// [
//   {
//     productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//     quantity: 2,
//   },
//   {
//     productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//     quantity: 1,
//   },
// ];

export function manuallyClearCartStorage(){
  localStorage.clear("savedCartItem")
}

function saveLocalStorage() {
  localStorage.setItem("savedCartItem", JSON.stringify(cart));
}

export function addToCart(productId, quantity) {
  let isMatchingItem = false;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cartItem.quantity += quantity;
      isMatchingItem = true;
    }
  });

  if (cart && !isMatchingItem) {
    cart.push({
      productId: productId,
      quantity: quantity,
    });
  }

  saveLocalStorage();
}

export function deleteFromCart(productId) {
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveLocalStorage();
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
  let matchingCartItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingCartItem = cartItem;
    }
  });

  matchingCartItem.quantity = newQuantity;
  saveLocalStorage();
}
