import Image from 'next/image';

const collectors = [
  { id: 1, name: 'Bevansby', username: 'bevansby', purchased: 10 },
  { id: 2, name: 'Craig', username: 'craig', purchased: 4 },
  { id: 3, name: 'Connor Jenkins', username: 'connor', purchased: 5 },
  { id: 4, name: 'Cooper', username: 'cooper', purchased: 4 },
];
const CollectorsList = () => {
  return (
    <ul className='mt-6'>
      {collectors.map((collector) => (
        <li key={collector.id} className='flex justify-between mb-7'>
          <span className='flex'>
            <span className='mr-3.5'>
              <Image
                alt='icon'
                src={`/assets/img/avatar/avatar${collector.id}.png`}
                width={40}
                height={40}
              />
            </span>
            <span>
              <p className='font-medium text-MoshDark-7'>{collector.name}</p>
              <p className='text-sm opacity-50 text-MoshDark-7 font-open-sans'>
                @{collector.username}
              </p>
            </span>
          </span>
          <span className='text-base font-medium text-MoshDark-7'>
            {collector.purchased}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CollectorsList;
