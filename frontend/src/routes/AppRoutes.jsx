import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PartnerLogin from '../pages/food-partner/PartnerLogin'
import UserRegister from '../pages/user/UserRegister'
import UserLogin from '../pages/user/UserLogin'
import PartnerRegister from '../pages/food-partner/PartnerRegister'
import LandingPage from '../pages/common/LandingPage'
import PartnerPage from '../pages/common/PartnerPage'
import UserFeed from '../pages/user/UserFeed'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>

            {/* User */}
            <Route path='/user/register' element={<UserRegister/>} />
            <Route path='/user/login' element={<UserLogin/>} />
            <Route path='/user/feed' element={<UserFeed/>}/>
            
            {/* Partner */}
            <Route path='/partnerwithus' element={<PartnerPage/>}/>
            <Route path='/partner/register' element={<PartnerRegister/>} />
            <Route path='/partner/login' element={<PartnerLogin/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes