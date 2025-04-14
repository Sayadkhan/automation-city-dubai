import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import r from "../../assets/img/Rectangle 6.png";
import r1 from "../../assets/img/Rectangle 75.png";
import r2 from "../../assets/img/Rectangle 6.png";

const Subheader = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownRef = useRef(null);

  const services = [
    {
      title: "Airlines Tickets",
      image: r1,
      alt: "Airplane flying over a city",
      link: "/airline-tickets",
    },
    {
      title: "Tour Planner",
      image: r2,
      alt: "Illustration of Dubai skyline",
      link: "/tour-planner",
    },
    {
      title: "Business Setup Services",
      image: r,
      alt: "Business meeting with documents",
      link: "/business-setup",
      dropdown: [
        { name: "Company Registration", link: "/business-setup/company-registration" },
        { name: "Trade License", link: "/business-setup/trade-license" },
        { name: "VAT Registration", link: "/business-setup/vat-registration" },
      ],
    },
  ];

  // Toggle dropdown when clicking on a service
  const handleDropdownToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle active index
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveIndex(null); // Close dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 bg-[#fdfaf5] items-center justify-center mx-auto">
      <div className="flex md:flex-row flex-col gap-2 w-full mx-auto" ref={dropdownRef}>
        {services.map((service, index) => (
          <div key={index} className="relative mx-auto">
            {/* If the service has a dropdown, toggle dropdown visibility */}
            {service.dropdown ? (
              <div
                className="cursor-pointer"
                onClick={() => handleDropdownToggle(index)} // Toggle dropdown on click
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-50 h-18 lg:w-72 lg:h-24 rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
                <div className="absolute left-0 bottom-0 w-full text-white py-1 font-semibold px-2 text-start text-xs">
                  {service.title} →
                </div>
              </div>
            ) : (
              <NavLink to={service.link} className="block">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-50 h-18 lg:w-72 lg:h-24 rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
                <div className="absolute left-0 bottom-0 w-full text-white py-1 font-semibold px-2 text-start text-xs">
                  {service.title} →
                </div>
              </NavLink>
            )}

            {/* Show the dropdown if this service is active */}
            {service.dropdown && activeIndex === index && (
              <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg p-2 z-50">
                {service.dropdown.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Updated Many More Button */}
      <NavLink
        to="/service"
        className="relative inline-flex items-center justify-center px-6 py-2 font-medium text-white transition-all duration-500 bg-[#DC893F] rounded-lg shadow-md overflow-hidden group mt-4"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#E8A04D] to-[#D67B2C] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
        <span className="absolute inset-0 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
        <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:tracking-widest group-hover:font-semibold">
          Many More →
        </span>
      </NavLink>
    </div>
  );
};

export default Subheader;
