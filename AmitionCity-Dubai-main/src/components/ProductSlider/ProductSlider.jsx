import { FaRegHeart, FaEye } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import "./../../index.css";
import img1 from "../../assets/img/Rectangle 18.png";
import img2 from "../../assets/img/Rectangle 18 (1).png";
import img3 from "../../assets/img/Rectangle 18 (2).png";
import img4 from "../../assets/img/Rectangle 30.png";

const products = [
  {
    id: 1,
    name: "Burj Khalifa",
    price: "$260",
    oldPrice: "$360",
    image: img1,
  },
  {
    id: 2,
    name: "Dubai Desert Safari",
    price: "$960",
    oldPrice: "$1160",
    image: img2,
  },
  {
    id: 3,
    name: "Jumeirah Beach",
    price: "$160",
    oldPrice: "$170",
    image: img3,
  },
  {
    id: 4,
    name: "Miracle Garden",
    price: "$360",
    oldPrice: "",
    image: img4,
  },
  {
    id: 5,
    name: "Miracle Garden",
    price: "$360",
    oldPrice: "",
    image: img1,
  },
  {
    id: 6,
    name: "Miracle Garden",
    price: "$380",
    oldPrice: "",
    image: img3,
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 bg-opacity-50 p-2 rounded-full"
    onClick={onClick}
  >
    <FaArrowLeft color="white" size={11} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 bg-opacity-50 p-2 rounded-full"
    onClick={onClick}
  >
    <FaArrowRight color="white" size={11} />
  </div>
);

const ProductSlider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.99 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // Ensures only custom arrows appear
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      ref={sliderRef}
      className={`px-6 lg:my-20 sm:my-10 my-5  md:px-8  w-full max-w-screen-2xl  mx-auto z-50 bg-[#fdfaf5] ${
        isVisible ? "slide-up" : ""
      }`}
    >
      <div className="my-5 space-y-2">
        <h2 className="lg:text-4xl sm:text-2xl text-lg font-bold">
          Featured places
        </h2>
        <p>Travelers’ Choice Awards Best of the Best Beaches</p>
      </div>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="rounded-lg shadow-xl relative">
              <div className="relative group">
                <div className="shadow-md relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full transition-transform duration-300"
                  />
                  {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-transparent"></div>
                  <div className="absolute left-0 top-[88%] flex items-center h-7 duration-300">
                    <button className="text-white px-4 font-bold italic flex items-center gap-1">
                      {product.name} <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
