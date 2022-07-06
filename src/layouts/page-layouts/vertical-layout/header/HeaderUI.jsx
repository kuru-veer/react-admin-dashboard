import { BellIcon, CalendarIcon, GlobeAltIcon } from '@heroicons/react/outline'
import React from 'react';
import Button from '../../../../components/ui/Button';


export default function HeaderUI() {
  return (
    <>
      <nav className='bg-gray-700 text-white h-14 top-0 pl-6 pr-8' >
        <div className='flex flex-row justify-between items-center my-auto h-full'>
          <div className='flex flex-row gap-x-6 items-center' >
            <div>
              <Button text='Add New' className='py-1 px-6' />
            </div>
            <div>

              <Button text={
                <div className='flex flex-row gap-2'>
                  <GlobeAltIcon className='w-4' />
                  View Site
                </div>
              } type='secondary' className='py-1 px-6' />
            </div>
          </div>
          <div className='flex flex-row gap-x-6 items-center' >
            <div>
              <CalendarIcon className='w-6' />
            </div>
            <div>
              <BellIcon className='w-6' />
            </div>
            <div className='flex felx-row gap-x-2 items-center'>
              <div className='w-8 h-8 bg-gray-800 rounded-full'>
              </div>
              Rudhra
            </div>

          </div>

        </div>


      </nav>


    </>
  )
}
