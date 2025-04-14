import React from "react";
import { Outlet } from "react-router";
import AdminNavbar from "../components/Admin/AdminNavbar";
import Sidebar from "../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <AdminNavbar />
      <main>
        <div className="flex flex-row min-h-screen">
          <div>
            <Sidebar />
          </div>
          <div className="flex-grow p-4 bg-gray-100">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
