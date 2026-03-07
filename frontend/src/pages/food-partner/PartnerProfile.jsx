import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PartnerProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/partner/${id}`, {
          withCredentials: true,
        });
        setProfile(res.data.partner);
        setVideos(res.data.partner.foodItems)
        
      } catch (error) {
        console.error("Error fetching food partner data:", error);
      }
    };
    fetchPartner()
  }, [id]);

  return (
    <div className="min-h-screen bg-black flex justify-center items-start p-6 text-white">
      <div className=" w-full h-full">
        <div className=" w-full h-10 ">
          <i className="ri-arrow-left-line text-2xl text-white"></i>
          <i className="ri-settings-3-fill text-2xl text-white ml-68"></i>
        </div>
        <div className=" w-full h-35 pt-6 px-5 flex gap-5 bg-zinc-300/10 rounded-4xl">
          <div className="bg-white h-18 w-18 rounded-full"></div>
          <div className=" h-30 w-50 flex flex-col">
            <h1 className="text-xl font-[font7] uppercase">
              {profile?.storeName}
            </h1>
            <div className="h-25 py-2 w-full flex gap-6 items-center justify-center">
              <div className="h-full w-18 flex flex-col">
                <h1 className="text-4xl font-[font9] text-center">19</h1>
                <h2 className="text-sm font-[font9] text-center">
                  Total Meals
                </h2>
              </div>
              <div className="h-full w-25 flex flex-col">
                <h1 className="text-4xl font-[font9] text-center">95</h1>
                <h2 className="text-sm font-[font9] text-center">
                  Customers Served
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="h-25 w-full p-2 border-b-2 border-zinc-500 mb-5">
          <p className=" text-xl text-yellow-400 font-[font7] mt-2">
            <i className="ri-user-voice-line text-xl text-white"></i> {profile?.firstName}{" "}
            {profile?.lastName}
          </p>
          <div className="flex gap-2  ">
            <p className=" text-[17.5px] font-[font7]">
              <i className="ri-phone-fill text-green-500"></i> {profile?.phoneNo}
            </p>
            <p className=" text-[17.5px] font-[font7]">
              <i className="ri-mail-fill text-red-300"></i> 
              {profile?.email}
            </p>
          </div>
          <p className=" text-[17.5px] font-[font7]">
              <i className="ri-map-pin-fill text-blue-400"></i> {profile?.address}
            </p>
          
        </div>
        <div className=" h-full w-full p-2">
          <div className="grid grid-cols-2 gap-4">
            {videos.map((v) => (
              <div
                key={v._id}
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
