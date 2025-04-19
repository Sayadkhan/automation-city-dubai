import AmbitionCityServices from "../AmbitionCityServices/AmbitionCityServices";
import CarouselBasicExample from "../CarouselBasicExample/CarouselBasicExample";
import PlacesGallery from "../PlacesGallery/PlacesGallery";
import ProductSlider from "../ProductSlider/ProductSlider";
import Services from "../Services/Services";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import obj4 from "../../assets/img/Objects (4).png";
import LatestWritings from "../LatestWritings/LatestWritings";
import ContactSection from "../ContactSection/ContactSection";
import FAQ from "../FAQ/FAQ";
import Happily from "../Happily/Happily";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [uploadedBanners, setUploadedBanners] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/all-featured"
        );
        setPlaces(response.data);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, []);

  // Fetch all banners from the backend
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/banner/all-banners"
        );
        setUploadedBanners(response.data); // Set banners data
      } catch (error) {
        console.error("Error fetching banners:", error);
        setMessage("Error fetching banners.");
      }
    };

    fetchBanners();
  }, []);
  return (
    <div className="bg-[#fdfaf5]  mx-auto ">
      <div className="relative">
        <CarouselBasicExample uploadedBanners={uploadedBanners} />
        <div className="absolute xl:top-[40%] sm:top-1/3 top-20 right-0  ">
          <img
            src={obj4}
            className="sm:w-full w-11/12 h-full  "
            alt="decorative element"
          />
        </div>
        <ProductSlider places={places} />
      </div>

      <AmbitionCityServices></AmbitionCityServices>
      <PlacesGallery></PlacesGallery>
      <Services></Services>
      <TestimonialCard></TestimonialCard>
      <LatestWritings></LatestWritings>
      <ContactSection></ContactSection>
      <FAQ></FAQ>
      <Happily></Happily>
    </div>
  );
};

export default Home;
