import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import GettingStartedInfo from './GettingStartedInfo';
import GettingStartedLocation from './GettingStartedLocation';
import GettingStartedStore from './GettingStartedStore';
import GettingStartedTiming from './GettingStartedTiming';


export default function GettingStarted() {

  const navigate = useNavigate();
  const [show_type, setShowType] = useState(1);

  const nextStep = () => {
    if (show_type < 4) {
      setShowType((prev) => prev + 1)
    } else {
      navigate('/home')
    }
  }

  const prevStep = () => {
    if (show_type > 1) {
      setShowType((prev) => prev - 1)
    }
  }

  const onContinue = () => {
    nextStep();
  }

  function RenderForm() {
    switch (show_type) {
      case 1:
        return <GettingStartedStore />
      case 2:
        return <GettingStartedLocation />
      case 3:
        return <GettingStartedTiming />
      case 4:
        return <GettingStartedInfo />
      default:
        break;
    }
  }


  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-2xl w-full">
          <h3 className="font-semibold text-xl">Welcome to Trihox</h3>
          <p>
            Give us some info so that we can setup your domain
          </p>

          <section className="space-y-2 pt-4">
            <p className="text-xs font-medium text-gray-500">Step {show_type} of 4</p>
            <section className="flex w-full space-x-2 rtl:space-x-reverse">
              <div className={`h-1 w-1/4 bg-black ${show_type < 1 && 'bg-opacity-25'}`}></div>
              <div className={`h-1 w-1/4 bg-black ${show_type < 2 && 'bg-opacity-25'}`}></div>
              <div className={`h-1 w-1/4 bg-black ${show_type < 3 && 'bg-opacity-25'}`}></div>
              <div className={`h-1 w-1/4 bg-black ${show_type < 4 && 'bg-opacity-25'}`}></div>
            </section>
          </section>
          <section className="bg-white shadow w-full rounded-sm divide-y divide-gray-200 mt-10">
            <div className="px-5 py-7">

              <RenderForm />

              <footer className="mt-8 flex flex-col space-y-6 sm:mx-auto sm:w-full">
                <Button type='dark' text='Save & Continue' className={`w-full mt-5`} onClick={onContinue} />
              </footer>
            </div>
          </section>

          <section className="mx-auto max-w-xl py-8">
            <div className="flex flex-row-reverse justify-between">
              <Button type='text' text='Skip step' onClick={nextStep} />
              {show_type > 1 && (
                <Button type='text' text='Prev step' onClick={prevStep} />
              )}
            </div>
          </section>



        </div>
      </div>
    </>
  )
}
