import HeroSection from "@/components/home/heroSection";
import PopuparGig from "@/components/home/popularGig";
import SimpleSlider from "@/components/test";
import WithOptionalAuth from "@/libs/hoc/WithOptionalAuth";
import Slider from "react-slick";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  return (
    <WithOptionalAuth>
      <div>
        <HeroSection />
        <PopuparGig />
      </div>
    </WithOptionalAuth>
  );
}
