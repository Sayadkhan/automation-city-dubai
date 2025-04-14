import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import obj from "../../assets/img/Objects (2).png";
import obj1 from "../../assets/img/Objects (3).png";
import client from "../../assets/img/image 763.png";
import vector from "../../assets/img/Vector (2).png";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Love the simplicity of the service and prompt customer support.",
      name: "Renee Wells",
      role: "Service Provider, Dubai",
      image:client,
    },
    {
      quote: "Outstanding platform that transformed our business operations completely.",
      name: "John Smith",
      role: "Business Owner, London",
      image:"https://img.freepik.com/premium-photo/arab-dress-image-background-wallpaper_573563-7003.jpg?ga=GA1.1.1104231924.1739214727&semt=ais_hybrid"
    },
    {
      quote: "The best service we've ever used. Highly recommended to everyone!",
      name: "Sarah Johnson",
      role: "Entrepreneur, New York",
      image:client,
    },
    {
      quote: "Efficient and reliable - exactly what our company needed to grow.",
      name: "Michael Chen",
      role: "Startup Founder, Singapore",
      image:"https://img.freepik.com/free-photo/portrait-arabian-saudi-sheikh-young-male-model-smiling-pointing-choosing_155003-23535.jpg?ga=GA1.1.1104231924.1739214727&semt=ais_hybrid",
    },
    {
      quote: "Exceptional user experience with amazing support team behind.",
      name: "Emma Wilson",
      role: "CEO, Sydney",
      image:client,
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative flex px-4 sm:px-6 bg-right bg-cover bg-[#fdfaf5] py-12 sm:py-10 lg:py-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0  ">
        <img 
          src={obj1} 
          className="w-full h-full  " 
          alt="decorative element" 
        />
      </div>
      <div className="absolute top-0 right-0 ">
        <img 
          src={obj} 
          className="w-full h-full  " 
          alt="decorative element" 
        />
      </div>

      {/* Main Content Container */}
      <div className="bg-[#fdfaf5] z-30 rounded-lg p-6 sm:p-8 lg:p-12 text-center w-full max-w-2xl mx-auto">
        {/* Star Rating */}
        <div className="text-yellow-500 text-lg md:text-xl lg:text-2xl mb-2">
          ★★★★★
        </div>

        {/* Testimonial Quote */}
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          {testimonials[currentIndex].quote}
        </p>

        {/* Client Info and Navigation */}
        <div className="flex items-center justify-center mt-6 space-x-4 sm:space-x-6">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="p-2 sm:p-3 border rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft className="text-sm sm:text-base" />
          </button>

          {/* Client Details */}
          <div className="mx-2 sm:mx-4 text-center flex flex-col items-center">
            <img
              src={testimonials[currentIndex].image}
              alt="Client"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-2 sm:mb-3"
            />
            <h4 className="font-semibold text-gray-700 text-xs sm:text-sm md:text-base">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base">
              {testimonials[currentIndex].role}
            </p>
            <img 
              src={vector} 
              className="w-full h-12 sm:h-14 mt-2 sm:mt-4" 
              alt="decoration" 
            />
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="p-2 sm:p-3 border rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <FaArrowRight className="text-sm sm:text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;