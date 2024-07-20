import Feature from "@/components/home/features";
import HeroSection from "@/components/home/heroSection";
import PopuparGig from "@/components/home/popularGig";
import SellerContent from "@/components/home/sellerContent";
import WithOptionalAuth from "@/libs/hoc/WithOptionalAuth";

export default function Home() {
  return (
    <WithOptionalAuth>
      <div>
        <HeroSection />
        <Feature />
        <PopuparGig />
        <SellerContent />
      </div>
    </WithOptionalAuth>
  );
}
