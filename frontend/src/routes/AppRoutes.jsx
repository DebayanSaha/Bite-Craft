import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PartnerLogin from '../pages/food-partner/PartnerLogin'
import UserRegister from '../pages/user/UserRegister'
import UserLogin from '../pages/user/UserLogin'
import PartnerRegister from '../pages/food-partner/PartnerRegister'
import LandingPage from '../pages/common/LandingPage'
import PartnerPage from '../pages/common/PartnerPage'
import UserFeed from '../pages/user/UserFeed'
import PartnerFeed from '../pages/food-partner/PartnerFeed'
import UserProfile from '../pages/user/UserProfile'
import PartnerProfile from '../pages/food-partner/PartnerProfile'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>

            {/* User */}
            <Route path='/user/register' element={<UserRegister/>} />
            <Route path='/user/login' element={<UserLogin/>} />
            <Route path='/user/feed' element={<UserFeed/>}/>
            <Route path='/user/profile' element={<UserProfile/>}/>
            
            {/* Partner */}
            <Route path='/partnerwithus' element={<PartnerPage/>}/>
            <Route path='/partner/register' element={<PartnerRegister/>} />
            <Route path='/partner/login' element={<PartnerLogin/>} />
            <Route path='/partner/feed' element={<PartnerFeed/>} />
            <Route path='/partner/profile' element={<PartnerProfile/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes