import React, { useState } from "react";

const PartnerCreateFood = () => {
  const [video, setVideo] = useState(null);
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedVideos, setUploadedVideos] = useState([]);

  const handleUpload = (e) => {
    e.preventDefault();

    const newVideo = {
      id: Date.now(),
      foodName,
      description,
      videoURL: URL.createObjectURL(video),
    };

    setUploadedVideos([...uploadedVideos, newVideo]);

    setVideo(null);
    setFoodName("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">Upload Food Video</h1>

        {/* Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">

          <form onSubmit={handleUpload} className="space-y-4">

            {/* Video Upload */}
            <div>
              <label className="block font-medium mb-2">Upload Video</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Food Name */}
            <div>
              <label className="block font-medium mb-2">Food Item Name</label>
              <input
                type="text"
                placeholder="Example: Spicy Chicken Burger"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-2">Description</label>
              <textarea
                placeholder="Write about the dish..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Preview */}
            {video && (
              <video
                controls
                className="w-full rounded-lg"
                src={URL.createObjectURL(video)}
              />
            )}

            {/* Upload Button */}
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              Upload Video
            </button>

          </form>
        </div>

        {/* Uploaded Videos Section */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Your Uploaded Videos
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

            {uploadedVideos.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow-md"
              >
                <video
                  src={item.videoURL}
                  controls
                  className="rounded-lg mb-2"
                />

                <h3 className="font-semibold text-lg">
                  {item.foodName}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>

    </div>
  );
};

export default PartnerCreateFood;