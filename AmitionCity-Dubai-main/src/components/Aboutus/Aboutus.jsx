import SupportSection from '../SupportSection/SupportSection';
import about from "../../assets/img/About.png"
import decor from "../../assets/img/Vector-1.png"
import mission from "../../assets/img/mission.png"
import vission from "../../assets/img/Vission.png"
import quality from "../../assets/img/Quality.png"
import team1 from "../../assets/img/uncl1.png"
import team2 from "../../assets/img/uncle2.png"
import expert from "../../assets/img/expart.png"
import tailor from "../../assets/img/tailored.png"
import efficiency from "../../assets/img/efficiency.png"
import compliance  from "../../assets/img/compliance.png"

const AboutUs = () => {
    const teamMembers = [
        { name: 'MAHFUZ ALAM', role: 'CEO & FOUNDER', img: team1 },
        { name: 'ASHRAFUL ISLAM', role: 'DIRECTOR', img: team2 },
        { name: 'Sania Maqsod', role: 'SENIOR MANAGER', img: team1 },
        { name: 'SYED MANZUR AHMED', role: 'MANAGER', img: team2 },
        { name: 'MD ZONAYAT HOSSAIN', role: 'MARKETING SPECIALIST', img: team1 },
        { name: 'FAHTIMA BIN MANZUR', role: 'CUSTOMER SERVICES', img: team2 },
        { name: 'SONIA MAQSOOD', role: 'CUSTOMER SERVICES & ADMINISTRATIVE', img: team1 },
        { name: 'SYED MAHMUD', role: 'CUSTOMER SERVICES', img: team2 }
    ];

    const features = [
        {
            title: 'Expertise',
            img:expert ,
            description: 'Our skilled team provides expert support in business licensing, company formation, and trade license services, empowering your entrepreneurial path.'
        },
        {
            title: 'Tailored Solutions',
            img: tailor ,
            description: 'We tailor services to your unique goals, industry dynamics, and regulatory needs, ensuring personalized solutions for success.'
        },
        {
            title: 'Efficiency',
            img:  efficiency ,
            description: 'We fast-track business setup and license acquisition, saving you time and resources with our streamlined approach and proactive insights.'
        },
        {
            title: 'Compliance and Integrity',
            img: compliance ,
            description: 'We prioritize regulatory compliance and ethical practices, ensuring your business operates with integrity and transparency within legal bounds.'
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative py-16 bg-[#FDF7F2]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        {/* Decorative element */}

                        <div className="w-80 mx-auto">

                            <img src={decor} alt="" className="mx-auto px-3 md:px-8" />
                        </div>



                        <h1 className="text-4xl font-bold mb-4">
                            Unveiling Our Story and Mission
                        </h1>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            At Ambition City Travel Agency, we're dedicated to simplifying licensing for businesses. With a focus
                            on efficiency and innovation, our team is committed to providing tailored solutions that empower your
                            success.
                        </p>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="py-16 bg-[#FDF7F2]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-2 items-center">
                        <div className=" rounded-lg ">
                            {/* Dubai cityscape image placeholder */}
                            <img src={about} alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Ambition City Travel Agency</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    Create Clean, Peaceful Environment and Build Long term Relationship with Our Customers, By
                                    Understanding There Needs and Meetings Them With the Highest Level Of Integrity And
                                    Professionalism In The Travel & Tourism Industry.
                                </p>
                                <p className="text-gray-600">
                                    Ambition City Travel Agency Services is One Of The Fastest Growing companies In Dubai,
                                    UAE,With An Office Staffed By Highly Qualified And Trained Personal, Our Services Of Travel &
                                    Tourism & Business Setup Experience Across a Range Of Multinational Companies, Business Group
                                    And Travel & tourism In The UAE.
                                </p>
                                <p className="text-gray-600">
                                    All Our Staff Come from Travel and Tourism and Business Facility Management Backgrounds And
                                    Have Previously Worked For Many Multinational Travel Agency Companies In UAE.
                                </p>
                                <p className="text-gray-600">
                                    We are Committed To Providing High Quality, Value For Travel & tourism, & Professional Business
                                    Setup Services.
                                </p>
                                <p className="text-gray-600">
                                    New Innovation & Digitalization of Easy the Life Of Customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quality Policy Section */}
            <div className="py-16 bg-[#FDF7F2]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        {/* Decorative element */}
                        <div className="w-80 mx-auto">

                            <img src={decor} alt="" className="mx-auto px-3 md:px-8" />
                        </div>



                        <h2 className="text-3xl font-bold mb-4">Quality Policy</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            At Ambition City Travel Agency, excellence is our standard. With a carefully curated team dedicated to exceptional
                            service, we guarantee our clients a consistently superior experience.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <div className="flex items-start gap-4 mb-4 flex-col">
                                <div className="w-12 h-12 rounded-full bg-primary/10">
                                    {/* Mission icon placeholder */}
                                    <img src={mission} alt="" />
                                </div>
                                <h3 className="text-xl font-bold">Mission</h3>
                            </div>
                            <ul className="space-y-2 text-gray-600">
                                <li>• To Retain Consistency in Our High quality Travel & Business setup services.</li>
                                <li>• To Maintain Standards By Retailing Staff Knowledge & Experience.</li>
                                <li>• Resource Focus on Maintaining Travel &Tourism Standards.</li>
                                <li>• Maintaining Our Quality Growth Through Maintaining Excellence in Our Provision of Services and Competitive Pricing.</li>
                                <li>• Training and Development Of Staff Travel & Tourism in The Direction Of Company Growth And Customers Satisfactions.</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-start gap-4 mb-4 flex-col">
                                <div className="w-12 h-12 rounded-full bg-primary/10">
                                    {/* Vision icon placeholder */}
                                    <img src={vission} alt="" />
                                </div>
                                <h3 className="text-xl font-bold">Vision</h3>
                            </div>
                            <p className="text-gray-900">
                                Through A Commitment To Excellence And Continual Investment In Our People We
                                Seek To Become The Leading Brand Name With In The Travel & Tourism Industry
                                Nationwide.
                            </p>
                        </div>
                    </div>
                    <div className=" rounded-lg h-96">
                        {/* Shanghai skyline image placeholder */}
                        <img src={quality} alt="" />
                    </div>
                </div>
            </div>
            {/* Team Section */}
            <div className="py-16 bg-[#FDF7F2]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="w-80 mx-auto">

                        <img src={decor} alt="" className="mx-auto px-3 md:px-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-12">Our Team Member</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full ">
                                    {/* Team member photo placeholder */}
                                    <img src={member.img} alt="" />
                                </div>
                                <h3 className="font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-16  bg-[#FDF7F2]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-5 items-center justify-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                            <p className="text-gray-600 mb-6">
                                Experience simplicity with our streamlined licensing platform. Tailored
                                processes ensure hassle-free license acquisition, letting you focus on
                                your business.
                            </p>
                            <div className=" rounded-lg ">
                                {/* Business meeting image placeholder */}
                                <img src="https://www.shutterstock.com/image-photo/group-corporate-arab-businessmen-meeting-600nw-2422865751.jpg"
                                    alt="" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 items-center justify-center">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 mb-4">
                                        {/* Feature icon placeholder */}
                                         <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                                                      <img src={feature.img} alt="" />
                                                    </div>
                                    </div>
                                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SupportSection></SupportSection>
        </div>
    );
};

export default AboutUs;