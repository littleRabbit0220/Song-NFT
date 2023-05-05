import AppContext from '@/context';
import '@/styles/globals.css';
import 'typeface-kanit';
import 'typeface-open-sans';
import '@fontsource/orbitron';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

export default function App({ Component, pageProps }) {
  return (
    <Elements stripe = {stripePromise}>
      <AppContext>
      <Component {...pageProps} />
      
    </AppContext>
    </Elements>
  );
}
