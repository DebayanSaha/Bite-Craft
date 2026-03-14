import React from "react";
import { useNavigate } from "react-router-dom";

const SidePanel = () => {
  const nav = useNavigate();
  return (
    <div className="absolute right-0 z-100 h-150 w-15 flex flex-col gap-5 items-center justify-center bottom-0">
        <div>
          <i className="ri-heart-2-fill bg-linear-to-r from-[#b43a87] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent text-4xl cursor-pointer"></i>
          <h1 className="font-[Font10] text-xl text-center text-white">34</h1>
        </div>
        <div>
          <i className="ri-chat-1-fill bg-linear-to-r from-[#b43a87] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent text-4xl cursor-pointer"></i>
          <h1 className="font-[Font10] text-xl text-center text-white">34</h1>
        </div>
        <div>
          <i className="ri-bookmark-fill bg-linear-to-b from-[#fc9f65] via-[#fd1d1d] to-[#b84000] bg-clip-text text-transparent text-4xl cursor-pointer"></i>
          <h1 className="font-[Font10] text-xl text-center text-white">34</h1>
        </div>
    </div>
  );
};

export default SidePanel;
