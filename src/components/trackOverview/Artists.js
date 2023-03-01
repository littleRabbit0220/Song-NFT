import Image from 'next/image';
import React from 'react';
const songs = [
  {
    title: 'No es Tuyo',
    artist: 'Malucci',
    category: 'Single',
    date: '2020',
    image: 'malucci.png',
  },
  {
    title: 'Hoy',
    artist: 'Jamby El Favo',
    category: 'Single',
    date: '2020',
    image: 'jamby.png',
  },
  {
    title: 'Cielos Abiertos',
    artist: 'New Wine',
    category: 'Single',
    date: '2020',

    image: 'new-wine.png',
  },
  {
    title: 'Footprints',
    artist: 'T.O.K.',
    category: 'Single',
    date: '2020',
    image: 't.o.k.png',
  },
  {
    title: 'Perdoname (Live)',
    artist: 'Gilberto Santa Rosa',
    category: 'Single',
    date: '2020',
    image: 'gilberto-santa-rosa.png',
  },
  {
    title: 'Fok mwen di ou, te gen..',
    artist: 'Yves & Yvan',
    category: 'single',
    date: '2020',
    image: 'yves-and-yvan.png',
  },
  {
    title: 'Reggae and Roll',
    artist: 'Godwana',
    category: 'Single',
    date: '2020',
    image: 'gondwana.png',
  },
  {
    title: 'Boomerang',
    artist: 'Vilma Palma e Vampiros',
    category: 'Single',
    date: '2020',

    image: 'vilma-palma-e-vampiros.png',
  },
  {
    title: 'No es Tuyo',
    artist: 'Malucci',
    category: 'Single',
    date: '2020',
    image: 'anuel-aa.png',
  },
  {
    title: 'Hoy',
    artist: 'Jamby El Favo',
    category: 'Single',
    date: '2020',
    image: 'anuel-aa.png',
  },
];

const Artists = () => {
  return (
    <div className='hidden md:block'>
      <h2 className='text-[22px] font-semibold mb-3.5'>
        Songs in This Mix Tape
      </h2>
      <div className='flex flex-wrap overflow-hidden -mx-[7.5px]'>
        {songs.map((song, index) => (
          <div
            key={index}
            className='w-full sm:w-1/2 md:w-1/3  lg:w-1/4 basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '
          >
            <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-3.5'>
              <div className='w-[70px]'>
                <Image
                  alt={song.artist}
                  height={140}
                  width={166}
                  className='w-[70px] h-[83px] object-cover rounded'
                  src={`/assets/img/artists/${song.image}`}
                />
              </div>
              <div className='flex-1 w-full pl-2.5 pr-3 text-MoshDark-7'>
                <span className='block font-bold !leading-snug'>
                  {song.title}
                </span>
                <span
                  title={song.artist}
                  className='block text-sm font-open-sans  mt-0.5 '
                >
                  {song.artist}
                </span>
                <span className='block text-sm font-open-sans mt-0.5'>
                  {song.category} • {song.date}
                </span>
                <button className=' hover:bg-opacity-20 transition-colors duration-200 ease-in-out mt-4 block w-full text-xs font-semibold text-center uppercase rounded bg-MoshDark-7 font-open-sans bg-opacity-10 py-1.5 px-1.5'>
                  Listen to this song
                </button>
                <button className='mt-1.5 flex'>
                  <Image
                    className='h-[33px] w-auto'
                    src='/assets/img/icons/play-and-follow-logo.png'
                    width={228}
                    height={67}
                    alt='play and follow logo'
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* <div className='basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '>
          <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-[18px]'>
            <div>
              <Image
                alt='Artist Ansy Derose'
                height={104}
                width={112}
                className='w-24 sm:w-auto'
                src='/assets/img/artists/ansy-derose.png'
              />
            </div>
            <div className='pl-4 mt-4 text-MoshDark-7'>
              <span className='block text-sm font-open-sans mb-1.5'>
                Puerto Rican Rapper
              </span>
              <span className='block font-bold'>Ansy Derose</span>
            </div>
          </div>
        </div>
        <div className='basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '>
          <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-[18px]'>
            <div>
              <Image
                alt='Artist Bacanos'
                height={104}
                width={112}
                className='w-24 sm:w-auto'
                src='/assets/img/artists/bacanos.png'
              />
            </div>
            <div className='pl-4 mt-4 text-MoshDark-7'>
              <span className='block text-sm font-open-sans mb-1.5'>
                Puerto Rican Rapper
              </span>
              <span className='block font-bold'>Bacanos</span>
            </div>
          </div>
        </div>
        <div className='basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '>
          <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-[18px]'>
            <div>
              <Image
                alt='Artist Canserbero'
                height={104}
                width={112}
                className='w-24 sm:w-auto'
                src='/assets/img/artists/canserbero.png'
              />
            </div>
            <div className='pl-4 mt-4 text-MoshDark-7'>
              <span className='block text-sm font-open-sans mb-1.5'>
                Puerto Rican Rapper
              </span>
              <span className='block font-bold'>Canserbero</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Artists;
