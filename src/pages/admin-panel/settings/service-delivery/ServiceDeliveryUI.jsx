import React, { useEffect, useState } from 'react'
import InputField from '../../../../components/form/InputField';
import RadioGroup from '../../../../components/form/RadioGroup';
import SelectField from '../../../../components/form/SelectField';

export default function ServiceDeliveryUI() {

  const [activeItem, setActiveItem] = useState('service');
  const active_class = 'border-b-[0.15rem] border-blue-500 pb-2 font-medium ';

  return (
    <>
      <div className="flex flex-row gap-x-6 border-b-2">
        <div className={`cursor-pointer ml-6  ${activeItem === 'service' && active_class}`} onClick={() => { setActiveItem('service') }}>
          Service
        </div>
        <div className={`cursor-pointer ${activeItem === 'delivery' && active_class}`} onClick={() => { setActiveItem('delivery') }}>
          Delivery
        </div>
      </div>
      <div className="p-6">
        <ShowOption />
      </div>
    </>
  )

  function Service() {

    const employee_logic = [
      {
        name: 'Least Busy',
        id: 'least_busy'
      },
      {
        name: 'Lowest price',
        id: 'lowest_price'
      },
      {
        name: 'Highest Price',
        id: 'highest_price'
      },
      {
        name: 'Round Robbin',
        id: 'round_robbin'
      },
    ]

    const slot_list_array = [
      {
        name: '15 mins',
        id: 15
      },
      {
        name: '20 mins',
        id: 20
      },
      {
        name: '30 mins',
        id: 30
      },
      {
        name: '45 mins',
        id: 45
      },

      {
        name: '60 mins',
        id: 60
      }
    ]
    const status_list_array = [
      {
        name: 'Pending',
        id: 'pending'
      },
      {
        name: 'Approved',
        id: 'approved'
      }
    ]
    const buffer_list_array = [
      {
        name: 'Disable',
        value: 0
      },
      {
        name: '15 mins',
        id: 15
      },
      {
        name: '20 mins',
        id: 20
      },
      {
        name: '30 mins',
        id: 30
      },
      {
        name: '45 mins',
        id: 45
      },

      {
        name: '60 mins',
        id: 60
      }
    ]
    return (
      <>
        <div className=''>
          <h4 className='text-md font-medium text-gray-400 uppercase'>
            Service Settings
          </h4>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div className='w-96'>
              <SelectField items_array={slot_list_array} placeholder='Select Duration' className='' label='Default Time Slot Step' value={60} />
            </div>
          </div>
          <div className="basis-1/2">
            <div className='w-96'>
              <SelectField items_array={status_list_array} placeholder='Select Default Status' className='' label='Default Appointment Status' value={'pending'} />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div className='w-96'>
              <SelectField items_array={buffer_list_array} placeholder='Select Before Buffer' className='' label='Minimum time required before booking' value={15} />
            </div>
          </div>
          <div className="basis-1/2">
            <div className='w-96'>
              <SelectField items_array={buffer_list_array} placeholder='Select After Buffer' className='' label='Minimum time required after booking' value={45} />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div className='w-96'>
              <InputField placeholder='Select Before Buffer' className='' label='Number of days available for booking in advance' value={'45 days'} />
            </div>
          </div>
        </div>
        <hr className='my-6' />

        <div>
          <h3 className="text-md font-medium uppercase text-gray-400">
            EMPLOYEE SELECTION SETTINGS
          </h3>
          <div>
            <div className='mt-3'>
              <RadioGroup className='text-lg' label='Customer can choose employee' id='can_choose_employee' name='employee' classNameLabel='text-lg' />
            </div>
            <div className='mt-3'>
              <RadioGroup className='text-lg' label='Hide employee selection' id='cannot_choose_employee' name='employee' classNameLabel='text-lg' />
            </div>
          </div>
          <div>
            <SelectField items_array={employee_logic} placeholder='Select After Buffer' className='' label='Employee Selection Logic' value={'least_busy'} />

          </div>
        </div>
        <hr className="my-6" />

      </>
    )
  }

  function Delivery() {
    return (
      <>
        Delivery
      </>
    )
  }

  function ShowOption() {
    switch (activeItem) {
      case 'service':
        return <Service />
      case 'delivery':
        return <Delivery />
    }
  }

}
