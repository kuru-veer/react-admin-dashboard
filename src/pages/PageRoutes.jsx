import React from 'react'
import { Route, Routes } from 'react-router-dom';
import VerticalLayoutUI from '../layouts/page-layouts/VerticalLayoutUI';
import BookingsUI from './admin-panel/bookings/BookingsUI';
import CustomersUI from './admin-panel/customers/CustomersUI';
import DashboardUI from './admin-panel/dashboard/DashboardUI';
import FinanceUI from './admin-panel/finance/FinanceUI';
import LocationsUI from './admin-panel/locations/LocationsUI';
import CompanyUI from './admin-panel/settings/company/CompanyUI';
import FeatureUI from './admin-panel/settings/feature/FeatureUI';
import GeneralUI from './admin-panel/settings/general/GeneralUI';
import IntegrationUI from './admin-panel/settings/integration/IntegrationUI';
import ServiceDeliveryUI from './admin-panel/settings/service-delivery/ServiceDeliveryUI';
import SettingsUI from './admin-panel/settings/SettingsUI';
import WebsiteCustomization from './admin-panel/settings/website-customization/WebsiteCustomization';
import WorkingHourUI from './admin-panel/settings/working-hour/WorkingHourUI';
import StoreUI from './admin-panel/store/StoreUI';
import TeamUI from './admin-panel/team/TeamUI';
import ForgotPasswordUI from './auth/forgot-password/ForgotPasswordUI';
import LoginUI from './auth/login/LoginUI';
import RegisterUI from './auth/register/RegisterUI';
import ResetPasswordUI from './auth/reset-password/ResetPasswordUI';
import GettingStarted from './getting-started/GettingStarted';

export default function PageRoutes() {
    return (
        <Routes>

            <Route path='auth' >
                <Route index element={<LoginUI />} />
                <Route path='login' element={<LoginUI />} />
                <Route path='register' element={<RegisterUI />} />
                <Route path='forgot-password' element={<ForgotPasswordUI />} />
                <Route path="reset-password" element={<ResetPasswordUI />} />
            </Route>
            <Route path='getting-started'>
                <Route index element={<GettingStarted />} />
            </Route>
            <Route path='/' element={<VerticalLayoutUI />}>
                <Route index element={<DashboardUI />} />
                <Route path='bookings' element={<BookingsUI />} />
                <Route path='store' element={<StoreUI />} />
                <Route path='customers' element={<CustomersUI />} />
                <Route path='team' element={<TeamUI />} />
                <Route path='locations' element={<LocationsUI />} />
                <Route path='finance' element={<FinanceUI />} />
                <Route path='settings' element={<SettingsUI />} >
                    <Route path='general' element={<GeneralUI />} />
                    <Route path='company' element={<CompanyUI />} />
                    <Route path='working-hours' element={<WorkingHourUI />} />
                    <Route path='service-delivery' element={<ServiceDeliveryUI />} />
                    <Route path='features' element={<FeatureUI />} />
                    <Route path='integrations' element={<IntegrationUI />} />
                    <Route path='website-customization' element={<WebsiteCustomization />} />
                </Route>
            </Route>
        </Routes>
    )
}
