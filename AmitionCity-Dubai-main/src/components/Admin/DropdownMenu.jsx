import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Main Dropdown Component
const DropdownMenu = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200 focus:outline-none focus:bg-gray-700" // Added focus state
      >
        <div className="flex items-center space-x-3">
          {icon || <span className="w-5 h-5"></span>} {/* Ensure icon space */}
          <span>{title}</span>
        </div>
        {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </button>

      {/* Dropdown Content - Uses Tailwind for smooth transition */}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`} // Smooth height transition
      >
        <div className="mt-1 pl-7 pr-2 py-1 space-y-1 bg-gray-750 rounded-md">
          {" "}
          {/* Indented slightly more */}
          {children}
        </div>
      </div>
    </div>
  );
};

// Helper component for sub-menu items
export const SubMenuItem = ({ children, href = "#" }) => {
  return (
    <a
      href={href}
      className="block px-4 py-1.5 text-xs+ text-gray-400 hover:bg-gray-600 hover:text-white rounded-md transition-colors duration-150" // Slightly smaller text
    >
      {children}
    </a>
  );
};

export default DropdownMenu;
