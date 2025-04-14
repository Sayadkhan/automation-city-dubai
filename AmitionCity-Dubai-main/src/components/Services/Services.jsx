import r from "../../assets/img/Rectangle 10.png";
import r1 from "../../assets/img/Rectangle 11.png";
import r2 from "../../assets/img/Rectangle 12.png";
import bg from "../../assets/img/Group 517.png"
import vector from "../../assets/img/Vector-1.png"

export default function Services() {
  const services = [
    {
      title: "Airlines Tickets",
      image: r1,
      alt: "Airplane flying over a city",
    },
    {
      title: "Tour Planner",
      image: r2,
      alt: "Illustration of Dubai skyline",
    },
    {
      title: "Business Setup Services",
      image: r,
      alt: "Business meeting with documents",
    },
  ];

  return (
    <div className="lg:my-20 sm:my-10 my-5 bg-[#fdfaf5]">
        <img src={vector} alt="" className="mx-auto mb-4 px-3 md:px-8" />
   

    <div  className="py-10 bg-cover md:px-5 px-3" style={{ backgroundImage: `url(${bg})` }}>
         <div className="px-6 text-center my-2 flex md:justify-between gap-1 md:flex-row flex-col  w-full max-w-screen-2xl  mx-auto">
                    
                    <h1 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 lg:text-3xl mb-2">
                    Well Planned Holidays & Fix Departures
                    </h1>
                    <button className="w-30 flex justify-end md:mx-0  mx-auto bg-[#DC893F] text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition-colors duration-300 text-sm md:text-base">
        See More
      </button>
                    
                  </div>
    <div className="flex md:flex-row flex-col gap-4 justify-center p-6  w-full max-w-screen-2xl  mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
        >
          <img
            src={service.image}
            alt={service.alt}
            className="w-full  object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/60"></div>
          {/* Text */}
          <div className="absolute left-0 bottom-0 w-full text-white  py-3 font-semibold px-2 text-start">
            {service.title} →
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}