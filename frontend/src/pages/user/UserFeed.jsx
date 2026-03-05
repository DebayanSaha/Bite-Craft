import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const UserFeed = () => {

  const [videos, setVideos] = useState([]);

  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchVids = async()=>{
      try {
        const res = await axios.get("http://localhost:3000/api/food/",{ withCredentials:true });
        setVideos(res.data.items); 
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVids();
  }, [videos])
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.currentTime = 0;   // Restart 
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.75 }
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
            <div className="absolute bottom-10 flex gap-10">
              <h2 className="text-4xl font-[font9] uppercase">
                {video.foodName}
              </h2>
              <button className="rounded-lg bg-white px-6 py-3 text-black font-semibold hover:scale-105 transition-transform duration-200">
                Visit Store
              </button>
            </div>

            <p className="clamp-2 mb-3 text-lg font-medium leading-snug">
              {video.description}
            </p>

            

          </div>
        </div>
      ))}
    </div>
  );
};

export default UserFeed;