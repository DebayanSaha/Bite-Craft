import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import SidePanel from "../../components/SidePanel";
import { useNavigate } from "react-router-dom";
import LowerNavBar from "../../components/LowerNavBar";

const UserFeed = () => {
  const nav = useNavigate();
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchVids = async () => {
      try {
        const res = await axios.get(
          "https://bite-craft.onrender.com/api/food/",
          { withCredentials: true },
        );
        setVideos(res.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVids();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.currentTime = 0;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.75 },
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]);

  return (
    <>
      {/*Tihs is Centered Feed Container */}
      <div className="h-screen flex justify-center bg-black">
        {/* Fixed width feed like mobile */}
        <div className="w-full max-w-[420px] overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
          {videos.map((video, index) => (
            <div
              key={video._id}
              className="relative h-screen w-full snap-start"
            >
              {/* Video */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.video}
                className="h-full w-full object-cover"
                autoPlay
                loop
                playsInline
                preload="metadata"
              />

              {/* Side Panel */}
              <SidePanel
                foodId={video._id}
                likeCount={video.likeCount}
                saveCount={video.saveCount}
                isLiked={video.isLiked}
                isSaved={video.isSaved}
              />

              {/* Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

              {/* Content */}
              <div className="absolute bottom-24 left-5 right-5 text-white flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-black h-10 w-10 rounded-full"></div>

                  <h1 className="text-xl font-[font6] mr-4">
                    {video.foodpartner?.storeName}
                  </h1>

                  <button
                    onClick={() => nav(`/partner/${video.foodpartner._id}`)}
                    className="rounded-full bg-orange-500 px-5 h-8 text-yellow-200 text-[18px] font-[font8] hover:scale-105 transition"
                  >
                    Store <i className="ri-arrow-right-up-line"></i>
                  </button>
                </div>

                <h2 className="text-4xl font-[font9] uppercase">
                  {video.foodName}
                </h2>

                <p className="line-clamp-2 text-lg text-zinc-300 font-[font6] ml-5">
                  - {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LowerNavBar />
    </>
  );
};

export default UserFeed;
