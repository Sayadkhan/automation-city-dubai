import React from 'react';
import img from "../../assets/img/Group 500.png";
import img1 from "../../assets/img/Group 502.png";
import img2 from "../../assets/img/Group503.png";
import img3 from "../../assets/img/Group504.png";
import img4 from "../../assets/img/Group505.png";
import img5 from "../../assets/img/Group506.png";
import img6 from "../../assets/img/Group507.png";
import img7 from "../../assets/img/Group509.png";

function App() {
const services = [
    {
    title: 'Business License Setup',
    image: img ,
    description: 'Setting up a business license involves registering your business, meeting legal requirements, and obtaining necessary permits for operation.',
    },
    {
    title: 'Visit Visa Services',
    image: img1 ,
    description: 'Quick and reliable Dubai visit visa processing for tourists and short-term visitors.',
    },
    {
    title: 'Investor, Partner & Family Sponsor Visa',
    image: img2 ,
    description: 'Assistance in obtaining investor, partner, and family sponsorship visas in Dubai.',
    },
    {
    title: 'PRO Services',
    image: img3 ,
    description: 'Expert PRO services for government document processing, approvals, and business compliance.',
    },
    {
    title: 'Legal Translation',
    image: img4 ,
    description: 'Certified legal translation services for official documents in multiple languages.',
    },
    {
    title: 'Amer Center & Tasheel',
    image: img5 ,
    description: 'Government transaction services, visa processing, and labor-related assistance through Amer and Tasheel.',
    },
    {
    title: 'Medical & Emirates ID Typing',
    image: img6 ,
    description: 'Fast medical test and Emirates ID typing services for visa applications.',
    },
    {
    title: 'Dubai Municipality & RTA Online',
    image: img7 ,
    description: 'Online assistance with Dubai Municipality and RTA-related services and approvals.',
    },
];

return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Header with decorative element */}
    <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
        <div className="h-px w-20 bg-orange-400"></div>
        <div className="mx-4 text-orange-400">❖</div>
        <div className="h-px w-20 bg-orange-400"></div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
    </div>

      {/* Services Grid */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            {/* Empty space for icon */}
            <div className="w-12 h-12 mb-4  rounded-lg">
              <img src={service.image} alt="" />
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
            {service.description}
            </p>
        </div>
        ))}
    </div>

      {/* Show More Button */}
    <div className="text-center mt-12">
        <button className="bg-orange-400 text-white px-8 py-3 rounded-md hover:bg-orange-500 transition-colors">
        Show More
        </button>
    </div>
    </div>
);
}

export default App;