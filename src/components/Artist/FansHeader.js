import SearchIcon from '@/icons/SearchIcon';
import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import ArrowDown from '@/icons/ArrowDown';
const orderList = [
  { id: 1, name: 'High to Low', unavailable: false },
  { id: 2, name: 'Low to Hight', unavailable: false },
  { id: 3, name: 'Newest Added', unavailable: false },
  { id: 4, name: 'Oldest Added', unavailable: true },
];

const FansHeader = () => {
  const [selectedOrder, setSelectedOrder] = useState(orderList[0]);
  //

  return (
    <div className='mt-4 mosh-container-normal z-[5] relative '>
      <div className='relative flex items-center justify-between -ml-3 flex-nowrap'>
        <div className='pl-3  select-none basis-full md:basis-[30%] lg:basis-auto xl:basis-[30%]'>
          <h2 className='text-[22px]'>Top Fans</h2>
        </div>
        <div className='flex flex-wrap '>
          <div className='flex-grow max-w-xs pb-3 pl-3 select-none'>
            <div className='relative w-full flex font-open-sans border rounded-[10px] h-[44px] lg:h-[48px] border-white border-opacity-25 items-center'>
              <Listbox value={selectedOrder} onChange={setSelectedOrder}>
                <div className='relative w-full h-full'>
                  <Listbox.Button className='relative flex items-center min-w-[175px] w-full px-[15px] h-full'>
                    <span className='block pr-5 truncate'>
                      {selectedOrder.name}
                    </span>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                      <ArrowDown
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Listbox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base text-white border rounded-md shadow-lg border-white/25 bg-MoshDark-7 max-h-60'>
                      {orderList.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-pointer pl-3 pr-2 text-white select-none py-2 ${
                              active ? 'bg-white/10 ' : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate text-white ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FansHeader;
