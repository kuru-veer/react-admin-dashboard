import React, { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react';

import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export default function MultiSelectField({
  id = '',
  label = '',
  placeholder = '',
  required = false,
  value = [],
  onChange = (e) => { e },
  alert = false,
  alert_msg = 'Oops!! error',
  className = '',
  items_array = [],
}) {
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedItemIds, setSelectedItemIds] = useState(value);
  const disabled = 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none';
  const error_focus = 'invalid:bg-red-50 invalid:border-red-500 invalid:text-red-600 invalid:border-red-500 invalid:ring-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500';

  useEffect(() => {
    const item = items_array.filter(element => selectedItemIds.find(ele => ele === element.id));
    setSelectedItem(item);
  }, [selectedItemIds])

  const onselectionchange = (e) => {
    onChange(e);
    setSelectedItemIds(e);
  }


  return (
    <>
      <div className="mt-6">

        <Listbox
          value={selectedItemIds}
          onChange={onselectionchange}
          name={id}
          multiple>
          <Listbox.Label>
            <label htmlFor={id} className="block text-sm font-medium text-slate-700">
              {required ? <span className='text-red-500'> * </span> : null}
              {label}
            </label>
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className={`${className} z-10 text-left mt-2 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md text-xl shadow-sm 
                placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  ${error_focus} `}>
              <span className={`block truncate ${selectedItem.length === 0 && 'text-gray-400'} `}>
                {selectedItem.length > 0 ? selectedItem.map((item) => item.name).join(', ') : placeholder}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-50	 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {items_array?.map((item, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                      }`
                    }
                    value={item.id}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  )
}