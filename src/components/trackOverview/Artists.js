import Image from 'next/image';
import React from 'react';
const songs = [
  {
    title: 'No es Tuyo',
    artist: 'Malucci',
    category: 'Single',
    image: 'malucci.jpeg',
  },
  {
    title: 'Hoy',
    artist: 'Jamby El Favo',
    category: 'Single',
    image: 'jamby.jpeg',
  },
  {
    title: 'Cielos Abiertos',
    artist: 'New Wine',
    category: 'Single',
    image: 'artist-placeholder.jpeg',
  },
  {
    title: 'Footprints',
    artist: 'T.O.K.',
    category: 'Single',
    image: 'artist-placeholder.jpeg',
  },
  {
    title: 'Perdoname (Live)',
    artist: 'Gilberto Santa Rosa',
    category: 'Single',
    image: 'gilberto-santa-rosa.jpeg',
  },

  {
    title: 'Reggae and Roll',
    artist: 'Godwana',
    category: 'Single',
    image: 'artist-placeholder.jpeg',
  },
  {
    title: 'Boomerang',
    artist: 'Vilma Palma e Vampiros',
    category: 'Single',
    image: 'artist-placeholder.jpeg',
  },
  {
    title: 'Fok mwen di ou, te gen yon fanm - live',
    artist: 'Yves & Yvan',
    category: 'Single',
    image: 'artist-placeholder.jpeg',
  },
];

const Artists = () => {
  return (
    <div>
      <h2 className='text-[22px] font-semibold mb-3.5'>
        Songs in This Mix Tape
      </h2>
      <div className='flex flex-wrap overflow-hidden -mx-[7.5px]'>
        {songs.map((song, index) => (
          <div
            key={index}
            className='w-full sm:w-1/2 md:w-1/3  lg:w-1/4 basis-full sm:basis-1/2 md:basis-1/3  lg:basis-1/4 p-[7.5px] '
          >
            <div className='bg-white rounded-md pl-2.5 pt-2.5 flex pb-[18px]'>
              <div className='w-[112px]'>
                <Image
                  alt={song.artist}
                  height={107}
                  width={112}
                  className='w-24 sm:w-[112px] sm:h-[107px] object-cover'
                  src={`/assets/img/artists/${song.image}`}
                />
              </div>
              <div className='pl-4 pr-2 mt-4 text-MoshDark-7'>
                <span className='block text-sm font-open-sans mb-1.5'>
                  {song.title}
                </span>
                <span
                  title={song.artist}
                  className='block font-bold !leading-snug'
                >
                  {song.artist}
                </span>
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
