import React from 'react';
import InputField from '../../components/form/InputField';

export default function GettingStartedInfo() {

    return (
        <>

            <form className="sm:mx-auto sm:w-full">
                <div className="space-y-8">
                    <InputField
                        id='full_name'
                        type='text'
                        label='Full Name'
                        placeholder='Ex: John'
                        required={true}
                        value=''
                    />
                    <InputField
                        id='contact'
                        type='number'
                        label='Contact'
                        placeholder='+91 999 888 7777'
                        required={true}
                        value=''
                    />
                </div>
            </form>
        </>
    )
}
