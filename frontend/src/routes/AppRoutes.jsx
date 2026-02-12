import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PartnerLogin from '../pages/food-partner/PartnerLogin'
import UserRegister from '../pages/user/UserRegister'
import UserLogin from '../pages/user/UserLogin'
import PartnerRegister from '../pages/food-partner/PartnerRegister'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            {/* Partner */}
            <Route path='/user/register' element={<UserRegister/>} />
            <Route path='/user/login' element={<UserLogin/>} />
            {/* Partner */}
            <Route path='/partner/register' element={<PartnerRegister/>} />
            <Route path='/partner/login' element={<PartnerLogin/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes