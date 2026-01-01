
function Cart(localStorageKey){
  const cart = {
    cartItems: JSON.parse(localStorage.getItem(localStorageKey)) || [],

    saveLocalStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

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
          deliveryOptionsId: '1',
        });
      }

      this.saveLocalStorage();
    },

    deleteFromCart(productId) {
      let newCart = [];
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });

      this.cartItems = newCart;
      this.saveLocalStorage();
    },

    calculateCartQuantity() {
      let cartQuantity = 0;

      this.cartItems.forEach((item) => {
        cartQuantity += item.quantity;
      });

      return cartQuantity;
    },

    updateQuantity(productId, newQuantity) {
      let matchingCartItem;

      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          matchingCartItem = cartItem;
        }
      });

      matchingCartItem.quantity = newQuantity;
      this.saveLocalStorage();
    },

    updateDeliveryOption(productId,deliveryOptionsId){
      let matchingDeliveryItem;

      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          matchingDeliveryItem = cartItem;
        }
      });

      matchingDeliveryItem.deliveryOptionsId = deliveryOptionsId;
      this.saveLocalStorage();
    }
  };
  return cart;
}


const cart = Cart('cart-oop');

const buisnessCart = Cart('buisness-cart');







// [
//   {
//     productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//     quantity: 2,
//     deliveryOptionsId: '1'
//   },
//   {
//     productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//     quantity: 1,
//   },
// ];
