import axios from "axios";
import React, { useState } from "react";

const SidePanel = ({ foodId, likeCount, saveCount, isLiked, isSaved }) => {
  const [likes, setLikes] = useState(likeCount);
  const [saves, setSaves] = useState(saveCount);
  const [liked, setLiked] = useState(isLiked);
  const [saved, setSaved] = useState(isSaved);
  const [burst, setBurst] = useState(false);

  const like = async () => {
    try {
      await axios.post(
        "https://bite-craft.onrender.com/api/food/like",
        { foodId },
        { withCredentials: true },
      );
      if (liked) {
        setLikes((prev) => Math.max(prev - 1, 0));
        setLiked(false);
      } else {
        setLikes((prev) => prev + 1);
        setLiked(true);
        // Trigger burst animation only when liking
        setBurst(true);
        setTimeout(() => setBurst(false), 600);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const save = async () => {
    try {
      await axios.post(
        "https://bite-craft.onrender.com/api/food/save",
        { foodId },
        { withCredentials: true },
      );
      if (saved) {
        setSaves((prev) => Math.max(prev - 1, 0));
        setSaved(false);
      } else {
        setSaves((prev) => prev + 1);
        setSaved(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center">

      {/* Like button */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center" onClick={like}>

          {/* Burst particles */}
          {burst && (
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-pink-500"
                  style={{
                    animation: `burst-${i} 0.6s ease-out forwards`,
                    transform: `rotate(${i * 45}deg)`,
                  }}
                />
              ))}
            </span>
          )}

          {/* Ripple ring */}
          {burst && (
            <span
              className="absolute rounded-full border-2 border-pink-400 pointer-events-none"
              style={{ animation: "ripple 0.6s ease-out forwards" }}
            />
          )}

          <i
            className={`ri-heart-2-fill text-4xl cursor-pointer transition-all duration-150
              bg-linear-to-r from-[#b43a87] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent
              ${burst ? "scale-150" : "scale-100"}
            `}
          />
        </div>
        <h1 className="font-[Font10] text-xl text-center text-white">{likes}</h1>
      </div>

      {/* Comment button */}
      <div className="flex flex-col items-center">
        <i className="ri-chat-1-fill bg-linear-to-r from-[#b43a87] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent text-4xl cursor-pointer" />
        <h1 className="font-[Font10] text-xl text-center text-white">34</h1>
      </div>

      {/* Save button */}
      <div className="flex flex-col items-center">
        <i
          onClick={save}
          className="ri-bookmark-fill bg-linear-to-b from-[#fc9f65] via-[#fd1d1d] to-[#b84000] bg-clip-text text-transparent text-4xl cursor-pointer"
        />
        <h1 className="font-[Font10] text-xl text-center text-white">{saves}</h1>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes ripple {
          0%   { width: 0px; height: 0px; opacity: 1; }
          100% { width: 60px; height: 60px; opacity: 0; }
        }
        ${[...Array(8)].map((_, i) => {
          const angle = i * 45;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 28;
          const y = Math.sin(rad) * 28;
          return `
            @keyframes burst-${i} {
              0%   { transform: rotate(${angle}deg) translate(0px) scale(1); opacity: 1; }
              100% { transform: translate(${x}px, ${y}px) scale(0); opacity: 0; }
            }
          `;
        }).join("")}
      `}</style>

    </div>
  );
};

export default SidePanel;