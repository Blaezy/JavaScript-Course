import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import changeMoney from "../utils/money.js";



export function rederPaymentSummary(){
    
    let productPriceCents = 0;
    let productShippingCents = 0;
    cart.forEach((cartItem)=>{
        let product = getProduct(cartItem.productId);
        productPriceCents += cartItem.quantity * product.priceCents;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId)
        productShippingCents += deliveryOption.priceCents;

        
    })
    const beforeTaxproductCents = productPriceCents + productShippingCents;
    const taxProductCents = beforeTaxproductCents * 0.1;
    const totalProductCents = beforeTaxproductCents + taxProductCents;

    let paymentHTML = `
        <div class="payment-summary-title">Order Summary</div>

        <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">$${changeMoney(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${changeMoney(productShippingCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${changeMoney(beforeTaxproductCents)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${changeMoney(taxProductCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${changeMoney(totalProductCents)}</div>
        </div>

        <button class="place-order-button button-primary">
        Place your order
        </button>
    `
    document.querySelector(".js-payment-summary")
        .innerHTML = paymentHTML;

}

