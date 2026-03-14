import React from "react";
import { useNavigate } from "react-router-dom";

const LowerNavBar = () => {
  const nav = useNavigate();
  return (
    <div className="bg-black w-full h-12 z-100 absolute bottom-0 flex py-2 px-4 gap-15 items-center justify-center">
      <i className="ri-home-5-line text-3xl text-white"></i>
      <i className="ri-user-3-line text-3xl text-white"></i>
      <i className="ri-shopping-cart-2-line text-3xl text-white"></i>
      <i className="ri-settings-3-line text-3xl text-white"></i>
    </div>
  );
};

export default LowerNavBar;
