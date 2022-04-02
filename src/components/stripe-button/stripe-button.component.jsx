import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
const priceForStripe= price*100;
const publishableKey='pk_test_SIOhi6HcpycvtHO0bzLoGBml00GOMbptgA';
 const onToken = token=>{
    console.log(token);
    alert('Payment Successful');
}
return(
<StripeCheckout
label='Pay Now'
name='Fashion-Care'
billingAddress
shippingAddress
image="https://stripe.com/img/documentation/checkout/marketplace.png"
description={`Your total is $ ${price}`}// $${price}
amount={priceForStripe}
panelLabel='Pay Now'
token={onToken}
stripeKey={publishableKey}
bitcoin 
/>

  );
};


export default StripeCheckoutButton;