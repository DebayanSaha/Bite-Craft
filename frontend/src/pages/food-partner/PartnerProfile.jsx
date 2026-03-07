import React from "react";

const PartnerProfile = () => {
  const videos = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];
  return (
    <div className="min-h-screen bg-black flex justify-center items-start p-6 text-white">
      <div className=" w-full h-full">
        <div className=" w-full h-10 ">
          <i className="ri-arrow-left-line text-2xl text-white"></i>
          <i className="ri-settings-3-fill text-2xl text-white ml-68"></i>
        </div>
        <div className=" w-full h-40 pt-6 px-5 flex gap-5 bg-zinc-300/10 rounded-4xl">
          <div className="bg-white h-18 w-18 rounded-full"></div>
          <div className=" h-30 w-50 flex flex-col">
            <h1 className="text-xl font-[font7] uppercase">Lorem, ipsum.</h1>
            <div className="h-25 py-2 w-full flex gap-6 items-center justify-center">
              <div className="h-full w-18 flex flex-col">
                <h1 className="text-4xl font-[font9] text-center">19</h1>
                <h2 className="text-sm font-[font9] text-center">Total Meals</h2>
              </div>
              <div className="h-full w-25 flex flex-col">
                <h1 className="text-4xl font-[font9] text-center">95</h1>
                <h2 className="text-sm font-[font9] text-center">Customer Served</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="h-15 w-full p-2 border-b-2 border-zinc-500 mb-5">
          <p className=" text-sm font-[font7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quae!</p>
        </div>
        <div className=" h-full w-full p-2">
          <div className="grid grid-cols-2 gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="aspect-square bg-[#1a2b46] rounded-xl flex items-center justify-center text-gray-400"
            >
              video
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;
