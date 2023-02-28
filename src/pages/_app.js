import AppContext from '@/context';
import '@/styles/globals.css';
import 'typeface-kanit';
import 'typeface-open-sans';

export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}
