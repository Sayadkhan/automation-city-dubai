import { MdArrowOutward } from "react-icons/md";
import img from "../../assets/img/Image (4).png"

const articles = [
    {
        title: "Summer in Dubai",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "20 Jan 2024",
        image: img,
        link: "#"
    },
    {
        title: "Explore through dream",
        description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        date: "18 Jan 2024",
        image: "https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.15752-9/477906027_671647908569279_2471638112607312985_n.png?stp=dst-png_s526x395&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=v_c5sDFmBWYQ7kNvgF-yr3V&_nc_oc=AdixA2p-N0Ens9YCvfK7bvnrjIRW64Su0nfzrR8cXtVS5ef2gv1nDt2yI9JTlmRtrPY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcgp17-1.fna&oh=03_Q7cD1wEoUaEDQeF6VBVggdHzRBAsQb_0_muqUMUsNDZauhrwoA&oe=6800A9C3",
        link: "#"
    },
    {
        title: "Cultural heritage UAE",
        description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
        date: "28 Jan 2024",
        image: "https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.15752-9/484293762_632933816026987_7376442568032100008_n.png?stp=dst-png_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xHX7_7wsKMEQ7kNvgG7pGkR&_nc_oc=AdheUtSCylrP2JP48Cu7lOx4USPX0Ehn-fzMM6hgPPBpf_qlj63LU5-CcMVUAb-QMXg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcgp17-1.fna&oh=03_Q7cD1wFFWOJLgciSaYapY6kl8-wtt-c54sIdcvEC4nPZ8iQQXA&oe=6800B9D1",
        link: "#"
    }
];

function ArticleCard({ title, description, date, image, link }) {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="object-cover w-full h-44 bg-gray-500" />
            <div className="p-4 space-y-2">
                <h2 className="md:text-xl text-lg font-bold">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{date}</span>
                    <a href={link} className="flex items-center gap-1 text-[#DC893F] hover:text-amber-600 text-sm">
                        Read more <MdArrowOutward />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function LatestWritings() {
    return (
        <section className="px-4 md:px-8 w-full max-w-screen-2xl mx-auto z-50 py-8 lg:my-14 lg:mb-20 sm:my-10 my-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-4">
                <div>
                    <h1 className="lg:text-2xl md:text-xl text-lg font-bold">Latest Writings</h1>
                    <p className="text-gray-800 my-3 lg:max-w-2xl max-w-md">
                        Discover the newest destinations, innovations, and resources from our team, dedicated to providing services in travel, tourism, and business licensing in the UAE.
                    </p>
                </div>
                <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-[#DC893F] text-white">
                    View all posts
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
        </section>
    );
}
