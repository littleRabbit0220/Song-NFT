import Logo from '@/icons/Logo';
import Link from 'next/link';
import Form from './Form';
import SignupSideInfo from './SignupSideInfo';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginContext } from '@/context/LoginContext';
const SignupForm = () => {
  const router = useRouter();
  const { state } = useContext(LoginContext);
  useEffect(() => {
    if (state?.user?.idToken) {
      router.push('/');
    }
  }, [state]);

  return (
    <div className='overflow-hidden relative min-h-[calc(100vh_-_100px)] md:min-h-[calc(100vh_-_110px)] login-form'>
      <div className='max-w-[1058px] px-5 w-full mx-auto pt-14 md:pt-[73px] pb-14 md:pb-[150px] relative z-[1]'>
        <div className='flex flex-col-reverse md:flex-row'>
          <div className='mt-10 basis-full md:basis-1/2 md:mt-0'>
            <SignupSideInfo />
          </div>
          <div className='basis-full md:basis-1/2 '>
            <div className='login bg-sweetDark border rounded-xl font-open-sans border-MoshDark-6 shadow-login w-full max-w-[490px] mx-auto  px-5 py-7 md:py-[35px]'>
              <div className='text-center'>
                <Logo className='mx-auto' width={250} />
              </div>
              <p className='mt-4 text-sm text-center  px-3 max-w-[340px] mx-auto !leading-relaxed'>
                Welcome back! Log in with your email address or your crypto
                wallet.
              </p>
              <Form />
              <p className='py-5 mt-4 text-sm text-center sm:px-4 text-MoshLight-1'>
                By connecting a wallet, you agree to Mosh&rsquo;s Terms of
                Service and consent to its{' '}
                <Link href='/' className='!leading-relaxed text-primary'>
                  Privacy Policy
                </Link>
                .
              </p>
              <p className='text-center !leading-relaxed text-sm '>
                Have an account?{' '}
                <Link href='/login' className='text-primary'>
                  Sign in
                </Link>
              </p>
            </div>
          </div>
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

export default SignupForm;
