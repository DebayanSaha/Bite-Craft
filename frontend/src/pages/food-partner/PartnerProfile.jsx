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
          `http://localhost:3000/api/partner/${id}`,
          { withCredentials: true }
        );

        setProfile(res.data.partner);
        setVideos(res.data.partner.foodItems);
      } catch (error) {
        console.error("Error fetching food partner data:", error);
      }
    };

    fetchPartner();
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center p-6">

      {/* Main Container */}
      <div className="w-full max-w-6xl">

        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6">
          <i
            onClick={() => nav(-1)}
            className="ri-arrow-left-line text-3xl cursor-pointer"
          ></i>

          <i className="ri-settings-3-fill text-3xl cursor-pointer"></i>
        </div>

        {/* Profile Header */}
        <div className="border border-zinc-600 rounded-3xl p-6 mb-6">

          <div className="flex items-center justify-between">

            {/* Left Profile Section */}
            <div className="flex items-center gap-6">

              <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-black font-bold">
                DP
              </div>

              <div>
                <h1 className="text-2xl font-bold uppercase">
                  {profile?.storeName}
                </h1>
              </div>

            </div>

            {/* Stats */}
            <div className="flex gap-6">

              <div className="border border-zinc-600 rounded-xl px-6 py-3 text-center">
                <h2 className="text-3xl font-bold">19</h2>
              </div>

              <div className="border border-zinc-600 rounded-xl px-6 py-3 text-center">
                <h2 className="text-3xl font-bold">23</h2>
              </div>

            </div>

          </div>

        </div>

        {/* Info Row */}
        <div className="border border-zinc-600 rounded-2xl p-6 mb-8 grid grid-cols-4 gap-6 text-center">

          <div>
            <p className="text-zinc-400 text-sm">Name</p>
            <p className="font-semibold">
              {profile?.firstName} {profile?.lastName}
            </p>
          </div>

          <div>
            <p className="text-zinc-400 text-sm">Place</p>
            <p className="font-semibold">{profile?.address}</p>
          </div>

          <div>
            <p className="text-zinc-400 text-sm">Email</p>
            <p className="font-semibold">{profile?.email}</p>
          </div>

          <div>
            <p className="text-zinc-400 text-sm">Phone</p>
            <p className="font-semibold">{profile?.phoneNo}</p>
          </div>

        </div>

        {/* Videos Section */}
        <div className="border border-zinc-600 rounded-3xl p-6">

          <div className="grid grid-cols-3 gap-6">

            {videos.map((v) => (
              <div
                key={v._id}
                className="rounded-xl overflow-hidden bg-[#1a2b46]"
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