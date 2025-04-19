import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    whatsapp: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch current contact info
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/contact/info"
        );
        setContactInfo(response.data);
        setLoading(false);
      } catch (error) {
        setMessage("Error fetching contact info");
        setLoading(false);
      }
    };
    fetchContactInfo();
  }, []);

  // Handle editing a specific contact type
  const handleEdit = async (type) => {
    const newValue = prompt(`Enter new ${type}:`, contactInfo[type]);
    if (newValue !== null && newValue.trim() !== "") {
      try {
        const response = await axios.put(
          "http://localhost:5000/api/contact/add",
          {
            type,
            value: newValue,
          }
        );
        setMessage(response.data.message);
        setContactInfo({ ...contactInfo, [type]: newValue });
      } catch (error) {
        setMessage("Error updating contact.");
        console.error(error);
      }
    }
  };

  // Handle deleting a specific contact type
  const handleDelete = async (type) => {
    if (window.confirm(`Are you sure you want to delete the ${type}?`)) {
      try {
        const response = await axios.delete(
          "http://localhost:5000/api/contact/delete",
          {
            data: { type },
          }
        );
        setMessage(response.data.message);
        setContactInfo({ ...contactInfo, [type]: "" });
      } catch (error) {
        setMessage("Error deleting contact.");
        console.error(error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

      {message && (
        <div className="p-2 mb-4 bg-gray-200 rounded-md">{message}</div>
      )}

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Value</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Phone</td>
            <td className="py-2 px-4 border-b">{contactInfo.phone}</td>
            <td className="py-2 px-4 border-b">
              <button
                onClick={() => handleEdit("phone")}
                className="bg-blue-500 text-white py-1 px-4 rounded mr-2 hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete("phone")}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">WhatsApp</td>
            <td className="py-2 px-4 border-b">{contactInfo.whatsapp}</td>
            <td className="py-2 px-4 border-b">
              <button
                onClick={() => handleEdit("whatsapp")}
                className="bg-blue-500 text-white py-1 px-4 rounded mr-2 hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete("whatsapp")}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Email</td>
            <td className="py-2 px-4 border-b">{contactInfo.email}</td>
            <td className="py-2 px-4 border-b">
              <button
                onClick={() => handleEdit("email")}
                className="bg-blue-500 text-white py-1 px-4 rounded mr-2 hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete("email")}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactPage;
