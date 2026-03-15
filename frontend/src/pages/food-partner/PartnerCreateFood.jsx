import axios from "axios";
import React, { useState } from "react";

const PartnerCreateFood = () => {
  const [formData, setFormData] = useState({
    foodName: "",
    description: "",
  });

  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("foodName", formData.foodName);
      data.append("description", formData.description);
      data.append("video", video);

      const res = await axios.post("https://bite-craft.onrender.com/api/food/", data, {
        withCredentials: true,
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/images/background/foodpartner/createfoodbg.png')] bg-cover bg-center backdrop-blur-md flex items-center justify-center p-6">
      <div className="z-9 absolute inset-0 bg-black/10"></div>

      <div className="z-10 w-full max-w-4xl bg-black/10 backdrop-blur-sm rounded-2xl p-8">
        <div className="flex justify-center mb-10">
          <h1 className="text-black text-4xl font-[font5] md:text-7xl px-6 py-0 md:py-2 rounded-lg">
            Share Your <span className="font-[font6] text-white">Dish</span> ..
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col md:gap-6 gap-3">
            <input
              type="text"
              name="foodName"
              placeholder="Food Item Name"
              value={formData.foodName}
              onChange={handleChange}
              className="bg-black/20 font-[font6] rounded-xl px-4 py-3 text-white focus:outline-amber-400 text-xl tracking-[1px]"
            />

            <textarea
              name="description"
              placeholder="Food Item Description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              className="bg-black/20 font-[font6] rounded-xl px-4 py-4 text-white focus:outline-amber-400 text-xl tracking-[1px]"
            />
          </div>

          <div className="flex flex-col gap-4">
            {/* Upload Section (thinner) */}
            <label className="bg-black/20 font-[font6] rounded-xl md:h-13 h-24 flex items-center justify-center text-white cursor-pointer text-xl tracking-[1px]">
              Upload Video <i className="ri-cloud-fill ml-2 text-blue-200"></i>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="hidden"
              />
            </label>

            {/* Video Preview */}
            {preview && (
              <div className="bg-black/20 rounded-xl p-3">
                <video
                  src={preview}
                  controls
                  className="w-full rounded-lg max-h-48 object-cover"
                />
              </div>
            )}

            {/* Upload Another */}
            <label className="bg-[#f46853] hover:bg-[#f46853] text-white font-[font6] text-xl px-6 py-2 rounded-full cursor-pointer transition-all duration-300 md:w-[45%] md:ml-25">
              Upload Another <i className="ri-corner-right-up-fill"></i>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="hidden"
              />
            </label>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#9bd46a] hover:bg-[#90ca5c] text-white font-[font6] text-xl px-6 py-2 rounded-full cursor-pointer transition-all duration-300"
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
