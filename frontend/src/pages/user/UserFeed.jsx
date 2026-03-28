import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import SidePanel from "../../components/SidePanel";
import { useNavigate } from "react-router-dom";
import LowerNavBar from "../../components/LowerNavBar";

const UserFeed = () => {
  const nav = useNavigate();
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);
  const observerRef = useRef(null);

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
    if (videos.length === 0) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.currentTime = 0;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                const resume = () => {
                  video.play().catch(() => {});
                  document.removeEventListener("click", resume);
                  document.removeEventListener("touchstart", resume);
                };
                document.addEventListener("click", resume, { once: true });
                document.addEventListener("touchstart", resume, { once: true });
              });
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.75 },
    );

    const timer = setTimeout(() => {
      videoRefs.current.forEach((video) => {
        if (video) observerRef.current.observe(video);
      });
      const firstVisible = videoRefs.current.find((v) => v);
      if (firstVisible) {
        firstVisible.play().catch(() => {});
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [videos]);

  const setVideoRef = (el, index) => {
    if (el && el !== videoRefs.current[index]) {
      videoRefs.current[index] = el;
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center bg-black">

        {/* ── MOBILE ── */}
        <div className="md:hidden w-full max-w-[420px] overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
          {videos.map((video, index) => (
            <div key={video._id} className="relative h-screen w-full snap-start">
              <video
                ref={(el) => setVideoRef(el, index)}
                src={video.video}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                preload="auto"
              />

              {/* Mobile SidePanel — absolute positioned here since SidePanel no longer self-positions */}
              <div className="absolute right-4 bottom-32 z-10">
                <SidePanel
                  foodId={video._id}
                  likeCount={video.likeCount}
                  saveCount={video.saveCount}
                  isLiked={video.isLiked}
                  isSaved={video.isSaved}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              <div className="absolute bottom-24 left-5 right-5 text-white flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-black h-10 w-10 rounded-full" />
                  <h1 className="text-xl font-[font6] mr-4">{video.foodpartner?.storeName}</h1>
                  <button
                    onClick={() => nav(`/partner/${video.foodpartner._id}`)}
                    className="rounded-full bg-orange-500 px-5 h-8 text-yellow-200 text-[18px] font-[font8] hover:scale-105 transition"
                  >
                    Store <i className="ri-arrow-right-up-line" />
                  </button>
                </div>
                <h2 className="text-4xl font-[font9] uppercase">{video.foodName}</h2>
                <p className="line-clamp-2 text-lg text-zinc-300 font-[font6] ml-5">
                  - {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:block w-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
          {videos.map((video, index) => (
            <div
              key={video._id}
              className="w-full h-screen snap-start flex items-stretch justify-center"
            >

              {/* LEFT — caption / meta */}
              <div className="flex-1 flex items-end justify-end pb-24 pr-8">
                <div className="text-white flex flex-col gap-2 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-black h-10 w-10 rounded-full border border-white/20" />
                    <h1 className="text-xl font-[font6] mr-4">{video.foodpartner?.storeName}</h1>
                    <button
                      onClick={() => nav(`/partner/${video.foodpartner._id}`)}
                      className="rounded-full bg-orange-500 px-5 h-8 text-yellow-200 text-[18px] font-[font8] hover:scale-105 transition"
                    >
                      Store <i className="ri-arrow-right-up-line" />
                    </button>
                  </div>
                  <h2 className="text-4xl font-[font9] uppercase">{video.foodName}</h2>
                  <p className="line-clamp-2 text-lg text-zinc-300 font-[font6] ml-5">
                    - {video.description}
                  </p>
                </div>
              </div>

              {/* CENTER — full-height video */}
              <div className="relative h-screen w-[420px] flex-shrink-0">
                <video
                  ref={(el) => setVideoRef(el, index)}
                  src={video.video}
                  className="h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </div>

              {/* RIGHT — side panel pinned close to video */}
              <div className="flex-1 flex items-center justify-start pl-6">
                <div className="[&_span]:text-white [&_span]:font-bold [&_span]:text-sm [&_span]:tracking-wide">
                  <SidePanel
                    foodId={video._id}
                    likeCount={video.likeCount}
                    saveCount={video.saveCount}
                    isLiked={video.isLiked}
                    isSaved={video.isSaved}
                  />
                </div>
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