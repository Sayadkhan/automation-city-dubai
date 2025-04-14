import React from 'react';
import SupportSection from "../SupportSection/SupportSection"
import PlacesGallery from "../PlacesGallery/PlacesGallery"
import vector from "../../assets/img/Vector-1.png"
import expert from "../../assets/img/expart.png"
import tailor from "../../assets/img/tailored.png"
import efficiency from "../../assets/img/efficiency.png"

function App() {
    return (
        <div className="min-h-screen bg-white  ">
            {/* Hero Section */}
            <section className="relative px-3 md:px-8  max-w-screen-2xl w-full  mx-auto">


                {/* Overlay text */}
                <div className="flex flex-col items-center justify-center text-center px-4 my-4">
                    {/* Decorative element placeholder */}
                    <div className="w-80 mx-auto my-2">

                        <img src={vector} alt="" className="mx-auto px-3 md:px-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Tour Plan With Us
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                        At Ambition City Travel Agency, we're dedicated to simplifying licensing for businesses. With a focus
                        on efficiency and innovation, our team is committed to providing tailored solutions that empower your success
                    </p>
                </div>

                {/* Image placeholder */}
                <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">

                    <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/cc/b1/1b.jpg"
                        alt="" className='w-full h-[500px]' />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <img src={efficiency} alt="" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Customized Tours</h3>
                            <p className="text-gray-600">Personalized itineraries tailored to your preferences</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <img src={expert } alt="" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
                            <p className="text-gray-600">Professional and knowledgeable tour guides</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <img src={tailor } alt="" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                            <p className="text-gray-600">Round-the-clock assistance for your peace of mind</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Support Section */}
            <PlacesGallery></PlacesGallery>
            <SupportSection></SupportSection>
        </div>
    );
}

export default App;