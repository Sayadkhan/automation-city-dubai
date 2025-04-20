import { MdArrowOutward } from "react-icons/md";
import img from "../../assets/img/Image (4).png";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";

const articles = [
  {
    title: "Summer in Dubai",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "20 Jan 2024",
    image: img,
    link: "#",
  },
  {
    title: "Explore through dream",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    date: "18 Jan 2024",
    image: img3,
    link: "#",
  },
  {
    title: "Cultural heritage UAE",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    date: "28 Jan 2024",
    image: img2,
    link: "#",
  },
];

function ArticleCard({ title, description, date, image, link }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-44 bg-gray-500"
      />
      <div className="p-4 space-y-2">
        <h2 className="md:text-xl text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <a
            href={link}
            className="flex items-center gap-1 text-[#DC893F] hover:text-amber-600 text-sm"
          >
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
          <h1 className="lg:text-2xl md:text-xl text-lg font-bold">
            Latest Writings
          </h1>
          <p className="text-gray-800 my-3 lg:max-w-2xl max-w-md">
            Discover the newest destinations, innovations, and resources from
            our team, dedicated to providing services in travel, tourism, and
            business licensing in the UAE.
          </p>
        </div>
        <button
          type="button"
          className="px-6 py-3 text-sm rounded-md hover:underline bg-[#DC893F] text-white"
        >
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
