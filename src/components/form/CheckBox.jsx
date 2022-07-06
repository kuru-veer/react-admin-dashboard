import React from 'react'

export default function CheckBox({
    id = '',
    label = '',
    value = '',
    onChange,
    alert = false,
    alert_msg = 'Oops!! error',
    className = '',
    classNameLabel = '',
}) {
    return (
        <>
            <div className="flex items-center mb-4">
                <input
                    id={id}
                    type="checkbox"
                    value={value}
                    className={`w-5 h-5 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 focus:ring-1 ${className}`} onChange={onChange} />

                <label htmlFor={id} className={`ml-2 text-sm font-medium text-gray-900 mb-0.5 ${classNameLabel} `}>
                    {label}
                </label>
            </div>
            {
                alert && (
                    <p className='text-xs ml-1 text-red-500'>
                        {alert_msg}
                    </p>
                )
            }
        </>
    )
}
