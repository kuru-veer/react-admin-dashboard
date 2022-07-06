import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterUI from './vertical-layout/footer/FooterUI'
import HeaderUI from './vertical-layout/header/HeaderUI'
import SidebarUI from './vertical-layout/sidebar/SidebarUI'

export default function VerticalLayoutUI() {
    return (
        <>
            <section className='flex flex-row w-full'>

                <div className='border-r border-gray-600 w-18'>
                    <SidebarUI />
                </div>
                <div className='w-full flex flex-col h-screen'>
                    <header>
                        <HeaderUI />
                    </header>
                    <div>
                        <Outlet />
                    </div>
                    <footer>
                        <FooterUI />
                    </footer>
                </div>
            </section>
        </>
    )
}
