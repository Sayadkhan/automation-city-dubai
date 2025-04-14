import React from "react";
import g1 from "../../assets/img/Image (1).png";
import g from "../../assets/img/Image (2).png";
import g2 from "../../assets/img/museum.png";
import vector from "../../assets/img/Vector-1.png"
import img5 from "../../assets/img/image5.png"
import img3 from "../../assets/img/img3.png"

const PlacesGallery = () => {
  return (
    <div className="flex flex-col items-center py-8 md:px-5 px-3 bg-[#fdfaf5]">
 <div className="mx-auto max-w-2xl text-center my-2">
            <img src={vector} alt="" className="mx-auto mb-2 px-3 md:px-8" />
            <h1 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 lg:text-3xl mb-2">
            Best Places With Best Moments
            </h1>
            
          </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-full max-w-screen-2xl mx-auto justify-center items-center">
        {/* First Image */}
        <div className="relative overflow-hidden rounded-lg mx-auto flex justify-center items-center ">
          <img
            src={g1}
            alt="Arab Gulf"
            className="w-full object-fill shadow-lg h-48 md:h-56 lg:h-60 mx-auto flex justify-center items-center"
          />
        </div>

        {/* Middle Image - spans 2 columns on md and larger */}
        <div className=" lg:col-span-2 relative overflow-hidden rounded-lg mx-auto flex justify-center items-center">
          <img
            src={g}
            alt="Sharjah Mosque"
            className="w-full object-fill shadow-lg h-48 md:h-56 lg:h-60"
          />
        </div>

        {/* Third Image */}
        <div className="relative overflow-hidden rounded-lg mx-auto flex justify-center items-center">
          <img
            src={g2}
            alt="Museum of The Future"
            className="w-full object-fill shadow-lg h-48 md:h-56 lg:h-60"
          />
        </div>

                {/* First Image */}
                <div className="relative overflow-hidden rounded-lg mx-auto flex justify-center items-center ">
          <img
            src={g2}
            alt="Arab Gulf"
            className="w-full object-fill shadow-lg h-48 md:h-56 lg:h-60 mx-auto flex justify-center items-center"
          />
        </div>

        {/* Middle Image - spans 2 columns on md and larger */}
        <div className=" lg:col-span-2 relative overflow-hidden rounded-lg mx-auto flex justify-center items-center">
          <img
            src={img5}
            alt="Sharjah Mosque"
            className="w-full object-fill shadow-lg h-48 md:h-56 lg:h-60"
          />
        </div>

        {/* Third Image */}
        <div className="relative overflow-hidden rounded-lg mx-auto flex justify-center items-center">
          <img
            src={img3}
            alt="Museum of The Future"
            className="w-full object-fill shadow-lg h-48 md:h-56 lg:h-60"
          />
        </div>
      </div>

      <button className="mt-6 bg-[#DC893F] text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition-colors duration-300 text-sm md:text-base">
        See More
      </button>
    </div>
  );
};

export default PlacesGallery;