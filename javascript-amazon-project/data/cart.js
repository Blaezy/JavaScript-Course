export const cart = [];

export function addToCart(productId) {
  let isMatchingItem = false;

  cart.forEach((item) => {
    if (item.productId === productId) {
      item.quantity += 1;
      isMatchingItem = true;
    }
  });

  if (cart && !isMatchingItem) {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}