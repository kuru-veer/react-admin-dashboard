import React, { createElement } from 'react'
import ToolTip from '../../../../components/ui/ToolTip';
import { ArchiveIcon, BookmarkAltIcon, CalendarIcon, CashIcon, LocationMarkerIcon, TemplateIcon, UserGroupIcon, ViewBoardsIcon } from '@heroicons/react/outline'

export default function SideBar() {

    const logos = {
        dashboard: TemplateIcon,
        bookings: CalendarIcon,
        store: ArchiveIcon,
        customers: BookmarkAltIcon,
        team: UserGroupIcon,
        location: LocationMarkerIcon,
        finanace: CashIcon

    }

    const menu = [
        {
            id: 1,
            title: 'Dashboard',
            route: '/',
            slug: 'dashboard',
            logo: 'TemplateIcon'
        },
        {
            id: 2,
            title: 'Bookings',
            route: '/bookings',
            slug: 'bookings',
            logo: 'CalendarIcon'
        },
        {
            id: 3,
            title: 'My Store',
            route: '/store',
            slug: 'store',
            logo: 'ArchiveIcon'
        },
        {
            id: 4,
            title: 'Customers',
            route: '/customers',
            slug: 'customers',
            logo: 'BookmarkAltIcon'
        },
        {
            id: 5,
            title: 'My Team',
            route: '/team',
            slug: 'team',
            logo: 'UserGroupIcon'
        },
        {
            id: 6,
            title: 'Locations',
            route: '/locations',
            slug: 'locations',
            logo: 'LocationMarkerIcon'
        },
        {
            id: 7,
            title: 'Finance',
            route: '/finance',
            slug: 'finance',
            logo: 'CashIcon'
        }
    ];



    return (
        <>
            {/* {
                menu?.map((menu_item, i) => {
                    return <ToolTip key={i} object={createElement(logos[menu_item.slug])} tooltip={menu_item.title} />
                })
            } */}
        </>
    )
}
