import SearchIcon from '@/icons/SearchIcon';
import { useState, Fragment } from 'react';
import { Switch, RadioGroup, Listbox, Transition } from '@headlessui/react';
import ArrowDown from '@/icons/ArrowDown';
const orderList = [
  { id: 1, name: 'High to Low', unavailable: false },
  { id: 2, name: 'Low to Hight', unavailable: false },
  { id: 3, name: 'Newest Added', unavailable: false },
  { id: 4, name: 'Oldest Added', unavailable: true },
];
const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];
const LeadBoardHead = () => {
  const [viewByLabel, setViewByLabel] = useState(false);
  const [viewByUser, setViewByUser] = useState(true);
  const [viewPeriod, setViewPeriod] = useState('1DAY');
  const [selectedOrder, setSelectedOrder] = useState(orderList[0]);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  const viewByLabelClick = () => {
    setViewByLabel(!viewByLabel);
  };
  const viewByUserClick = () => {
    setViewByUser(!viewByUser);
  };
  return (
    <div className='flex flex-wrap -ml-3 '>
      <div className='pl-3 py-2 md:py-3 select-none basis-full md:basis-[30%] lg:basis-auto xl:basis-[30%]'>
        <div className='flex font-open-sans border rounded-[10px] h-[50px] lg:h-[54px] px-[15px] border-white border-opacity-25 items-center '>
          <button type='submit'>
            <SearchIcon />
          </button>
          <input
            type='search'
            placeholder='Search by username'
            name='searchByUsername'
            id='searchByUsername'
            className='w-full pl-2 bg-transparent placeholder:text-white placeholder:text-opacity-20 focus:outline-none'
          />
        </div>
      </div>

      <div className='py-2 pl-3 select-none basis-1/2 sm:basis-auto md:py-3'>
        <div
          onClick={viewByLabelClick}
          className={`cursor-pointer flex justify-between font-open-sans border rounded-[10px] h-[50px] lg:h-[54px] px-[15px] border-white ${
            viewByLabel ? 'border-opacity-25' : 'border-opacity-10'
          } items-center`}
        >
          <span
            className={`text-white text-xs sm:text-base ${
              viewByLabel ? ' text-opacity-100' : ' text-opacity-25'
            } pr-2.5`}
          >
            View by Label
          </span>
          <Switch
            checked={viewByLabel}
            onChange={setViewByLabel}
            className={`bg-white bg-opacity-10 relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className='sr-only'>View by Label</span>
            <span
              className={`${
                viewByLabel ? 'translate-x-[22px]' : 'translate-x-1'
              } inline-block h-[19px] w-[19px] transform rounded-full ${
                viewByLabel ? 'bg-primary ' : 'bg-[#D9D9D9]'
              } transition`}
            />
          </Switch>
        </div>
      </div>
      <div className='py-2 pl-3 select-none basis-1/2 sm:basis-auto md:py-3'>
        <div
          onClick={viewByUserClick}
          className={`cursor-pointer flex justify-between font-open-sans border rounded-[10px] h-[50px] lg:h-[54px] px-[15px] border-white ${
            viewByUser ? 'border-opacity-25' : 'border-opacity-10'
          } items-center`}
        >
          <span
            className={`text-white text-xs sm:text-base ${
              viewByUser ? ' text-opacity-100' : ' text-opacity-25'
            } pr-2.5`}
          >
            View by User
          </span>
          <Switch
            checked={viewByUser}
            onChange={setViewByUser}
            className={`bg-white bg-opacity-10 relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className='sr-only'>View by Label</span>
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
      <div className='py-2 pl-3 select-none md:py-3'>
        <div className='flex font-open-sans border rounded-[10px] h-[50px] lg:h-[54px] px-[15px] border-white border-opacity-25 items-center'>
          <RadioGroup
            value={viewPeriod}
            onChange={setViewPeriod}
            className='flex'
          >
            <RadioGroup.Option value='1DAY'>
              {({ checked }) => (
                <span
                  className={` h-7 cursor-pointer rounded font-semibold flex items-center bg-white px-2.5 sm:px-3 text-xs sm:text-sm uppercase  ${
                    checked
                      ? 'bg-opacity-100 text-MoshDark-7'
                      : 'bg-opacity-10 text-white'
                  }`}
                >
                  1 Day
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value='7DAYS'>
              {({ checked }) => (
                <span
                  className={`ml-1.5  h-7 cursor-pointer rounded font-semibold flex items-center bg-white px-2.5 sm:px-3 text-xs sm:text-sm uppercase  ${
                    checked
                      ? 'bg-opacity-100 text-MoshDark-7'
                      : 'bg-opacity-10 text-white'
                  }`}
                >
                  7 Days
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value='30DAYS'>
              {({ checked }) => (
                <span
                  className={`ml-1.5  h-7 cursor-pointer rounded font-semibold flex items-center bg-white px-2.5 sm:px-3 text-xs sm:text-sm uppercase  ${
                    checked
                      ? 'bg-opacity-100 text-MoshDark-7'
                      : 'bg-opacity-10 text-white'
                  }`}
                >
                  30 Days
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value='ALL'>
              {({ checked }) => (
                <span
                  className={`ml-1.5  h-7 cursor-pointer rounded font-semibold flex items-center bg-white px-2.5 sm:px-3 text-xs sm:text-sm uppercase  ${
                    checked
                      ? 'bg-opacity-100 text-MoshDark-7'
                      : 'bg-opacity-10 text-white'
                  }`}
                >
                  All
                </span>
              )}
            </RadioGroup.Option>
          </RadioGroup>
        </div>
      </div>
      <div className='flex-grow max-w-xs py-2 pl-3 select-none md:py-3'>
        <div className='relative w-full flex font-open-sans border rounded-[10px] h-[50px] lg:h-[54px] border-white border-opacity-25 items-center'>
          <Listbox value={selectedOrder} onChange={setSelectedOrder}>
            <div className='relative min-w-[200px] w-full h-full'>
              <Listbox.Button className='relative flex items-center w-full px-[15px] h-full'>
                <span className='block truncate'>{selectedOrder.name}</span>
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
                <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base text-white border rounded-md shadow-lg border-white/25 bg-MoshDark-7 max-h-60'>
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
  );
};

export default LeadBoardHead;
