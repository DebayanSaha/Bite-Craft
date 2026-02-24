import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PartnerPage = () => {
    const nav = useNavigate()
  const msg = [
    "Increase your online orders",
    "Reach customers far away from you",
    "Increase revenue through higher sales",
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % msg.length);
        setAnimate(false);
      }, 400); // animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-transparent w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover -z-10"
        src="/videos/bg/partnerbg.mp4"
      />
      <div className="relative w-full h-30 p-3">
        <h1 className="font-[font9] md:text-5xl md:ml-3 text-3xl text-[#E8E4D7] md:tracking-[2px] tracking-[1px] mt-2 md:mt-4">
          Bitecraft .
        </h1>
        <div className="absolute right-0 top-5 md:w-70 w-45 font-[font2] text-[#E8E4D7] flex md:gap-10 gap-5">
          <button
            onClick={() => nav("/partner/login")}
            className="cursor-pointer bg-yellow-500 font-[font5] font-semibold shadow-xl shadow-orange-900/30  md:px-6 px-4 md:py-3 py-2 md:text-xl text-zinc-800 rounded-2xl "
          >
            Connect your Restaurant{" "}
          </button>
        </div>
      </div>
      <div className="absolute w-full md:h-80 top-60 text-center p-4 md:px-8">
        <h1 className="font-[font6] text-[#E8E4D7] text-6xl md:text-9xl ">
          <span className="text-[#f4ca59]  font-[font5]">Partner</span> with us.
        </h1>
      </div>
      <div className="md:h-60 absolute md:bottom-15 top-90 left-1/2 -translate-x-1/2 w-full flex items-center justify-center px-6 ">
        <div
          className="relative z-10 md:w-80 backdrop-blur-xl bg-white/10 shadow-zinc-700  border border-white/20 rounded-2xl p-3 shadow-2xl overflow-hidden"
        >
          <h2
            key={index}
            className="text-[#E8E4D7] text-xl md:text-2xl font-[font5] text-center animate-slide"
          >
            {msg[index]}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
