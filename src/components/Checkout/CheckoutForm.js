import React from 'react';
import {  PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({customer, clientSecret}) => {

  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async () => {
    const card = elements.getElement(PaymentElement);
    const {paymentMethod, error} = await stripe.createPaymentMethod({
      type: 'card',
      card: card
    });

    if(error) {
      console.log(error);
    } else {
      const {error, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id
      });
  
      if(error) {
        console.log(error);
      } else {
        console.log('PaymentMethod', paymentIntent);
      }
    }
    
  }
  return (
    <div id="checkout_form">
      <PaymentElement />
      <button type="button" onClick={handleSubmit} >
        Pay
      </button>
    </div>
  )
}

export default CheckoutForm;