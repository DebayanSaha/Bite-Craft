import React, { useEffect, useRef } from "react";

const UserFeed = () => {
  const videos = [
    {
      id: 1,
      src: "https://ik.imagekit.io/7lchqfgaf/f18d4291-a63c-4b9d-89c1-9e0794a23c1b_9s8yLM4P6",
      description:
        "Premium handcrafted sneakers built for creators who refuse to follow trends and instead define them.",
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/7lchqfgaf/f18d4291-a63c-4b9d-89c1-9e0794a23c1b_9s8yLM4P6",
      description:
        "Minimal streetwear collection engineered for comfort, durability, and timeless aesthetic dominance.",
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/7lchqfgaf/f18d4291-a63c-4b9d-89c1-9e0794a23c1b_9s8yLM4P6",
      description:
        "Tech-powered backpacks designed for digital nomads navigating cities and continents effortlessly.",
    },
  ];

  const videoRefs = useRef([]);

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
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {videos.map((video, index) => (
        <div key={video.id} className="relative h-screen w-full snap-start">
          {/* Video */}
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.src}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

          {/* Content Overlay */}
          <div className="absolute bottom-20 left-5 right-5 text-white">
            <p className="clamp-2 mb-3 text-lg font-medium leading-snug">
              {video.description}
            </p>

            <button className="rounded-lg bg-white px-6 py-3 text-black font-semibold hover:scale-105 transition-transform duration-200">
              Visit Store
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserFeed;