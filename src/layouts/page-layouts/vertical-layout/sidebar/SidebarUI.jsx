import React from 'react';
import { ArchiveIcon, BookmarkAltIcon, CalendarIcon, CashIcon, CogIcon, LocationMarkerIcon, QuestionMarkCircleIcon, TemplateIcon, UserGroupIcon, ViewBoardsIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom';

export default function SidebarUI() {

  const navigate = useNavigate();

  return (
    <>
      <div className='flex flex-col px-2 py-2 min-h-screen max-h-screen'>
        <div className='flex justify-center pb-0.5'>
          <img src="/assets/images/branding/logo-dark.png" alt="logo" className='w-12 text-center' />
        </div>
        <div className="flex flex-col justify-between h-[90vh]">
          <div className='mt-6 flex flex-col justify-center gap-y-6'>

            <div className='mx-auto cursor-pointer' onClick={() => { navigate('/') }} >
              <TemplateIcon className='w-8 text-center' />
            </div>

            <div className='mx-auto cursor-pointer' onClick={() => { navigate('/bookings') }}>
              <CalendarIcon className='w-8 text-center' />
            </div>

            <div className='mx-auto cursor-pointer' onClick={() => { navigate('/store') }}>
              <ArchiveIcon className='w-8 text-center' />
            </div>

            <div className='mx-auto cursor-pointer' onClick={() => { navigate('/customers') }}>
              <BookmarkAltIcon className='w-8 text-center' />
            </div>

            <div className='mx-auto cursor-pointer' onClick={() => { navigate('/team') }}>
              <UserGroupIcon className='w-8 text-center' />
            </div>

            <div className='mx-auto cursor-pointer' onClick={() => { navigate('/locations') }}>
              <LocationMarkerIcon className='w-8 text-center' />
            </div>

            <div className='mx-auto cursor-pointer' onClick={() => { navigate('/finance') }}>
              <CashIcon className='w-8 text-center' />
            </div>



          </div>

          <div className='mt-6 flex flex-col justify-center gap-y-6'>
            <div className="mx-auto cursor-pointer">
              <QuestionMarkCircleIcon className='w-8 text-center' />
            </div>
            <div className="mx-auto cursor-pointer">
              <CogIcon className='w-8 text-center' onClick={() => { navigate('/settings') }} />
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
