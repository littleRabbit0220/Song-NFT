import SearchIcon from '@/icons/SearchIcon';
import { useState, Fragment } from 'react';
import { Switch, Popover, Listbox, Transition } from '@headlessui/react';
import ArrowDown from '@/icons/ArrowDown';
import { IoMdOptions } from 'react-icons/io';
import ExploreSidebar from './ExploreSidebar';
const orderList = [
  { id: 1, name: 'High to Low', unavailable: false },
  { id: 2, name: 'Low to Hight', unavailable: false },
  { id: 3, name: 'Newest Added', unavailable: false },
  { id: 4, name: 'Oldest Added', unavailable: true },
];

const timePeriod = [
  { id: 1, name: '24h' },
  { id: 2, name: '1D' },
  { id: 3, name: '2D' },
  { id: 4, name: '1M' },
  { id: 5, name: 'All' },
];
const ExploreHeader = () => {
  const [viewByTrackPad, setViewByTrackPad] = useState(false);
  const [viewByUser, setViewByUser] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(orderList[0]);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState(timePeriod[0]);
  //

  const viewByTrackPadClick = () => {
    setViewByTrackPad(!viewByTrackPad);
  };
  const viewByUserClick = () => {
    setViewByUser(!viewByUser);
  };
  return (
    <>
      <div className='relative flex flex-wrap items-center justify-between lg:flex-nowrap'>
        <div className='flex mb-2 md:mb-0'>
          <h2 className='text-[22px] pr-5'>Trending</h2>
          <span className='text-[22px] text-MoshLight-1 opacity-50'>Top</span>
        </div>

        <Popover className='relative block ml-auto md:hidden'>
          <Popover.Button className='p-2 border rounded border-white/25 text-MoshLight-1 '>
            <IoMdOptions />
          </Popover.Button>

          <Popover.Panel className=' absolute z-10 top-9 right-[calc(100%_-_35px)] min-w-[200px] border-white/10 border rounded'>
            <ExploreSidebar />
          </Popover.Panel>
        </Popover>
        <div className='flex flex-wrap -ml-3 '>
          <div className='pl-3 py-2 md:py-3 select-none basis-full md:basis-[30%] lg:basis-auto xl:basis-[30%]'>
            <div className='flex font-open-sans border rounded-[10px] h-[44px] lg:h-[48px] px-[15px] border-white border-opacity-25 items-center '>
              <button type='submit'>
                <SearchIcon />
              </button>
              <input
                type='search'
                placeholder='Search'
                name='search'
                id='search'
                className='w-full pl-2 bg-transparent placeholder:text-white placeholder:text-opacity-20 focus:outline-none'
              />
            </div>
          </div>

          <div className='py-2 pl-3 select-none basis-1/2 sm:basis-auto md:py-3'>
            <div
              onClick={viewByTrackPadClick}
              className={`cursor-pointer flex justify-between font-open-sans border rounded-[10px] h-[44px] lg:h-[48px] px-[15px] border-white ${
                viewByTrackPad ? 'border-opacity-25' : 'border-opacity-10'
              } items-center`}
            >
              <span
                className={`text-white text-xs sm:text-base ${
                  viewByTrackPad ? ' text-opacity-100' : ' text-opacity-25'
                } pr-2.5`}
              >
                Trackpad
              </span>
              <Switch
                checked={viewByTrackPad}
                onChange={setViewByTrackPad}
                className={`bg-white bg-opacity-10 relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className='sr-only'>Trackpad</span>
                <span
                  className={`${
                    viewByTrackPad ? 'translate-x-[22px]' : 'translate-x-1'
                  } inline-block h-[19px] w-[19px] transform rounded-full ${
                    viewByTrackPad ? 'bg-primary ' : 'bg-[#D9D9D9]'
                  } transition`}
                />
              </Switch>
            </div>
          </div>
          <div className='py-2 pl-3 select-none basis-1/2 sm:basis-auto md:py-3'>
            <div
              onClick={viewByUserClick}
              className={`cursor-pointer flex justify-between font-open-sans border rounded-[10px] h-[44px] lg:h-[48px] px-[15px] border-white ${
                viewByUser ? 'border-opacity-25' : 'border-opacity-10'
              } items-center`}
            >
              <span
                className={`text-white text-xs sm:text-base ${
                  viewByUser ? ' text-opacity-100' : ' text-opacity-25'
                } pr-2.5`}
              >
                Song
              </span>
              <Switch
                checked={viewByUser}
                onChange={setViewByUser}
                className={`bg-white bg-opacity-10 relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className='sr-only'>Song</span>
                <span
                  className={`${
                    viewByUser ? 'translate-x-[22px]' : 'translate-x-1'
                  } inline-block h-[19px] w-[19px] transform rounded-full ${
                    viewByUser ? 'bg-primary ' : 'bg-[#D9D9D9]'
                  } transition`}
                />
              </Switch>
            </div>
          </div>

          <div className='flex-grow max-w-xs py-2 pl-3 select-none md:py-3'>
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
          <div className='flex-grow max-w-xs py-2 pl-3 select-none md:py-3'>
            <div className='relative w-full flex font-open-sans border rounded-[10px] h-[44px] lg:h-[48px] border-white border-opacity-25 items-center'>
              <Listbox
                value={selectedTimePeriod}
                onChange={setSelectedTimePeriod}
              >
                <div className='relative w-full h-full'>
                  <Listbox.Button className='relative min-w-[80px] flex items-center w-full px-[15px] h-full'>
                    <span className='block pr-4 truncate'>
                      {selectedTimePeriod.name}
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
                      {timePeriod.map((person, personIdx) => (
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
    </>
  );
};

export default ExploreHeader;
