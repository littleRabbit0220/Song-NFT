import ArrowDown from '@/icons/ArrowDown';
import { Disclosure } from '@headlessui/react';
import { MdExpandLess } from 'react-icons/md';
import PriceRangeSlider from './PriceRangeSlider';
const ExploreSidebar = () => {
  return (
    <div className='bg-MoshDark-7 font-open-sans p-5 rounded-[10px]'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full pb-3.5 text-sm font-medium text-left border-b border-MoshDark-6'>
              <span>Genre</span>
              <span
                className={`${open ? 'rotate-180 transform' : ''}  text-white`}
              >
                <MdExpandLess size={20} />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className='pt-4 text-sm !leading-[160%] '>
              <label
                htmlFor='genre1'
                className='flex items-center justify-between mb-[5px] min-h-[26px]'
              >
                <span>
                  <span>Genre 1</span>
                  <span className='pl-1.5 opacity-50'>20</span>
                </span>
                <input
                  className='custom-checkbox'
                  type='checkbox'
                  name='genre1'
                  id='genre1'
                />
              </label>

              <label
                htmlFor='genre2'
                className='flex items-center justify-between mb-[5px] min-h-[26px]'
              >
                <span>
                  <span>Genre 2</span>
                  <span className='pl-1.5 opacity-50'>5</span>
                </span>
                <input
                  className='custom-checkbox'
                  type='checkbox'
                  name='genre2'
                  id='genre2'
                />
              </label>

              <label
                htmlFor='genre3'
                className='flex items-center justify-between mb-[5px] min-h-[26px]'
              >
                <span>
                  <span>Genre 3</span>
                  <span className='pl-1.5 opacity-50'>14</span>
                </span>
                <input
                  className='custom-checkbox'
                  type='checkbox'
                  name='genre3'
                  id='genre3'
                />
              </label>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className='pt-3'>
            <Disclosure.Button className='flex justify-between w-full pb-3.5 text-sm font-medium text-left border-b border-MoshDark-6'>
              <span>Season</span>
              <span
                className={`${open ? 'rotate-180 transform' : ''}  text-white`}
              >
                <MdExpandLess size={20} />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className='pt-4 text-sm !leading-[160%] '>
              <label
                htmlFor='season1'
                className='flex items-center justify-between mb-[5px] min-h-[26px]'
              >
                <span className='flex items-center'>
                  <span className='capitalize'>seaseon 1</span>
                  <span className='pl-1.5 opacity-50'>20</span>
                </span>
                <input
                  className='custom-checkbox'
                  type='checkbox'
                  name='season1'
                  id='season1'
                />
              </label>

              <label
                htmlFor='season2'
                className='flex items-center justify-between mb-[5px] min-h-[26px]'
              >
                <span className='flex items-center'>
                  <span className='capitalize'>season 2</span>
                  <span className='pl-1.5 opacity-50'>5</span>
                </span>
                <input
                  className='custom-checkbox'
                  type='checkbox'
                  name='season2'
                  id='season2'
                />
              </label>

              <label
                htmlFor='season3'
                className='flex items-center justify-between mb-[5px] min-h-[26px]'
              >
                <span className='flex items-center'>
                  <span className='capitalize'>season 3</span>
                  <span className='pl-1.5 opacity-50'>14</span>
                </span>
                <input
                  className='custom-checkbox'
                  type='checkbox'
                  name='season3'
                  id='season3'
                />
              </label>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className='pt-3'>
            <Disclosure.Button className='flex justify-between w-full pb-3.5 text-sm font-medium text-left border-b border-MoshDark-6'>
              <span>Price</span>
              <span
                className={`${open ? 'rotate-180 transform' : ''}  text-white`}
              >
                <MdExpandLess size={20} />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className='pt-4 text-sm !leading-[160%] '>
              <PriceRangeSlider />
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className='pt-3'>
            <Disclosure.Button className='flex justify-between w-full pb-3.5 text-sm font-medium text-left border-b border-MoshDark-6'>
              <span>Royalties</span>
              <span
                className={`${open ? 'rotate-180 transform' : ''}  text-white`}
              >
                <MdExpandLess size={20} />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className='pt-4 text-sm !leading-[160%] '>
              <label
                htmlFor='royalty1'
                className='flex items-center justify-between mb-[5px] min-h-[26px]'
              >
                <span className='flex items-center'>
                  <span className='capitalize'>royalty 1</span>
                  <span className='pl-1.5 opacity-50'>20</span>
                </span>
                <input
                  className='custom-checkbox'
                  type='checkbox'
                  name='royalty1'
                  id='royalty1'
                />
              </label>

              <label
                htmlFor='royalty2'
                className='flex items-center justify-between mb-[5px] min-h-[26px]'
              >
                <span className='flex items-center'>
                  <span className='capitalize'>royalty 2</span>
                  <span className='pl-1.5 opacity-50'>5</span>
                </span>
                <input
                  className='custom-checkbox'
                  type='checkbox'
                  name='royalty2'
                  id='royalty2'
                />
              </label>

              <label
                htmlFor='royalty3'
                className='flex items-center justify-between mb-[5px] min-h-[26px]'
              >
                <span className='flex items-center'>
                  <span className='capitalize'>royalty 3</span>
                  <span className='pl-1.5 opacity-50'>14</span>
                </span>
                <input
                  className='custom-checkbox'
                  type='checkbox'
                  name='royalty3'
                  id='royalty3'
                />
              </label>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default ExploreSidebar;
