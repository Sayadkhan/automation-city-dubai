import React from 'react'
import Why from "../WhyChooseUs/Whychoose"
import obj1 from "../../assets/img/Objects (1).png"
import obj4 from "../../assets/img/Objects (4).png"

const BusinessTrade = () => {
return (
    <div className="relative min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      {/* Background Image Placeholders */}
   
     <div className="absolute top-0 left-0 rounded-br-[100px] z-0">
        <img 
          src={obj1} 
          className="w-full h-full  " 
          alt="decorative element" 
        />
      </div>
      <div className="absolute bottom-0 right-0 rounded-tl-[100px] z-0 ">
        <img 
          src={obj4} 
          className="w-full h-full  " 
          alt="decorative element" 
        />
      </div>
   

      {/* Content Container */}
    <div className="relative max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 z-50">
        <h1 className="text-4xl font-bold mb-4">Business Startup, Trade License</h1>
        <p className="text-gray-600 mx-auto">
            Ready to bring your business idea to life? Our comprehensive solutions with seamless startup 
            and trade license services in Dubai will get you covered. From formation to licensing, we provide the 
            expertise to launch your venture confidently.
        </p>
        </div>

        {/* Services Sections */}
        <div className="grid gap-16 z-50">
          {/* Business Startup Services */}
        <section className="text-center">
            <h2 className="text-2xl font-bold mb-8">Business Startup Services:</h2>
            <div className="space-y-8">
            <div>
                <h3 className="text-xl font-semibold mb-2">1. Company Formation:</h3>
                <p className="text-gray-600">
                Whether you're establishing a mainland company, setting up in a free zone, or exploring offshore 
                options, we streamline the company formation process from start to finish. From selecting the 
                right legal structure to preparing documentation and obtaining approvals, we ensure a smooth and 
                efficient setup.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">2. Business Planning:</h3>
                <p className="text-gray-600">
                A solid business plan is essential for guiding your startup journey and securing funding. Our 
                experts assist you in developing a comprehensive business plan that outlines your objectives, 
                target market, financial projections, and growth strategies, setting the foundation for success.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">3. Market Research:</h3>
                <p className="text-gray-600">
                Understanding the competitive landscape and market dynamics is crucial for positioning your 
                business for success. We conduct in-depth market research to identify opportunities, assess 
                demand, analyze competitors, and provide insights to help you make informed decisions in your 
                industry.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">4. Financial Management:</h3>
                <p className="text-gray-600">
                Managing finances effectively is key to sustaining and growing your business. Our financial 
                experts provide guidance on budgeting, cash flow management, tax planning, and other financial 
                aspects to ensure your business maintains strong fiscal health.
                </p>
            </div>
            </div>
        </section>

          {/* Trade License Section */}
        <section className="text-center">
            <h2 className="text-2xl font-bold mb-8">Trade License Acquisition:</h2>
            <p className="text-gray-600 mb-8">
            Securing the appropriate trade license is essential for operating your business legally in Dubai. Our 
            trade license services simplify the process, ensuring compliance with regulatory requirements and 
            enabling you to focus on building your business.
            </p>
            <p className="font-semibold mb-6">We offer:</p>
            <div className="space-y-8">
            <div>
                <h3 className="text-xl font-semibold mb-2">1. License Consultation:</h3>
                <p className="text-gray-600">
                Our consultants assess your business activities and requirements to determine the most suitable 
                trade license category and jurisdiction. Whether you need a commercial, professional, industrial, or 
                tourism license, we guide you through the selection process.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">2. Documentation Assistance:</h3>
                <p className="text-gray-600">
                We assist you in preparing and collating the necessary documentation, including application forms, 
                business plans, lease agreements, and other supporting documents required for trade license 
                issuance.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">3. Application Processing:</h3>
                <p className="text-gray-600">
                Leveraging our strong relationships with regulatory authorities and government agencies, we 
                expedite the trade license application process, minimizing delays and ensuring prompt issuance of 
                your license.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">4. Renewal and Compliance:</h3>
                <p className="text-gray-600">
                We provide ongoing support for trade license renewal, ensuring that your business remains 
                compliant with regulatory requirements. Our team monitors renewal deadlines, assists with 
                documentation renewal, and addresses any compliance issues to ensure uninterrupted operations.
                </p>
            </div>
            </div>
        </section>
        </div>
    </div>
    <Why></Why>
    </div>
)
}

export default BusinessTrade