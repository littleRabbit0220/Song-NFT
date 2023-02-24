import React from 'react';
const tracks = [
  { id: 99, title: 'Jeremías 17 - 5', duration: '3:18', artist: 'Canserbero' },
  {
    id: 1,
    title: 'Mañana Será Otro Día',
    duration: '4:29',
    artist: 'Canserbero',
  },
  {
    id: 2,
    title: 'Ready - Apache y Canserbero',
    duration: '3:28',
    artist: 'Canserbero',
  },
  {
    id: 4,
    title: "Si'm te ka touche, bay...",
    duration: '4:14',
    artist: 'Lochard Remy',
  },
  {
    id: 5,
    title: 'Y la Felicidad Qué',
    duration: '3:45',
    artist: 'Canserbero',
  },
  { id: 6, title: 'Interludio K219', duration: '1:02', artist: 'Canserbero' },
  {
    id: 7,
    title: 'en un espejo vi (Muerte)',
    duration: '4:29',
    artist: 'Canserbero',
  },
  { id: 8, title: 'De Mi Muerte', duration: '3:44', artist: 'Canserbero' },
  {
    id: 9,
    title: 'Sin Voluntad - Mal',
    duration: '3:55',
    artist: 'Gilberto Santa Rosa',
  },
  {
    id: 10,
    title: 'Ti yotte Orchestre ...',
    duration: '3:08',
    artist: 'Orchestre Septentrional',
  },
];

const TracksList = () => {
  return (
    <div className='mb-8'>
      <ul className='w-full'>
        {tracks.map((track, index) => (
          <li
            key={index}
            className={`flex items-center justify-between py-[8.5px] pl-4 md:pl-[260px] pr-4 md:pr-[68px] ${
              index % 2 !== 0 && 'bg-MoshLight-1 bg-opacity-10'
            }`}
          >
            <span className='flex items-center'>
              <span className='text-MoshLight-1 text-xs md:text-base mr-[35px] font-open-sans leading-[160%]'>
                {track.title}
              </span>
              <span className='bg-white text-MoshDark-6 px-1.5 md:px-2.5 py-1 sm:py-[5px]  text-[10px] md:text-xs leading-[160%] truncate '>
                {track.artist}
              </span>
            </span>

            <span className='pl-2 text-xs sm:text-sm text-MoshLight-2 font-open-sans'>
              {track.duration}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TracksList;
