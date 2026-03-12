import React, { useState } from "react";

const PartnerCreateFood = () => {
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("foodName", foodName);
    formData.append("description", description);
    formData.append("video", video);

    console.log("Food Data:", { foodName, description, video });
  };

  return (
    <div className="min-h-screen bg-[url('/images/background/foodpartner/createfoodbg.png')] bg-cover bg-center backdrop-blur-md flex items-center justify-center p-6">
      <div className="z-9 absolute inset-0 bg-black/10"></div>
      <div className="z-10 w-full max-w-4xl bg-black/10 backdrop-blur-sm rounded-2xl p-8">

        {/* Title */}
        <div className="flex justify-center mb-10">
          <h1 className="text-black text-4xl font-[font5] md:text-7xl  px-6 py-0 md:py-2 rounded-lg">
            Share Your <span className="font-[font6] text-white">Dish</span> ..
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Section */}
          <div className="flex flex-col md:gap-6 gap-3">

            {/* Food Name */}
            <input
              type="text"
              placeholder="Food Item Name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="bg-black/20 font-[font6] rounded-xl px-4 py-3 text-white focus:outline-amber-400 text-xl tracking-[1px]"
            />

            {/* Description */}
            <textarea
              placeholder="Food Item Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="6"
              className="bg-black/20 font-[font6] rounded-xl px-4 py-4 text-white focus:outline-amber-400 text-xl tracking-[1px]"
            ></textarea>

          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between">

            {/* Video Upload */}
            <label className="bg-black/20 font-[font6] focus:outline-amber-400 text-xl tracking-[1px] rounded-xl md:h-50 h-30 flex items-center justify-center text-white cursor-pointer">
              Video Upload
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="hidden"
              />
            </label>

            {/* Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-600 text-white font-[font6] text-xl px-6 py-2 rounded-full cursor-pointer"
              >
                Create
              </button>
            </div>

          </div>

        </form>
      </div>

    </div>
  );
};

export default PartnerCreateFood;