import AppContext from '@/context';
import '@/styles/globals.css';
import 'typeface-kanit';
import 'typeface-open-sans';
import '@fontsource/orbitron';

export default function App({Component, pageProps}) {
  return (
    <AppContext>
      <Component {...pageProps}/>
    </AppContext>
  );

}
