import React from 'react';
import { Phone } from 'lucide-react';

function App() {
return (
    <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-12">
        {/* Decorative Header */}
        <div className="flex justify-center mb-8">
        <div className="w-48 h-8 flex items-center justify-center">
            <div className="text-amber-800">add the iamge</div>
        </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Book Your Flight
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8 leading-relaxed">
            Our flight booking service offers a seamless and hassle-free experience for travelers. We provide 
            access to a wide range of airlines, competitive fares, and flexible booking options to suit your needs. 
            Whether you're planning a business trip or a vacation, our platform ensures secure transactions, 
            instant confirmations, and 24/7 customer support. Book your flights with us today and enjoy a smooth 
            journey ahead.
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors">
            <Phone className="w-5 h-5 mr-2" />
            +971 58 542 5513
        </button>
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center mb-12">
        <span className="text-gray-400 text-lg">Add Your Airplane Image Here</span>
        </div>
    </div>
    </div>
);
}

export default App;