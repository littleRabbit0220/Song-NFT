import EthIcon from '@/icons/EthIcon';
import PlusIcon from '@/icons/PlusIcon';
import USDTIcon from '@/icons/USDTIcon';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const Payment = () => {
  let [plan, setPlan] = useState('masterCard');
  return (
    <div className='w-full p-5 bg-white rounded-xl'>
      <p className='mb-1 text-xs leading-relaxed tracking-widest uppercase text-secondary'>
        account balance
      </p>

      <div className='px-[26px] py-5 mb-8 border rounded-md border-MoshLight-2 text-secondary '>
        <h2 className='text-4xl  font-open-sans !leading-normal font-medium'>
          $119.99
        </h2>
        <p className=''>Payment Amount</p>
      </div>
      <p className='mb-1 text-xs leading-relaxed tracking-widest uppercase text-secondary'>
        account balance
      </p>

      <RadioGroup value={plan} onChange={setPlan}>
        {/* <RadioGroup.Label>Plan</RadioGroup.Label> */}
        <RadioGroup.Option value='eth'>
          {({ checked }) => (
            <div
              className={`${
                checked ? 'shadow-borderActive' : 'shadow-borderInactive'
              } flex justify-between p-4 sm:p-6 rounded-md  text-secondary`}
            >
              <div className='flex items-center'>
                <EthIcon />
                <span className='pl-4'>
                  <h2 className='text-lg font-open-sans !leading-normal font-medium'>
                    0.01
                  </h2>
                  <p className='text-sm opacity-60 sm:text-base'>ETH balance</p>
                </span>
              </div>
              <span className='pl-4'>
                <h2 className='text-lg font-open-sans !leading-normal font-medium'>
                  $0.00
                </h2>
                <p className='text-sm opacity-60 sm:text-base'>
                  Account balance
                </p>
              </span>
            </div>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value='usdt'>
          {({ checked }) => (
            <div
              className={`${
                checked ? 'shadow-borderActive' : 'shadow-borderInactive'
              } flex justify-between p-4 sm:p-6 mt-2.5 rounded-md  text-secondary`}
            >
              <div className='flex items-center'>
                <USDTIcon />
                <span className='pl-4'>
                  <h2 className='text-lg font-open-sans !leading-normal font-medium'>
                    0.01
                  </h2>
                  <p className='text-sm opacity-60 sm:text-base'>
                    USDT balance
                  </p>
                </span>
              </div>
              <span className='pl-4'>
                <h2 className='text-lg font-open-sans !leading-normal font-medium'>
                  $0.00
                </h2>
                <p className='text-sm opacity-60 sm:text-base'>
                  Account balance
                </p>
              </span>
            </div>
          )}
        </RadioGroup.Option>

        <button className='w-full px-4 py-3 my-8 transition duration-200 rounded-md bg-primary font-suisse-intl hover:bg-opacity-90'>
          Pay with Crypto
        </button>
        <p className='mb-1 text-xs leading-relaxed tracking-widest uppercase text-secondary'>
          account balance
        </p>
        <button className='flex items-center justify-center w-full px-4 py-2.5 mb-8 border rounded-md border-MoshLight-2 font-suisse-intl text-secondary'>
          <PlusIcon className='mr-2' />
          Link a card or bank
        </button>
        <RadioGroup.Option value='masterCard'>
          {({ checked }) => (
            <div
              className={`${
                checked ? 'shadow-borderActive' : 'shadow-borderInactive'
              } flex justify-between p-4 sm:p-6 mt-2.5 rounded-md  text-secondary relative`}
            >
              <div className='flex items-center'>
                <Image
                  width={75}
                  height={51}
                  alt='master card'
                  src='/assets/img/master-card.png'
                />
                <div className='pl-5 font-open-sans'>
                  <p className='text-sm sm:text-lg'>Revolut Master Card</p>
                  <p className='mt-1 text-sm font-bold opacity-60 sm:text-base'>
                    Debit ••89
                  </p>
                </div>
              </div>
              {plan === 'masterCard' && (
                <span className='absolute pl-4 bg-white right-4 top-4'>
                  <h2 className='sm:text-lg text-sm font-open-sans !leading-normal font-medium'>
                    Default
                  </h2>
                </span>
              )}
            </div>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value='discover'>
          {({ checked }) => (
            <div
              className={`${
                checked ? 'shadow-borderActive' : 'shadow-borderInactive'
              } flex justify-between p-4 sm:p-6 mt-2.5 rounded-md  text-secondary`}
            >
              <div className='flex items-center'>
                <Image
                  alt='discover'
                  width={75}
                  height={51}
                  src='/assets/img/discover.png'
                />
                <div className='pl-5 font-open-sans'>
                  <p className='text-sm sm:text-lg'>Discover it</p>
                  <p className='mt-1 text-sm font-bold opacity-60 sm:text-base'>
                    Debit ••89
                  </p>
                </div>
              </div>
            </div>
          )}
        </RadioGroup.Option>

        <RadioGroup.Option value='citi-bank'>
          {({ checked }) => (
            <div
              className={`${
                checked ? 'shadow-borderActive' : 'shadow-borderInactive'
              } flex justify-between p-4 sm:p-6 mt-2.5 rounded-md  text-secondary`}
            >
              <div className='flex items-center'>
                <Image
                  alt='Citibank'
                  width={75}
                  height={51}
                  src='/assets/img/citi-bank.png'
                />
                <div className='pl-5 font-open-sans'>
                  <p className='text-sm sm:text-lg'>Citibank Debit</p>
                  <p className='mt-1 text-sm font-bold opacity-60 sm:text-base'>
                    Debit ••89
                  </p>
                </div>
              </div>
            </div>
          )}
        </RadioGroup.Option>

        <button className='w-full px-4 py-3 mt-8 transition duration-200 rounded-md bg-sweetTurquoise font-suisse-intl hover:bg-opacity-90'>
          Pay with Card
        </button>
      </RadioGroup>
    </div>
  );
};

export default Payment;
