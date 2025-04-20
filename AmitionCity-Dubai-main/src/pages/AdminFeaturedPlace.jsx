import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const AdminFeaturedPlace = () => {
  const [places, setPlaces] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch all featured places from the backend
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/all-featured`
        );
        setPlaces(response.data);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, []);

  // Handle place deletion
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_URL}/api/delete-featured/${id}`
      );
      setMessage(response.data.message);
      // Refresh the list after deletion
      setPlaces(places.filter((place) => place._id !== id));
    } catch (error) {
      setMessage("Error deleting place");
      console.error("Error deleting place:", error);
    }
  };

  // Handle toggling the "Best" status
  const handleBestPlace = async (id) => {
    try {
      const updatedPlaces = places.map((place) =>
        place._id === id ? { ...place, isBest: !place.isBest } : place
      );
      setPlaces(updatedPlaces);

      // Optionally, you can make a request to the backend to update the "Best" status in the database.
      setMessage("Place status updated successfully.");
    } catch (error) {
      console.error("Error updating best place:", error);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Admin Featured Places</h2>

      {message && (
        <div className="bg-green-200 text-green-700 p-2 mb-4 rounded-md">
          {message}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left">Place Name</th>
              <th className="px-4 py-2 border text-left">Image</th>
              <th className="px-4 py-2 border text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {places.length > 0 ? (
              places.map((place) => (
                <tr key={place._id} className="border-b">
                  <td className="px-4 py-2">{place.placeName}</td>
                  <td className="px-4 py-2">
                    <img
                      // src={`http://localhost:5000${place.placeImageUrl}`}
                      src={place.placeImageUrl}
                      alt={place.placeName}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 flex items-center justify-center text-center space-x-4">
                    {/* Delete Icon (Trash Icon) */}
                    <button
                      onClick={() => handleDelete(place._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MdDelete size={24} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-2 text-center text-gray-500">
                  No places available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFeaturedPlace;
