import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const fetchUser = async()=>{
            try {
                const res = await axios.get("")
            } catch (error) {
                
            }
        }
    })
  return (
    <div>
         <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-8">

          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold">
              {user.firstName[0]}
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-zinc-500">User Profile</p>
            </div>
          </div>

          {/* User Details */}
          <div className="space-y-4">

            <div className="flex justify-between border-b pb-2">
              <span className="text-zinc-500">First Name</span>
              <span className="font-medium">{user.firstName}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-zinc-500">Last Name</span>
              <span className="font-medium">{user.lastName}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-zinc-500">Email</span>
              <span className="font-medium">{user.email}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-zinc-500">Phone Number</span>
              <span className="font-medium">{user.phoneNum}</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default UserProfile