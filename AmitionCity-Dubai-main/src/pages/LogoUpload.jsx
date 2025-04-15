import React, { useState } from "react";
import axios from "axios";

const LogoUpload = () => {
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleLogoUpload = async () => {
    if (!logo) {
      setMessage("Please select a logo to upload");
      return;
    }

    const formData = new FormData();
    formData.append("logo", logo);

    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload/logo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);
      setLogoUrl(response.data.logoUrl);
    } catch (error) {
      setMessage("Error uploading logo");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md space-y-4">
      <h2 className="text-2xl font-semibold text-center text-gray-700">
        Upload Logo
      </h2>

      {message && <p className="text-center text-red-500">{message}</p>}

      <input
        type="file"
        onChange={handleLogoChange}
        accept="image/*"
        className="w-full p-3 border border-gray-300 rounded-md"
      />

      <div className="text-center">
        <button
          onClick={handleLogoUpload}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload Logo"}
        </button>
      </div>

      {logoUrl && (
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-gray-600">
            Uploaded Logo:
          </h3>
          <img
            src={`http://localhost:5000${logoUrl}`}
            alt="Uploaded Logo"
            className="mx-auto mt-2 rounded-md max-w-xs"
          />
        </div>
      )}
    </div>
  );
};

export default LogoUpload;
0;
