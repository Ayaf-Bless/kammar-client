import HeroSection from "@/components/heroSection";
import WithOptionalAuth from "@/libs/hoc/withOptionalAuth";
import Link from "next/link";

export default function Home() {
  return (
    <WithOptionalAuth>
      <div>
        <HeroSection />
      </div>
    </WithOptionalAuth>
  );
}
