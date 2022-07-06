import React from 'react'
import SelectField from '../../../../components/form/SelectField';
import InputField from '../../../../components/form/InputField';
import CheckBox from '../../../../components/form/CheckBox';
import Button from '../../../../components/ui/Button';
import RadioGroup from '../../../../components/form/RadioGroup';


export default function GeneralUI() {


  const date_list_array = [
    {
      name: 'MMMM D, YYYY',
      id: 'MMMM D, YYYY'
    },
    {
      name: 'MMM D, YYYY',
      id: 'MMM D, YYYY'
    },
    {
      name: 'YYYY-MM-DD',
      id: 'YYYY-MM-DD'
    },
    {
      name: 'MM/DD/YYYY',
      id: 'MM/DD/YYYY'
    },
    {
      name: 'DD/MM/YYYY',
      id: 'DD/MM/YYYY'
    },
    {
      name: 'YYYY/MM/DD',
      id: 'YYYY/MM/DD'
    },
    {
      name: 'DD.MM.YYYY',
      id: 'DD.MM.YYYY'
    },
    {
      name: 'MM.DD.YYYY',
      id: 'MM.DD.YYYY'
    },
    {
      name: 'DD MMM YYYY',
      id: 'DD MMM YYYY'
    },
    {
      name: 'DD MMMM YYYY',
      id: 'DD MMMM YYYY'
    },
    {
      name: 'DD. MMMM YYYY',
      id: 'DD. MMMM YYYY'
    }

  ]

  const country_list_array = [
    {
      name: 'India',
      id: '+91'
    },
    {
      name: 'USA',
      id: '+1'
    }
  ]

  const timezone_list_array = [
    {
      name: 'India',
      id: '+5:30'
    },
    {
      name: 'USA',
      id: '-5:30'
    }
  ]

  const timeformat_list_array = [
    {
      name: '12 Hrs',
      id: 12
    },
    {
      name: '24 Hrs',
      id: 24
    }
  ]
  const currency_array = [
    {
      name: 'Dollar $',
      id: '$'
    },
    {
      name: 'Rupee ₹',
      id: '₹'
    }
  ]

  return (
    <>
      <div className='px-6 '>
        <div>
          <h3 className="text-2xl font-medium">
            General
          </h3>
        </div>
        <div className='mt-6'>
          <h4 className='text-md font-medium text-gray-400 uppercase'>
            GLOBAL SETTINGS
          </h4>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div className='w-96'>
              <SelectField items_array={date_list_array} placeholder='Select Date Format' className='' label='Date Format' value={'MMMM D, YYYY'} />
            </div>
          </div>
          <div className="basis-1/2">
            <div className='w-96'>
              <SelectField items_array={country_list_array} placeholder='Select Default CCode' className='' label='Default phone country code' value={'+91'} />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div className='w-96'>
              <SelectField items_array={timeformat_list_array} placeholder='Select Time Format' className='' label='Time Format' value={12} />
            </div>
          </div>
          <div className="basis-1/2">
            <div className='w-96'>
              <SelectField items_array={timezone_list_array} placeholder='Select Time Zone' className='' label='Time Zone' value={'+5:30'} />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div className='w-96'>
              <SelectField items_array={currency_array} placeholder='Select Currency' className='' label='Currency' value={'$'} />
            </div>
          </div>
        </div>
        <hr className='my-6' />
        <div>
          <h4 className='text-md font-medium text-gray-400 uppercase'>
            CUSTOMER SETTINGS
          </h4>
        </div>
        <div className='mt-2'>
          <div className='mt-3'>
            <RadioGroup className='text-lg' label='Both Email and Phone' id='both_mail_phone' name='mandatory_field' classNameLabel='text-lg' />
          </div>
          <div className='mt-3'>
            <RadioGroup className='text-lg' label='Only Email' id='only_mail' name='mandatory_field' classNameLabel='text-lg' />
          </div>
          <div className='mt-3'>
            <RadioGroup className='text-lg' label='Only Phone' id='only_number' name='mandatory_field' classNameLabel='text-lg' />
          </div>
        </div>
        <hr className='my-6' />
        <div>
          <h3 className="text-md font-medium uppercase text-gray-400">
            ACCOUNT SETTINGS
          </h3>
        </div>
        <div>
          <div className='mt-3'>
            <RadioGroup className='text-lg' label='Both Guest and Login' id='both' name='login_type' classNameLabel='text-lg' />
          </div>
          <div className='mt-3'>
            <RadioGroup className='text-lg' label='Only Login' id='login' name='login_type' classNameLabel='text-lg' />
          </div>
          <div className='mt-3'>
            <RadioGroup className='text-lg' label='Only Guest' id='guest' name='login_type' classNameLabel='text-lg' />
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex justify-end">

          <Button text='Save Settings' />
        </div>
      </div>
    </>
  )
}
