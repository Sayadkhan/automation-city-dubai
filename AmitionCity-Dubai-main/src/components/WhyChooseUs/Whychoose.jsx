import { Expand } from 'lucide-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import expert from "../../assets/img/expart.png"
import tailor from "../../assets/img/tailored.png"
import efficiency from "../../assets/img/efficiency.png"
import compliance  from "../../assets/img/compliance.png"

function App() {
  return (
    <div className="container mx-auto px-4 py-12  z-50">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left side content */}
        <div className="sticky top-4">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-6">
            Experience simplicity with our streamlined licensing platform. Tailored
            processes ensure hassle-free license acquisition, letting you focus on
            your business.
          </p>
          <div className="h-[400px]  rounded-lg overflow-hidden">
            <img src="https://www.shutterstock.com/image-photo/group-corporate-arab-businessmen-meeting-600nw-2422865751.jpg" 
             alt="" />
          </div>
        </div>

        {/* Right side features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expertise */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <img src={expert} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expertise:</h3>
            <p className="text-gray-600">
              Our adept team provides expert support in business consulting, company formation,
              and trade license services, empowering your entrepreneurial path.
            </p>
          </div>

          {/* Tailored Solutions */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
            <img src={tailor} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tailored Solutions:</h3>
            <p className="text-gray-600">
              We tailor services to your unique goals, industry dynamics, and regulatory needs,
              ensuring personalized solutions for success.
            </p>
          </div>

          {/* Efficiency */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
            <img src={efficiency} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
            <p className="text-gray-600">
              We fast-track business setup and license acquisition, saving you time and resources
              with our streamlined approach and proactive insights.
            </p>
          </div>

          {/* Compliance and Integrity */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
            <img src={compliance } alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compliance and Integrity:</h3>
            <p className="text-gray-600">
              We prioritize regulatory compliance and ethical practices, ensuring your business
              operates with integrity and transparency within legal bounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App