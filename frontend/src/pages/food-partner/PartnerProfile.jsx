import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PartnerProfile = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const res = await axios.get(
          `https://bite-craft.onrender.com/api/partner/${id}`,
          { withCredentials: true }
        );

        setProfile(res.data.partner);
        setVideos(res.data.partner.foodItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPartner();
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-6">
      <div className="w-full max-w-6xl">

        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <i
            onClick={() => nav(-1)}
            className="ri-arrow-left-line text-2xl md:text-3xl cursor-pointer"
          ></i>

          <i className="ri-settings-3-fill text-2xl md:text-3xl cursor-pointer"></i>
        </div>

        {/* PROFILE CARD */}
        <div className="border border-zinc-600 rounded-3xl p-5 mb-6">

          {/* MOBILE layout */}
          <div className="flex flex-col items-center gap-5 md:hidden">

            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-black font-bold">
                DP
              </div>

              <div className="border border-zinc-500 px-4 py-1 rounded-lg font-semibold">
                {profile?.storeName}
              </div>
            </div>

            <div className="flex gap-6">
              <div className="border border-zinc-500 rounded-xl px-6 py-3 text-center">
                <h2 className="text-2xl font-bold">19</h2>
              </div>

              <div className="border border-zinc-500 rounded-xl px-6 py-3 text-center">
                <h2 className="text-2xl font-bold">23</h2>
              </div>
            </div>

          </div>

          {/* DESKTOP layout */}
          <div className="hidden md:flex items-center justify-between">

            <div className="flex items-center gap-6">
              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center text-black font-bold">
                DP
              </div>

              <div className="border border-zinc-500 px-4 py-1 rounded-lg font-semibold">
                {profile?.storeName}
              </div>
            </div>

            <div className="flex gap-6">
              <div className="border border-zinc-500 rounded-xl px-6 py-3 text-center">
                <h2 className="text-3xl font-bold">19</h2>
              </div>

              <div className="border border-zinc-500 rounded-xl px-6 py-3 text-center">
                <h2 className="text-3xl font-bold">23</h2>
              </div>
            </div>

          </div>
        </div>

        {/* INFO SECTION */}

        <div className="border border-zinc-600 rounded-2xl p-5 mb-6">

          {/* mobile */}
          <div className="grid grid-cols-2 gap-4 md:hidden text-center">

            <div>
              <p className="text-zinc-400 text-sm">Name</p>
              <p>{profile?.firstName} {profile?.lastName}</p>
            </div>

            <div>
              <p className="text-zinc-400 text-sm">Email</p>
              <p className="break-all">{profile?.email}</p>
            </div>

            <div>
              <p className="text-zinc-400 text-sm">Place</p>
              <p>{profile?.address}</p>
            </div>

            <div>
              <p className="text-zinc-400 text-sm">Phone</p>
              <p>{profile?.phoneNo}</p>
            </div>

          </div>

          {/* desktop */}
          <div className="hidden md:grid grid-cols-4 text-center gap-4">

            <div>
              <p className="text-zinc-400 text-sm">Name</p>
              <p>{profile?.firstName} {profile?.lastName}</p>
            </div>

            <div>
              <p className="text-zinc-400 text-sm">Place</p>
              <p>{profile?.address}</p>
            </div>

            <div>
              <p className="text-zinc-400 text-sm">Email</p>
              <p>{profile?.email}</p>
            </div>

            <div>
              <p className="text-zinc-400 text-sm">Phone</p>
              <p>{profile?.phoneNo}</p>
            </div>

          </div>

        </div>

        {/* VIDEO GRID */}

        <div className="border border-zinc-600 rounded-3xl p-5">

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {videos.map((v) => (
              <div
                key={v._id}
                className="rounded-xl overflow-hidden bg-[#1a2b46] aspect-3/4"
              >
                <video
                  className="w-full h-full object-cover"
                  muted
                  src={v.video}
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default PartnerProfile;