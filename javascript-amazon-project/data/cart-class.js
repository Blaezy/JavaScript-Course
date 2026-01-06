class Cart {
  cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)) || [];
  localStorageKey;


  constructor(localStorageKey){  // this will run when the object is created and its name is fixed 
    this.localStorageKey = localStorageKey;
  }

  saveLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId, quantity) {
    let isMatchingItem = false;

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        cartItem.quantity += quantity;
        isMatchingItem = true;
      }
    });

    if (this.cartItems && !isMatchingItem) {
      this.cartItems.push({
        productId: productId,
        quantity: quantity,
        deliveryOptionsId: "1",
      });
    }

    this.saveLocalStorage();
  }

  deleteFromCart(productId) {
    let newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveLocalStorage();
  }

  calculateCartQuantity() {
    let cartQuantity = 0;

    this.cartItems.forEach((item) => {
      cartQuantity += item.quantity;
    });

    return cartQuantity;
  }

  updateQuantity(productId, newQuantity) {
    let matchingCartItem;

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingCartItem = cartItem;
      }
    });

    matchingCartItem.quantity = newQuantity;
    this.saveLocalStorage();
  }

  updateDeliveryOption(productId, deliveryOptionsId) {
    let matchingDeliveryItem;

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingDeliveryItem = cartItem;
      }
    });

    matchingDeliveryItem.deliveryOptionsId = deliveryOptionsId;
    this.saveLocalStorage();
  }
}

const cart = new Cart('cart-oop');
const buisness = new Cart('cart-buisness');

console.log(cart);
console.log(buisness);

console.log("is everything ok");

