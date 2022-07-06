import React from 'react'
import InputField from '../../components/form/InputField'
import MultiSelectField from '../../components/form/MultiSelectField'
import SelectField from '../../components/form/SelectField'

export default function GettingStartedStore() {


    const category_list = [
        {
            id: 1,
            name: 'Hospital'
        },
        {
            id: 2,
            name: 'Gym'
        },
        {
            id: 3,
            name: 'Consultancy'
        },
        {
            id: 4,
            name: 'Garage'
        },
        {
            id: 5,
            name: 'Store'
        },
        {
            id: 6,
            name: 'Other'
        }
    ];

    const type_list = [
        {
            id: 1,
            name: 'Appointments'
        },
        {
            id: 2,
            name: 'Ecommerce'
        },
        {
            id: 3,
            name: 'Bookings'
        },
    ]


    return (
        <>
            <form className="sm:mx-auto sm:w-full">
                <div className="space-y-8">
                    <InputField
                        id='business_name'
                        type='text'
                        label='Business Name'
                        placeholder='Ex: Business Inc'
                        required={true}
                        value=''
                    />
                    <SelectField
                        id='business_category'
                        label='Business Category'
                        items_array={category_list}
                        required={true}
                        placeholder='Select Category'
                    />
                    <MultiSelectField
                        id='business_type'
                        label='Business Type'
                        required={true} value={[]}
                        items_array={type_list}
                        placeholder='Ex: Selling, Online/Offline Services'
                    />
                </div>
            </form>
        </>
    )
}
