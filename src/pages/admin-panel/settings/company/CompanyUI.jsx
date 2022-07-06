import React from 'react'
import InputField from '../../../../components/form/InputField'

export default function CompanyUI() {
  return (
    <>
      <div className='px-6'>
        <div>
          <h3 className="text-2xl font-medium">
            Company
          </h3>
        </div>
        <div className='mt-6'>
          <h4 className='text-lg font-medium text-gray-400 uppercase'>
            COMPANY DETAILS
          </h4>
        </div>
        <div className="flex flex-row mt-6">
          <div className="basis-1/4 flex justify-center">
            <div className="border rounded-full w-40 h-40"></div>
          </div>
          <div className="basis-3/4 px-6">
            <div className='mb-6'>
              <InputField placeholder='Business Name' label='Business Name' />
            </div>
            <div>
              <InputField placeholder='Business Description' label='Business Description' />
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-6 gap-x-6">
          <div className="basis-1/2">
            <div className='w-96'>
              <InputField placeholder='ex: support@example.com' label='Business Email' />
            </div>
          </div>
          <div className="basis-1/2">
            <div className='w-96'>
              <InputField placeholder='ex: 777 777 7777' label='Business Phone' />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div className='w-96 mt-6'>
              <InputField placeholder='Enter Business Website' label='Business Website' />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
