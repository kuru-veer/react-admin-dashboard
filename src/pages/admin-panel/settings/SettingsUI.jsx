import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


export default function SettingsUI() {

  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('general');

  const { pathname } = useLocation();
  useEffect(() => {
    const link = pathname.split("/");
    if (link[link.length - 1] !== 'settings') {
      setActiveItem(link[link.length - 1]);
    } else {
      navigate('./general')
    }
  }, [pathname])




  const RenderMenu = () => {
    const menu_list = [
      {
        name: 'General',
        slug: 'general',
        route: './general',
      },
      {
        name: 'Company',
        slug: 'company',
        route: './company',
      },
      {
        name: 'Working Hours',
        slug: 'working-hours',
        route: './working-hours',
      },
      {
        name: 'Service & Delivery',
        slug: 'service-delivery',
        route: './service-delivery',
      },
      {
        name: 'Features',
        slug: 'features',
        route: './features',
      },
      {
        name: 'Integrations',
        slug: 'integrations',
        route: './integrations',
      },
      {
        name: 'Website Customization',
        slug: 'website-customization',
        route: './website-customization',
      }
    ]
    return (
      <>
        {
          menu_list.map((item, i) => {
            return (

              <div
                key={i}
                className={`w-full px-2 py-2 mr-2 rounded-lg font-medium cursor-pointer hover:bg-gray-200 ${item.slug === activeItem && 'bg-gray-200'} `}
                onClick={() => { navigate(item.route), setActiveItem(item.slug) }}
              >
                {item.name}
              </div>

            )
          })
        }
      </>
    )
  }

  return (
    <>
      <div className="bg-gray-50 flex flex-col min-h-screen">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-7xl w-full">
          <h3 className="font-semibold text-3xl mb-2 capitalize">
            <span className='text-gray-600'> 
              Settings
            </span>
            <span className='capitalize'>

              {' > ' + activeItem.replace('-', ' ')}
            </span>
          </h3>
          <div className="bg-white shadow w-full rounded-sm divide-y divide-gray-200 min-h-[75vh]">
            <div className="p-6">
              <div className='flex flex-row'>
                <div className="flex flex-col basis-1/4 border-r-2 pr-2">
                  <RenderMenu />
                </div>
                <div className='basis-3/4'>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
