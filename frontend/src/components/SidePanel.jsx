import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidePanel = ({ foodId, likeCount, saveCount, isLiked, isSaved }) => {
  const [likes, setLikes] = useState(likeCount);
  const [saves, setSaves] = useState(saveCount);
  const [liked, setLiked] = useState(isLiked);
  const [saved, setSaved] = useState(isSaved);

  const like = async () => {
    try {
      const res = await axios.post(
        "https://bite-craft.onrender.com/api/food/like",
        { foodId },
        { withCredentials: true },
      );

      if (liked) {
        setLikes((prev) => Math.max(prev - 1, 0));
        setLiked(false);
      } else {
        setLikes((prev) => Math.max(prev + 1, 0));
        setLiked(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const save = async () => {
    try {
      const res = await axios.post(
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
    <div className="absolute right-0 z-100 h-150 w-15 flex flex-col gap-5 items-center justify-center bottom-0">
      <div>
        <i
          onClick={like}
          className="ri-heart-2-fill bg-linear-to-r from-[#b43a87] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent text-4xl cursor-pointer"
        ></i>
        <h1 className="font-[Font10] text-xl text-center text-white">
          {likes}
        </h1>
      </div>
      <div>
        <i className="ri-chat-1-fill bg-linear-to-r from-[#b43a87] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent text-4xl cursor-pointer"></i>
        <h1 className="font-[Font10] text-xl text-center text-white">34</h1>
      </div>
      <div>
        <i
          onClick={save}
          className="ri-bookmark-fill bg-linear-to-b from-[#fc9f65] via-[#fd1d1d] to-[#b84000] bg-clip-text text-transparent text-4xl cursor-pointer"
        ></i>
        <h1 className="font-[Font10] text-xl text-center text-white">
          {saves}
        </h1>
      </div>
    </div>
  );
};

export default SidePanel;
