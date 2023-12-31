import Footer from '@/components/footer';
import Header from '@/components/header';
import SignupForm from '@/components/signup';
import Head from 'next/head';
import React from 'react';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Mosh NFT - Create Account</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Header />
      <SignupForm />
      <Footer />
    </>
  );
}
