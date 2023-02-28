import React from 'react';
const features = [
  {
    title: "Create your account (it's free!)",
    description:
      'Purchase a Song Token with a credit card or USDC on Polygon (Matic).',
    id: 1,
  },
  {
    title: 'Collect songs',
    description:
      'Song tokens can be redeemed for 1 random royalty-generating song from a MixTape release.',
    id: 2,
  },
  {
    title: 'Earn royalties',
    description:
      'Earn royalties alongside your favorite artists when your songs stream on platforms such as Spotify, Apple Music and 50+ other music stores.',
    id: 3,
  },
  {
    title: 'Build your music empire',
    description:
      'Grow your music collection over time by holding on to your songs or trade them with other fans!',
    id: 4,
  },
];
const SignupSideInfo = () => {
  return (
    <div className='max-w-[409px] pr-5 md:-mt-2'>
      <h2 className='text-[42px] font-bold '>Let’s Mosh</h2>
      <p className=' font-open-sans'>
        Create a free Mosh account to begin building your music empire and
        earning royalties alongside your favorite artists.
      </p>
      {features.map((feature) => (
        <div
          key={feature.id}
          className='pt-6 lg:pt-7 xl:pt-8 max-w-[360px] md:pr-4'
        >
          <div className='flex mb-3'>
            <span className='flex items-center justify-center font-bold text-center text-white rounded-full bg-primary h-7 w-7 font-aril'>
              {feature.id}
            </span>
            <span className='flex items-center pl-3 font-bold font-aril'>
              {feature.title}
            </span>
          </div>
          <p className='font-open-sans '>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SignupSideInfo;
