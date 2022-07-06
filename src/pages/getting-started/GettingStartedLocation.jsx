import React from 'react'
import InputField from '../../components/form/InputField'

export default function GettingStartedLocation() {
    return (
        <>
            <form className="sm:mx-auto sm:w-full">
                <div className="space-y-8">
                    {/* <InputField
                        id='business_country'
                        type='text'
                        label='Country'
                        placeholder='Ex: India'
                        is_required={true}
                        value=''
                    /> */}
                    <InputField
                        id='business_location'
                        type='text'
                        label='Business Locatiom'
                        placeholder='Ex: Hyderabad'
                        required={true}
                        value=''
                    />
                    <div className="h-40 w-full bg-gray-300"></div>
                </div>
            </form>
        </>
    )
}
