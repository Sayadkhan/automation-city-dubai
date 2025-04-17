import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const BannerUpload = () => {
  const [banners, setBanners] = useState(null);
  const [message, setMessage] = useState("");
  const [uploadedBanners, setUploadedBanners] = useState([]);

  // Fetch all banners from the backend
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/banner/all-banners"
        );
        setUploadedBanners(response.data); // Set banners data
      } catch (error) {
        console.error("Error fetching banners:", error);
        setMessage("Error fetching banners.");
      }
    };

    fetchBanners();
  }, []);

  // Handle multiple file selection
  const handleFileChange = (e) => {
    setBanners(e.target.files);
  };

  // Handle form submission to upload banners
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!banners) {
      setMessage("Please select at least one banner image.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < banners.length; i++) {
      formData.append("bannerImages", banners[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/banner/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message); // Show success message
      // Refresh the banner list after upload
      const updatedBanners = await axios.get(
        "http://localhost:5000/api/banner/all-banners"
      );
      setUploadedBanners(updatedBanners.data);
    } catch (error) {
      setMessage("Error uploading banners");
      console.error(error);
    }
  };

  // Handle removing a banner
  const handleRemoveBanner = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/banner/delete-banner/${id}`
      );
      setMessage(response.data.message);
      // Update the banner list after deletion
      setUploadedBanners(uploadedBanners.filter((banner) => banner._id !== id));
    } catch (error) {
      setMessage("Error deleting banner");
      console.error(error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Banners</h2>

      {message && <div className="p-2 mb-4 rounded-md">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Banner Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Upload Banners
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Uploaded Banners</h3>
        <div className="grid grid-cols-3 gap-4">
          {uploadedBanners.length > 0 ? (
            uploadedBanners.map((banner) => (
              <div
                key={banner._id}
                className="relative group"
                onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
              >
                <img
                  src={`http://localhost:5000${banner.bannerImageUrl}`}
                  alt="Banner"
                  className="w-full h-32 object-cover rounded-md"
                />
                <button
                  onClick={() => handleRemoveBanner(banner._id)}
                  className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <i className="fas fa-trash-alt">
                    <MdDelete className="text-white" size={20} />
                  </i>
                </button>
              </div>
            ))
          ) : (
            <p>No banners uploaded yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerUpload;
