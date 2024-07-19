import Feature from "@/components/home/features";
import HeroSection from "@/components/home/heroSection";
import PopuparGig from "@/components/home/popularGig";
import WithOptionalAuth from "@/libs/hoc/WithOptionalAuth";

export default function Home() {
  return (
    <WithOptionalAuth>
      <div>
        <HeroSection />
        <Feature />
        <PopuparGig />
      </div>
    </WithOptionalAuth>
  );
}
