import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PartnerLogin from '../pages/food-partner/PartnerLogin'
import UserRegister from '../pages/user/UserRegister'
import UserLogin from '../pages/user/UserLogin'
import PartnerRegister from '../pages/food-partner/PartnerRegister'
import LandingPage from '../pages/hero/LandingPage'
import PartnerPage from '../pages/hero/PartnerPage'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            {/* Partner */}
            
            <Route path='/user/register' element={<UserRegister/>} />
            <Route path='/user/login' element={<UserLogin/>} />
            {/* Partner */}
            <Route path='/partnerwithus' element={<PartnerPage/>}/>
            <Route path='/partner/register' element={<PartnerRegister/>} />
            <Route path='/partner/login' element={<PartnerLogin/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes