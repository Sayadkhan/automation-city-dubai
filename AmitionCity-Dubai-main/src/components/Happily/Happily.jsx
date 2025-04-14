import React from "react";
import Whatsapp from "../../assets/img/Group 496.png";
import obj4 from "../../assets/img/Objects (3).png";
import bg from "../../assets/img/contact bg.png";

const Happily = () => {
  return (
    <div className="bg-[#fdfaf5] w-full max-w-screen-2xl mx-auto relative my-5 sm:my-10 lg:my-20">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 z-0">
        <img src={obj4} className="w-1/2" alt="decorative element" />
      </div>

      <div className="flex md:flex-row flex-col text-black px-4 mx-auto items-center justify-between py-10 gap-4">
        {/* Left Section */}
        <div className="p-4 flex-1 z-50">
          <div className="mx-auto flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-black mb-2">
              Happily providing services to our customers
            </h2>

            <p className="text-black mb-4">
              Everything you need to enjoy luxurious tour and do business in Dubai.
            </p>

            {/* ✅ WhatsApp Button (Now Working Correctly) */}
            <a
              href="https://wa.me/971581425513"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#4BC45C] rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#DC893F] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-black text-white flex gap-1">
                <img src={Whatsapp} alt="WhatsApp" className="w-5 h-5" /> +971 58 142 5513
              </span>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end">
          <div
            className="xl:bg-contain bg-cover bg-center bg-no-repeat p-4"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="z-50 mx-auto">
              <div className="grid grid-cols-2 lg:gap-8 sm:gap-5 gap-2">
                {/* Stat Item 1 */}
                <div className="md:p-3 p-1 rounded-lg transition-all duration-200">
                  <p className="lg:text-2xl md:text-lg text-base font-bold text-black mb-2">2000+</p>
                  <p className="text-gray-600 font-medium">Happy customers</p>
                </div>

                {/* Stat Item 2 */}
                <div className="md:p-3 p-1 rounded-lg transition-all duration-200">
                  <p className="lg:text-2xl md:text-lg text-base font-bold text-black mb-2">15%</p>
                  <p className="text-gray-600 font-medium">Less service fee than others</p>
                </div>

                {/* Stat Item 3 */}
                <div className="md:p-3 p-1 rounded-lg transition-all duration-200">
                  <p className="lg:text-2xl md:text-lg text-base font-bold text-black mb-2">40+</p>
                  <p className="text-gray-600 font-medium">Awarded Customers</p>
                </div>

                {/* Stat Item 4 */}
                <div className="md:p-3 p-1 rounded-lg transition-all duration-200">
                  <p className="lg:text-2xl md:text-lg text-base font-bold text-black mb-2">135+</p>
                  <p className="text-gray-600 font-medium">Business license registrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* Closing div for flex container */}
    </div>
  );
};

export default Happily;
