import Logo from '@/icons/Logo';
import Link from 'next/link';
import Form from './Form';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginContext } from '@/context/LoginContext';
const LoginForm = () => {
  const router = useRouter();
  const { state } = useContext(LoginContext);
  useEffect(() => {
    if (state?.user?.idToken) {
      router.push('/');
    }
  }, [state]);

  return (
    <div className='overflow-hidden relative min-h-[calc(100vh_-_100px)] md:min-h-[calc(100vh_-_110px)] login-form'>
      <div className='mosh-container-normal pt-14 md:pt-[73px] pb-14 relative z-[1]'>
        <div className='login bg-sweetDark border rounded-xl font-open-sans border-MoshDark-6 shadow-login w-full max-w-[490px] mx-auto  p-6 sm:p-[30px] lg:p-[35px]'>
          <div className='text-center'>
            <Logo className='mx-auto' width={250} />
          </div>
          <p className='mt-4 text-sm text-center  px-3 max-w-[340px] mx-auto !leading-relaxed'>
            Welcome back! Log in with your email address or your crypto wallet.
          </p>
          <Form />
          <p className='py-5 mt-4 text-sm text-center text-MoshLight-1'>
            By connecting a wallet, you agree to Mosh&rsquo;s Terms of Service
            and consent to its{' '}
            <Link href='/' className='!leading-relaxed text-primary'>
              Privacy Policy
            </Link>
            .
          </p>
          <p className='text-center !leading-relaxed text-sm'>
            Don&rsquo;t have an account?{' '}
            <Link href='/signup' className='text-primary'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
      {/* for design */}
      <div
        aria-hidden='true'
        className='absolute z-0 transform -translate-x-1/2 rounded-full opacity-50 left-1/2 blur-lg -bottom-1/3'
        style={{
          width: '738px',
          height: '419px',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(248, 78, 36, 0.501961) 0%, rgba(17, 11, 29, 0.0001) 100%)',
        }}
      ></div>

      <div
        aria-hidden='true'
        className='absolute transform -translate-y-1/2 opacity-50   -left-[600px] top-1/2 blur-lg rounded-full z-0'
        style={{
          width: '917px',
          height: '917px',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(248, 78, 36, 0.501961) 0%, rgba(17, 11, 29, 0.0001) 100%)',
        }}
      ></div>

      <div
        aria-hidden='true'
        className='absolute transform -translate-y-1/2 opacity-50  -right-[350px] top-[60%] blur-lg rounded-full z-0 '
        style={{
          width: '543px',
          height: '686px',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(248, 78, 36, 0.501961) 0%, rgba(17, 11, 29, 0.0001) 100%)',
        }}
      ></div>
    </div>
  );
};

export default LoginForm;
