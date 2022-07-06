import React from 'react'
import { useNavigate } from 'react-router-dom';
import InputField from '../../../components/form/InputField'
import Button from '../../../components/ui/Button'

export default function RegisterUI() {

  const navigate = useNavigate();


  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-2xl w-full">
          <h3 className="font-semibold text-center text-xl">Welcome to Trihox</h3>
          <p className="font-base text-center text-md mb-3">
            Let’s create your business account
          </p>
          <div className="bg-white shadow w-full rounded-sm divide-y divide-gray-200">

            <div className="px-5 py-7">
              <InputField
                id='business_domain'
                type='text'
                label='Business Domain'
                placeholder='kirana'
                required={true}
                value=''
              />

              <InputField
                id='client_email'
                type='email'
                label='Your Email'
                placeholder='Ex: hello@trihox.com'
                required={true}
                value=''
              />
              <InputField
                id='client_password'
                type='password'
                label='Password'
                placeholder='********'
                required={true}
                value=''
              />
              <div className="grid grid-cols-1 gap-4 mt-12">
                <Button className='w-full' type='dark' text='Create an Account' />
              </div>
              <hr className='my-6' />
              <div>
                <p className='flex flex-row items-center	'>
                  Have an account? <Button text='Login' type='text' className='p-0 text-blue-500 px-2 text-lg' onClick={() => navigate('/auth/login')} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
