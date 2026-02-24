import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const UserRegister = () => {
  const nav = useNavigate();
  const [formData, setformData] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange =(e)=> {
    setformData({
      ...formData,
      [e.target.name]: e.target.value, 
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    try {
      const res = await axios.post('http://localhost:3000/api/auth/user/register', formData)
      console.log(res.data)
      setformData({
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: ""
      })
      nav("/user/login");
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
    
  }

  return (
    <div className="relative min-h-screen bg-[url('/images/background/image.png')] md:bg-[url('/images/background/bgLap.png')] bg-cover bg-center flex justify-center p-4">
      <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-2xl shadow-amber-900 backdrop-blur-[15px] md:h-150 h-145 w-80 md:w-110 rounded-3xl py-2 px-4'>
        <div onClick={()=>nav('/')} className='cursor-pointer absolute right-2 bg-orange-200 h-8 w-8 rounded-full flex items-center justify-center text-2xl'>
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <h1 className="text-4xl md:text-6xl md:text-center font-[font8] text-black mt-8">
          Signup
        </h1>
        <p className="text-gray-600 mb-6 md:text-center">
          or{" "}
          <span onClick={()=>nav('/user/login')} className="text-orange-500 text-2xl md:text-3xl font-[font7] cursor-pointer">
            login to your account
          </span>
        </p>
        <div className='w-full h-70'>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className='flex gap-4'>
            <input className="w-full rounded-2xl border-2 border-orange-200 focus:border-orange-400 px-4 py-4 text-black font-[font6] text-xl tracking-[1px]"
              type="text"
              name="firstName"
              placeholder="Firstname"
              value={formData.firstName}
              onChange={handleChange}
              required
              
            />
            <input className="w-full rounded-2xl border-2 border-orange-200 focus:border-orange-400 px-4 py-4 text-black font-[font6] text-xl tracking-[1px]"
              type="text"
              name="lastName"
              placeholder="Lastname"
              value={formData.lastName}
              onChange={handleChange}
              required
              
            />
          </div>
          <div>
            <input className="w-full rounded-2xl border-2 border-orange-200 focus:border-orange-400 px-4 py-4 text-black font-[font6] text-xl tracking-[1px]"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              
            />
          </div>

          {/* Password */}
          <div>
            <input className="w-full rounded-2xl border-2 border-orange-200 focus:border-orange-400 px-4 py-4 text-black font-[font6] text-xl tracking-[1px]"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              
            />
          </div>
          <div>
            <input className="w-full rounded-2xl border-2 border-orange-200 focus:border-orange-400 px-4 py-4 text-black font-[font6] text-xl tracking-[1px]"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="cursor-pointer rounded-2xl font-[font8] text-2xl tracking-[1px] w-full bg-orange-500 hover:bg-orange-600 text-white py-4 transition"
          >
            Signup
          </button>
          </form>
        </div>
      </div>
      
    </div>
  )
}
export default UserRegister