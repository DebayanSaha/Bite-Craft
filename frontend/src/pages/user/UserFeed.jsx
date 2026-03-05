import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

const UserFeed = () => {
  const [videos, setVideos] = useState([]);

  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchVids = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/food/", {
          withCredentials: true,
        });
        setVideos(res.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVids();
  }, [videos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.currentTime = 0; // Restart
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
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
        {videos.map((video, index) => (
          <div key={video._id} className="relative h-screen w-full snap-start">
            {/* Video */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.video}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/70 to-transparent pointer-events-none"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="absolute bottom-20 items-center flex gap-3">
                <div className="bg-black h-10 w-10 rounded-full "></div>
                <button className="rounded-full bg-orange-500 backdrop-blur-3xl px-5 h-8 text-yellow-200 text-[18px] font-[font8] hover:scale-105 transition-transform duration-200 text-center">
                  Store <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
              <h2 className="absolute bottom-8 text-4xl font-[font9] uppercase">
                {video.foodName}
              </h2>
              <p className="absolute bottom-2 left-5 clamp-2 text-lg text-zinc-300 font-[font6] ">
                - {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserFeed;
