import vector from "../../assets/img/Vector-1.png"
import fea from "../../assets/img/Vector.png"
import group from "../../assets/img/Group.png"
import group500 from "../../assets/img/Group 500.png"
export default function AmbitionCityServices() {
    return (
      <div className="bg-[#fdfaf5] lg:my-20 sm:my-10 my-5 w-full max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <div className="mx-auto  px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center ">
            <img src={vector} alt="" className="mx-auto mb-2" />
            <h1 className="sm:text-2xl text-lg font-bold tracking-tight text-gray-900 lg:text-3xl">
              Seamless Travel and Licensing with Ambition City
            </h1>
            <p className="mt-6  leading-8 text-gray-800">
              Ambition City revolutionizes travel and licensing with its seamless integration platform, 
              eliminating paperwork and streamlining processes for hassle-free experiences.
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="mx-auto mt-5 ">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12 text-center">
                <div className="text-center mx-auto space-y-2">
                 <img src={fea} alt="" className="mx-auto md:w-16 w-10" />
                 
                  <p className="md:text-xl font-bold text-md">Service guaranteed</p>
                  <p>
                Whether you have a team of 2 or 200, our shared team inboxes keep everyone 
                on the same page and in the loop. </p>
              
                </div>

                <div className="text-center mx-auto space-y-2">
                 <img src={group} alt="" className="mx-auto  md:w-16 w-10" />
                 
                  <p className="md:text-xl font-bold text-md">Cheaper air tickets</p>
                
              <p>  Measure what matters with Untitled's easy-to-use reports. You can filter, 
              export, and drill down on the data in a couple clicks. </p>
                </div>


                <div className="text-center mx-auto space-y-2">
                 <img src={group500} alt="" className="mx-auto  md:w-16 w-10" />
                 
                  <p className="md:text-xl font-bold text-md">Confirmed business licences</p>
                
              <p>  Explore 100+ integrations that make your day-to-day workflow more efficient 
              and familiar. Plus, our extensive developer tools.
                 </p>
                </div>
           
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // FeatureCard.jsx (JSX ফাইলের জন্য সংশোধিত)
  function FeatureCard({ title, children }) {
    return (
      <div className="relative flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="mt-4 border-b border-gray-200 pb-6" aria-hidden="true" />
        <p className="mt-6 flex-1 text-base leading-7 text-gray-600">
          {children}
        </p>
      </div>
    );
  }
  