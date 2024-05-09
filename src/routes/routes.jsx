
import {  Navigate, Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import DefaultLayout from '../layout/DefaultLayout'
import RegisterPartners from '../containers/RegisterPartners'
import RegisterCompanies from '../containers/RegisterCompanies'
import ViewPartners from '../containers/ViewPartners'
import ViewCompanies from '../containers/ViewCompanies'
import Login from '../containers/Login'



function Router() {
    return(
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<DefaultLayout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/RegisterPartners" element={<RegisterPartners />} />
            <Route path="/RegisterCompanies" element={<RegisterCompanies />} />
            <Route path="/ViewPartners" element={<ViewPartners />} />
            <Route path="/ViewCompanies" element={<ViewCompanies />} />
        </Route>
    </Routes>
    );
}

export default Router;