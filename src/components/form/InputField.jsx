import React from 'react';

export default function InputField({
  id = '',
  type = 'text',
  label = '',
  placeholder = '',
  required = false,
  value = '',
  onChange,
  alert = false,
  alert_msg = 'Oops!! error',
  className = '',
  pattern = '{$[a-zA-Z1-9]}',
}) {

  const disabled = 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none';
  const error_focus = 'invalid:bg-red-50 invalid:border-red-500 invalid:text-red-600 invalid:border-red-500 invalid:ring-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500';
  return (
    <>
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-700">
          {required ? <span className='text-red-500'> * </span> : null}
          {label}
        </label>
        <input
          name={id}
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          // pattern={pattern}
          className={`${className} mt-2 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md text-xl shadow-sm 
          placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  ${error_focus} `}
          defaultValue={value}
        />
        {
          alert && (
            <p className='text-xs ml-1 text-red-500'>
              {alert_msg}
            </p>
          )
        }

      </div>
    </>
  )
}
