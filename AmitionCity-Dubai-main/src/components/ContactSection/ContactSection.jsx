import bg from "../../assets/img/contact bg.png";
import { PhoneCall, MapPin } from "lucide-react";
import vector from "../../assets/img/Vector (2).png"

export default function ContactSection() {
  return (
    <section 
      className=" bg-cover bg-center bg-no-repeat  my-5 sm:my-10 lg:my-20     w-full max-w-screen-2xl mx-auto " 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto h-full flex flex-col justify-center py-16 md:py-20 w-full max-w-screen-2xl px-5 md:px-16 ">
        <div className="mx-auto flex flex-col justify-center mb-5 w-full max-w-4xl">
          <img 
            src={vector} 
            alt="" 
            className="mx-auto mb-4 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]" 
          />
          <h2 className="font-semibold text-[#AC6B31] text-center text-base sm:text-lg ">
            Contact us
          </h2>
          <div className="space-y-2 flex flex-col justify-center mx-auto text-center px-2">
            <h3 className=" font-bold text-gray-900 text-lg sm:text-xl lg:text-2xl">
              Chat to our friendly team
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We'd love to hear from you! Please get in touch.
            </p>
          </div>
        </div>
        
        <div className="rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl mx-auto my-6 px-4 sm:px-0">
          <div className="flex items-center gap-1.5 p-3 sm:p-4 w-full md:w-auto">
            <PhoneCall className="text-[#DC893F] flex-shrink-0" size={28} />
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
                Talk to our Expert team
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                +971 58 142 5513
              </p>
            </div>
          </div>
          
          <div className="flex items-center  gap-1.5  p-3 sm:p-4 w-full md:w-auto">
            <MapPin className="text-[#DC893F] flex-shrink-0" size={28} />
            <div className="text-left">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
                Dubai
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-72">
                100 Mysere Street, Fatah Province, VIC 3000 UAE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}