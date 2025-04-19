import React from "react";
import { useNavigate } from "react-router";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authToken");

    navigate("/login");
  };

  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Admin Dashboard</h1>
        <div className="flex space-x-4">
          <button className="text-white">Profile</button>
          <button onClick={handleLogout} className="text-white">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
