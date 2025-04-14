
import AmbitionCityServices from "../AmbitionCityServices/AmbitionCityServices";
import CarouselBasicExample from "../CarouselBasicExample/CarouselBasicExample";
import Navbar from "../Navbar/Navbar";
import PlacesGallery from "../PlacesGallery/PlacesGallery";
import ProductSlider from "../ProductSlider/ProductSlider";
import Services from "../Services/Services";
import TestimonialCard from "../TestimonialCard/TestimonialCard";


import obj4 from "../../assets/img/Objects (4).png"
import LatestWritings from "../LatestWritings/LatestWritings";
import ContactSection from "../ContactSection/ContactSection";
import FAQ from "../FAQ/FAQ";
import Happily from "../Happily/Happily";

const Home = () => {
    return (
        <div className="bg-[#fdfaf5]  mx-auto ">
          
    <div className="relative">
    <CarouselBasicExample></CarouselBasicExample>
     <div className="absolute xl:top-[40%] sm:top-1/3 top-20 right-0  ">
            <img 
              src={obj4} 
              className="sm:w-full w-11/12 h-full  " 
              alt="decorative element" 
            />
          </div>
    <ProductSlider></ProductSlider>
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
    )

    ;
  };
  
  export default Home;
  