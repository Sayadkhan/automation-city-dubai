import React, { useState, useEffect } from "react";
import axios from "axios";

const SocailMediaPage = () => {
  const [socialMedia, setSocialMedia] = useState({
    name: "",
    link: "",
  });
  const [icon, setIcon] = useState(null);
  const [message, setMessage] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);

  // Fetch all social media links from the backend
  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/social-media/all"
        );
        setSocialLinks(response.data); // Set fetched data
      } catch (error) {
        setMessage("Error fetching social media links.");
      }
    };

    fetchSocialLinks();
  }, []);

  // Handle input changes for social media form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialMedia({
      ...socialMedia,
      [name]: value,
    });
  };

  // Handle file change (icon)
  const handleIconChange = (e) => {
    setIcon(e.target.files[0]);
  };

  // Handle form submission to add social media link
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!socialMedia.name || !socialMedia.link || !icon) {
      setMessage("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", socialMedia.name);
    formData.append("link", socialMedia.link);
    formData.append("icon", icon);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/social/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);

      // Refresh the social media list
      const updatedLinks = await axios.get(
        "http://localhost:5000/api/social-media/all"
      );
      setSocialLinks(updatedLinks.data);
    } catch (error) {
      setMessage("Error adding social media link");
      console.error(error);
    }
  };

  // Handle removing a social media link
  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/social-media/delete/${id}`
      );
      setMessage(response.data.message);

      // Remove the deleted link from the state
      setSocialLinks(socialLinks.filter((link) => link._id !== id));
    } catch (error) {
      setMessage("Error deleting social media link");
      console.error(error);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Social Media Links</h2>

      {message && <div className="p-2 mb-4 rounded-md">{message}</div>}

      {/* Social Media Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Social Media Name
          </label>
          <input
            type="text"
            name="name"
            value={socialMedia.name}
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Social Media Link
          </label>
          <input
            type="url"
            name="link"
            value={socialMedia.link}
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Icon
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleIconChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Social Media Link
        </button>
      </form>

      {/* Displaying all social media links */}
      <h3 className="text-xl font-bold mb-4">All Social Media Links</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.length > 0 ? (
          socialLinks.map((social) => (
            <div
              key={social._id}
              className="relative border rounded-lg p-4 bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`http://localhost:5000${social.iconUrl}`}
                  alt={social.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <h4 className="font-medium text-lg">{social.name}</h4>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    {social.link}
                  </a>
                </div>
              </div>

              {/* Delete Button (Trash Icon) */}
              <button
                onClick={() => handleRemove(social._id)}
                className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 text-white rounded-full opacity-0 hover:opacity-100 transition-opacity"
              >
                <i className="fas fa-trash-alt text-lg"></i>
              </button>
            </div>
          ))
        ) : (
          <p>No social media links added yet.</p>
        )}
      </div>
    </div>
  );
};

export default SocailMediaPage;
