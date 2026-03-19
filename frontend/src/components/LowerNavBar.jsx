import React from "react";
import { useNavigate } from "react-router-dom";

const LowerNavBar = () => {
  const nav = useNavigate();

  return (
    <div className="fixed bottom-4 w-full flex justify-center z-50">
      
      {/* Navbar container */}
      <div className="relative bg-[#1a120b] w-[90%] h-14 flex items-center justify-between px-8 rounded-full shadow-lg border border-orange-500">
        
        {/* Left Icons */}
        <div className="flex gap-8">
          <i
            onClick={() => nav("/")}
            className="ri-home-5-line text-2xl text-white cursor-pointer"
          ></i>
          <i
            onClick={() => nav("/user/profile")}
            className="ri-user-3-line text-2xl text-white cursor-pointer"
          ></i>
        </div>

        {/* Right Icons */}
        <div className="flex gap-8">
          <i
            onClick={() => nav("/cart")}
            className="ri-shopping-cart-2-line text-2xl text-white cursor-pointer"
          ></i>
          <i
            onClick={() => nav("/settings")}
            className="ri-settings-3-line text-2xl text-white cursor-pointer"
          ></i>
        </div>

        {/* Center Floating Button */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 bg-[#3b2a0a] border-2 border-orange-500 rounded-full flex items-center justify-center shadow-xl">
            <i className="ri-restaurant-line text-3xl text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerNavBar;