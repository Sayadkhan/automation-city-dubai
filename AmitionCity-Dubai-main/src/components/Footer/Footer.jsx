import React, { useEffect, useState } from "react";
import Whatsapp from "../../assets/img/Group 496.png";
import footer from "../../assets/img/footer.png";
import axios from "axios";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialIcons = [
    { name: "instagram", icon: "../assets/img/Group 1.png" },
    { name: "facebook", icon: "../assets/img/Group 2.png" },
    { name: "tiktok", icon: "../assets/img/Group 3.png" },
    { name: "twitter", icon: "../assets/img/Group 4.png" },
  ];

  const navigation = {
    explore: {
      title: "Explore",
      links: [
        { name: "Destinations", href: "#" },
        { name: "Attractions", href: "#" },
        { name: "Experiences", href: "#" },
        { name: "Travel Tips", href: "#" },
      ],
    },
    about: {
      title: "About Us",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Mission & Vision", href: "#" },
        { name: "Team", href: "#" },
        { name: "Testimonials", href: "#" },
      ],
    },
    support: {
      title: "Customer Support",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
    connect: {
      title: "Stay Connected",
      links: [
        { name: "Newsletter Signup", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Reviews", href: "#" },
        { name: "Special Offers", href: "#" },
        { name: "Partner Programs", href: "#" },
      ],
    },
  };

  const [socialLinks, setSocialLinks] = useState([]);

  const [message, setMessage] = useState("");

  // Fetch all social media links from the backend
  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/social/all"
        );
        setSocialLinks(response.data); // Set fetched data
      } catch (error) {
        setMessage("Error fetching social media links.");
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <footer
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${footer})` }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Let's get started on something great
          </h2>
          <p className="text-gray-600">
            Embark on Unforgettable Journeys with Our Travel and Tourism Experts
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.values(navigation).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => window.open("https://wa.me/971581425513", "_blank")}
            className="relative flex items-center gap-2 px-6 py-2 font-medium text-white bg-green-500 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden group hover:scale-105 hover:shadow-2xl hover:bg-green-700"
          >
            {/* Floating Effect */}
            <span className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500 ease-in-out"></span>

            {/* WhatsApp Icon */}
            <img
              src={Whatsapp}
              alt="WhatsApp icon"
              className="w-5 h-5 relative z-10 transition-transform duration-300 ease-out group-hover:scale-110"
            />

            {/* Text with Soft Color Transition */}
            <span className="relative z-10 transition-all duration-300 ease-in-out">
              Chat Now
            </span>
          </button>

          <button className="relative flex items-center gap-2 px-6 py-3 font-medium text-white bg-[#DC893F] rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden group hover:scale-105 hover:shadow-2xl hover:bg-[#FF8800]">
            {/* Floating Effect */}
            <span className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500 ease-in-out"></span>

            {/* Text with Soft Color Transition */}
            <span className="relative z-10 transition-all duration-300 ease-in-out">
              Get Started
            </span>
          </button>
        </div>

        {/* Social Links */}
        {/* <div className="flex justify-center gap-6 mb-8">
            {['instagram', 'facebook', 'tiktok', 'twitter'].map((platform) => (
              <a
                key={platform}
                href={`#${platform}`}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >

                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              </a>
            ))}
          </div> */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <img
                src={`http://localhost:5000${social.iconUrl}`}
                alt={social.name}
                className="w-5 h-5 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600">
          <p>
            © {currentYear} Ambition Travel & Tourism UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
