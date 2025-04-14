import React from "react";
import { FiPhone } from "react-icons/fi"; // ✅ PhoneIcon import fixed
import freezone from "../../assets/img/freezone.png"
import ifza from "../../assets/img/IFZA.png"
import DAFZA from "../../assets/img/DAFZA.png"

const Freezone = () => {
    const benefits = [
        "100% Foreign Ownership",
        "Have Tax Benefits",
        "Easy Company Set Up",
        "Full Repatriation of Profits",
        "No Customs Duties",
        "World-Class Infrastructure"
    ];

    const ifzaLicenses = [
        "Commercial License",
        "Service License",
        "Industrial License",
        "Holding License"
    ];

    const dafzaLicenses = [
        "Trade License",
        "Service License",
        "Industrial License",
        "General Trading License"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative py-16 bg-[#FDF7F2]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        {/* Decorative element */}
                        <div className="flex justify-center mb-8">
                            <div className="w-48 h-8 bg-contain bg-no-repeat bg-center">
                                {/* Ornamental image placeholder */}
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold mb-4">
                            Choose Free Zone Business Set up
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            A Free Zone in the UAE is a special economic area where businesses can operate with special
                            regulations and benefits. These zones are designed to attract foreign investment and promote
                            economic growth.
                        </p>

                        <a
                            href="tel:+971581425513"
                            className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
                        >
                            <FiPhone className="w-5 h-5 mr-2" /> {/* ✅ Fixed PhoneIcon */}
                            +971 58 142 5513
                        </a>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-16 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Key Benefits of Free Zones</h2>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-lg h-96">
                       <img src={freezone} alt="" />
                    </div>
                </div>
            </div>

            {/* IFZA Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg h-96">
                        <img src={ifza} alt="" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                IFZA (International Free Zone Authority) - UAE
                            </h2>
                            <p className="text-gray-600 mb-6">
                                The International Free Zone Authority (IFZA) is one of the most popular Free Zones in Dubai,
                                known for its cost-effective business setup solutions and flexible license options. It is
                                located in Dubai Silicon Oasis (DSO) and is ideal for entrepreneurs, startups, and
                                international businesses.
                            </p>
                            <h3 className="text-xl font-semibold mb-4">Types of Business License:</h3>
                            <ul className="space-y-2">
                                {ifzaLicenses.map((license, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="text-primary">{index + 1}.</span>
                                        <span>{license}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* DAFZA Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                DAFZA (Dubai Airport Free Zone Authority) - UAE
                            </h2>
                            <p className="text-gray-600 mb-6">
                                The Dubai Airport Free Zone Authority (DAFZA) is one of the leading Free Zones in the UAE,
                                strategically located next to Dubai International Airport (DXB). It is ideal for businesses
                                involved in logistics, aviation, trading, technology, and finance due to its prime location
                                and world-class infrastructure.
                            </p>
                            <h3 className="text-xl font-semibold mb-4">Types of Business License:</h3>
                            <ul className="space-y-2">
                                {dafzaLicenses.map((license, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="text-primary">{index + 1}.</span>
                                        <span>{license}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-8 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                                Show More
                            </button>
                        </div>
                        <div className="bg-gray-200 rounded-lg h-96">
                            {/* DAFZA building image placeholder */}
                            <img src={DAFZA} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freezone;
