import React, { useState } from 'react'

const ContactUs = () => {
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    services: []
})

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
}

return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
    <div className="text-center mb-12">
        <p className="text-gray-600">Contact us</p>
        <h1 className="text-4xl font-bold mt-2 mb-4">We'd love to hear from you</h1>
        <p className="text-gray-600">We have offices and teams all around the world.</p>
    </div>

      {/* Map Section */}
    <div className="mb-16 relative">
        <div className="bg-gray-100 h-[400px] w-full rounded-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-2">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 630 315'%3E%3Cpath fill='%23EF3340' d='M0 0h630v105H0z'/%3E%3Cpath fill='%23FFF' d='M0 105h630v105H0z'/%3E%3Cpath fill='%23000' d='M0 210h630v105H0z'/%3E%3C/svg%3E" 
                alt="UAE Flag" 
                className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold">UAE</span>
        </div>
        <p className="text-sm text-gray-600">
            Arzoo Building, Office # 302, Al Twar, Near Al Qusais<br />
            Metro Station, Dubai, UAE.
        </p>
        </div>
    </div>

      {/* Contact Info Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
        <h3 className="font-semibold mb-2">Support</h3>
        <p className="text-gray-600 mb-2">Our friendly team is here to help.</p>
        <a href="mailto:support@untitledui.com" className="text-primary">support@untitledui.com</a>
        </div>
        <div className="text-center">
        <h3 className="font-semibold mb-2">Sales</h3>
        <p className="text-gray-600 mb-2">Questions or queries? Get in touch!</p>
        <a href="mailto:sales@untitledui.com" className="text-primary">sales@untitledui.com</a>
        </div>
        <div className="text-center">
        <h3 className="font-semibold mb-2">Phone</h3>
        <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm.</p>
        <a href="tel:+1(555)000-0000" className="text-primary">+1 (555) 000-0000</a>
        </div>
    </div>

      {/* Contact Form Section */}
    <div className="grid md:grid-cols-2 gap-8">
        <div>
        <h2 className="text-3xl font-bold mb-4">Let's level up your brand, together</h2>
        <p className="text-gray-600 mb-8">You can reach us anytime via hi@untitledui.com</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
            </div>
            </div>
            
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
            <div className="flex">
                <select className="px-4 py-2 border border-gray-300 rounded-l-lg border-r-0">
                <option>US</option>
                </select>
                <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-primary focus:border-primary"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
            </div>
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
                placeholder="Leave us a message..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Services</label>
            <div className="grid grid-cols-2 gap-4">
                {['Visa Process', 'Tour Plan', 'Business license', 'Umrah Package', 'Air Ticket', 'Other'].map((service) => (
                <label key={service} className="flex items-center space-x-2">
                    <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    onChange={(e) => {
                        const services = e.target.checked
                        ? [...formData.services, service]
                        : formData.services.filter(s => s !== service)
                        setFormData({...formData, services})
                    }}
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                </label>
                ))}
            </div>
            </div>

            <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
            >
            Submit Message
            </button>
        </form>
        </div>
        
        <div className="bg-gray-100 rounded-lg"></div>
    </div>
    </div>
)
}

export default ContactUs