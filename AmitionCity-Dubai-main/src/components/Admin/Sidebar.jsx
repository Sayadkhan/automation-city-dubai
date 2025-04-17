import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Optional for dropdown icon

const Sidebar = () => {
  // Define the sections and their submenus in a data structure
  const [openMenus, setOpenMenus] = useState({
    business: false,
    settings: false,
  });

  // Menu data - can be easily extended
  const menuData = [
    {
      name: "Places",
      link: "/admin/places",
      submenu: [
        { name: "All Featured Place", link: "/admin/places" },
        { name: "Add Featured Place", link: "/admin/place/add" },
      ],
    },
    {
      name: "Settings",
      link: "/admin/settings",
      submenu: [
        { name: "Add Logo", link: "/admin/upload/logo" },
        { name: "Add Banner", link: "/admin/upload/banner" },
      ],
    },
    {
      name: "Social Media",
      link: "/admin/Social",
      submenu: [
        { name: "Add Socail Media", link: "/admin/add/socail-media" },
        { name: "Mennage Social Media", link: "/admin/eidt/social-media" },
      ],
    },
  ];

  const toggleDropdown = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen sticky top-0">
      <div className="flex flex-col space-y-4 p-4">
        {/* Render all menu items dynamically */}
        {menuData.map((menu) => (
          <div key={menu.name}>
            <button
              onClick={() => toggleDropdown(menu.name.toLowerCase())}
              className="flex items-center justify-between w-full p-2 text-left rounded-md hover:bg-gray-700"
            >
              {menu.name}
              {openMenus[menu.name.toLowerCase()] ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>

            {/* Render submenu items if the corresponding menu is open */}
            <div
              className={`transition-all ease-in-out duration-300 ${
                openMenus[menu.name.toLowerCase()]
                  ? "max-h-[200px] mt-2"
                  : "max-h-0"
              } overflow-hidden`}
            >
              {menu.submenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="block p-2 text-gray-300 hover:bg-gray-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Profile Link */}
        <Link
          to="/admin/profile"
          className="flex items-center p-2 rounded-md hover:bg-gray-700"
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
