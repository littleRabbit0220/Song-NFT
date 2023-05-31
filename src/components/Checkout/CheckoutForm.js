import React, { useContext, useEffect, useState } from 'react';
import {  CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';

const CheckoutForm = ({clientSecret}) => {

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { quentity } = router.query;
  const {state, createPaymentIntent, setErrorStatus, setModalStatus, setLoadingStatus, setPaymentStatus} = useContext(UserContext);
  const [payMethod, setPayMethod] = useState(null);

  const handleSubmit = async () => {
    try {
      setLoadingStatus(true);
      const cardElement = elements.getElement(CardElement);
      const {paymentMethod, error} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement
      });
      if(error) {
        throw "Faile to create Payment Method.";
      } else {
        setPayMethod(paymentMethod);
        createPaymentIntent(quentity);
      }
    } catch(error) {
      setErrorStatus(error);
    }
    
  }
  useEffect(() => {
    if(state.clientSecret !== null && state.clientSecret !== undefined) {
      const confirmPayment = async() => {
        const {error, paymentIntent} = await stripe.confirmCardPayment(state.clientSecret, {
          payment_method: payMethod.id
        });
    
        if(error) {
          setErrorStatus('Failed to confirm payment')
        } else {
          console.log(paymentIntent);
          setLoadingStatus(false);
          setPaymentStatus(null);
          setModalStatus(
            true,
            "Success!",
            (
              <div className="p-5 pt-2">
                <p className="text-slate-500"><strong>Congratulation!</strong>You paied successfully.</p>
                <div className="mt-4 flex justify-center items-center">
                  <button 
                    type="button" 
                    className="text-white bg-red-500 rounded px-3 py-1 hover:bg-red-800"
                    onClick={() => {
                      setModalStatus(false, "", <></>);
                      router.push('/');
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )
          )
        }
      }
      confirmPayment();
    }
  },[state.clientSecret]);

  return (
    <div id="checkout_form">
      <h3 className='text-2xl text-slate-400 text-center mb-2'>{String("Checkout").toUpperCase()}</h3>
      <CardElement />
      <div className='grid grid-cols-2 mt-3'>
        <div className='pr-1 grid-span-1'>
          <button type="button" onClick={handleSubmit} className='rounded w-full bg-green-500 hover:bg-green-800 py-2' >
            Pay
          </button>
        </div>
        <div className='pl-1 grid-span-1'>
          <button type="button" onClick={() => router.push('/')} className='rounded w-full py-2 border text-slate-300 hover:bg-slate-200 hover:text-slate-500'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm;