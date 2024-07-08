import GigCard from "@/components/gig/gigCard";
import HeroSection from "@/components/heroSection";
import { cn } from "@/libs/general/cn";
import WithOptionalAuth from "@/libs/hoc/withOptionalAuth";
import Link from "next/link";

export default function Home() {
  return (
    <WithOptionalAuth>
      <div>
        <HeroSection />
        {/* <div className="flex justify-center items-center">
          <div
            className={cn(
              "my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
            )}
          >
            <GigCard href="/gig/gigname" />
            <GigCard href="/gig/gigname" />
            <GigCard href="/gig/gigname" />
            <GigCard href="/gig/gigname" />
            <GigCard href="/gig/gigname" />
            <GigCard href="/gig/gigname" />
            <GigCard href="/gig/gigname" />
          </div>
        </div> */}
      </div>
    </WithOptionalAuth>
  );
}
