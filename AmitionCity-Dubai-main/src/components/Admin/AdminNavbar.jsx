import React from "react";

const AdminNavbar = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Admin Dashboard</h1>
        <div className="flex space-x-4">
          <button className="text-white">Profile</button>
          <button className="text-white">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
