import React, { useState } from "react";
import axios from "axios";

const FeaturedPlaceAdd = () => {
  const [placeName, setPlaceName] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle the input change for PlaceName
  const handlePlaceNameChange = (e) => {
    setPlaceName(e.target.value);
  };

  // Handle the image file selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!placeName) {
      setError("Place Name is required");
      return;
    }
    if (!image) {
      setError("Image file is required");
      return;
    }

    const formData = new FormData();
    formData.append("placeName", placeName); // Ensure the field name matches the backend field
    formData.append("placeImage", image); // Make sure this field name matches the multer field

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/add-featured`, // Make sure the endpoint is correct
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure this header is set
          },
        }
      );

      setMessage(response.data.message);
      setPlaceName("");
      setImage(null);
    } catch (err) {
      setError(err.response?.data?.message || "Error creating Featured Place");
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Featured Place</h2>

      {message && (
        <div className="bg-green-200 text-green-700 p-2 mb-4 rounded-md">
          {message}
        </div>
      )}

      {error && (
        <div className="bg-red-200 text-red-700 p-2 mb-4 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="placeName"
            className="block text-sm font-medium text-gray-700"
          >
            Place Name
          </label>
          <input
            type="text"
            id="placeName"
            name="placeName"
            value={placeName}
            onChange={handlePlaceNameChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="placeImage"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="placeImage"
            name="placeImage"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Featured Place
        </button>
      </form>
    </div>
  );
};

export default FeaturedPlaceAdd;
