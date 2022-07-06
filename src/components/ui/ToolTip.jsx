import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';

export default function ToolTip({
    tooltip = 'tooltip',
    position = 'right',
    children
}) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <div className={`
                            flex  
                            ${position === 'right' ? 'flex-row' : null} 
                            ${position === 'bottom' ? 'flex-col' : null} 
                            ${position === 'top' ? 'flex-col-reverse' : null} 
                            ${position === 'left' ? 'flex-row-reverse' : null} 
                        `}>
                            <Popover.Button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                                <div className='block'>
                                    {children ? children : 'tooltip'}
                                </div>
                            </Popover.Button>
                            <Transition
                                show={show}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel className={`
                                    absolute 
                                    z-50
                                    ${position === 'right' || position === 'left' ? 'px-2' : ''} 
                                `}>
                                    {tooltip}
                                </Popover.Panel>
                            </Transition>
                        </div>
                    </>
                )}
            </Popover>
        </>
    )
}
