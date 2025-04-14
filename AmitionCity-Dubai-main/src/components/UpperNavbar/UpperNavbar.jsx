import React from 'react';
import logo from "../../assets/img/logo 1.png";
import { BsWhatsapp } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";

const UpperNavbar = () => {
    return (
        <div className='bg-[#fdfaf5] shadow-md border-b border-b-[#D0D5DD]'>
        <div className="w-full  md:px-5  max-w-screen-2xl mx-auto  py-3 px-3 sm:py-4 sm:px-6 grid grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-between ">
            {/* Logo Section */}
            <div className="flex items-center">
                <img src={logo} alt="Ambition Logo" className="w-3/5 sm:w-2/5 md:1/3 xl:w-1/4" />
            </div>

            {/* Contact Info */}
            <div className="flex justify-center items-center space-x-1 sm:space-x-2 text-gray-700 text-xs sm:text-sm md:text-base">
                <TbPhoneCall className="text-gray-600 text-sm sm:text-base md:text-lg" />
                <span className="font-medium">+971 58 142 5513</span>
            </div>

<div className='flex justify-end'>
            {/* WhatsApp Contact Button */}
            <a
            href="https://wa.me/971581425513"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 font-medium transition-all bg-[#4BC45C] rounded-lg shadow-lg text-white text-xs sm:text-sm group overflow-hidden"
        >
            {/* Background Hover Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#4BC45C] to-[#FF8800] transition-all duration-300 opacity-0 group-hover:opacity-100"></span>

            {/* Inner Glow Effect */}
            <span className="absolute inset-0 w-full h-full bg-[#FF8800] opacity-0 group-hover:opacity-20 rounded-lg transition duration-300"></span>

            {/* Floating Animation */}
            <span className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-[#DC893F] rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></span>

            {/* WhatsApp Icon + Text */}
            <span className="relative flex items-center gap-1 transition-all duration-200 transform group-hover:scale-105">
                <BsWhatsapp className="text-base sm:text-lg" /> Contact Us
            </span>
        </a>
            </div>
        </div>
        </div>
    );
};

export default UpperNavbar;
