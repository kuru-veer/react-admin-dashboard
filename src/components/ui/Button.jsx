import React from 'react'

export default function Button({
    type = 'primary',
    text = 'Submit',
    onClick,
    className,
    on_focus = true,
    on_padding = true,
}) {

    let style = '';
    switch (type) {
        case 'primary':
            style = 'bg-blue-600 hover:bg-blue-800 focus:ring-blue-300 text-white';
            break;
        case 'secondary':
            style = 'bg-gray-100 hover:bg-gray-200 focus: ring-gray-300 text-gray-700';
            break;
        case 'dark':
            style = 'bg-gray-800 hover:bg-gray-700 focus: ring-gray-900 text-white';
            break;
        case 'success':
            style = 'bg-green-600 hover:bg-green-700 focus: ring-green-300 text-white';
            break;
        case 'danger':
            style = 'bg-red-600 hover:bg-red-700 focus: ring-red-300 text-white';
            break;
        case 'warning':
            style = 'bg-yellow-400 hover:bg-yellow-300 focus: ring-yellow-300 text-gray-700';
            break;
        case 'text':
            style = '';
            break;
        default:
            style = 'bg-blue-600 hover:bg-blue-800 focus:ring-blue-300 text-white';
            break;
    }

    const focus = 'focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500';
    const padding = 'px-4 py-2';

    if (type === 'text') {
        on_focus = false;
        on_padding = false
    }

    return (
        <>
            <div>
                <button className={`block text-md font-semibold rounded-md ${on_padding && padding} ${on_focus && focus} ${style} ${className}`} onClick={onClick} >{text}</button>
            </div>
        </>
    )
}
