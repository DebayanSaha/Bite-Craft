import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const nav = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: ""
  });

  const handleChange =(e)=> {
    setformData({
      ...formData,
      [e.target.name]: e.target.value, 
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Login Data:", formData);
  }

  return (
    <div className="relative min-h-screen bg-[#f3f3f3] flex justify-center p-4">
      <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 border-2 border-black h-110 w-80 rounded-3xl py-2 px-4'>
        <div className='absolute right-2 bg-red-300 h-8 w-8 rounded-full flex items-center justify-center text-2xl'>
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <h1 className="text-4xl font-[font8] text-black mt-8">
          Login
        </h1>

        <p className="text-gray-600 mb-6">
          or{" "}
          <span onClick={()=>nav('/partner/register')} className="text-orange-500 text-2xl font-[font7] cursor-pointer">
            create an account
          </span>
        </p>
      </div>
      
    </div>
  )
}

export default UserLogin