import HeadingOne from "../general/headingOne";
import Wrapper from "../general/wrapper";
import GigCard from "../gig/gigCard";

import { cn } from "@/libs/general/cn";

function PopuparGig() {
  return (
    <Wrapper>
      <div className="py-32">
        <div className=" mb-10 flex flex-col max-w-[50%] gap-3">
          <p className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Explore Popular services
          </p>
          <HeadingOne>Get things done quickly</HeadingOne>
          <span className="text-default-500 max-w-[80%] capitalize">
            From handyman services to creative tasks. find skilled professionals
            for all your needs
          </span>
        </div>
        <div className="">
          <div
            className={cn(
              "my-auto grid  grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
            )}
          >
            <GigCard
              removeWrapper
              href="/gig/gigname"
              id="1"
              images="ffff"
              isLoading={false}
              price={50}
              rating={4}
              ratingCount={7}
              shortDescription="I am telling you I can do it"
              title="I will create a website like google from scratch"
              username="amazing-seller"
            />
            <GigCard
              removeWrapper
              href="/gig/gigname"
              id="1"
              images="ffff"
              isLoading={false}
              price={50}
              rating={4}
              ratingCount={7}
              shortDescription="I am telling you I can do it"
              title="I will create a website like google from scratch"
              username="amazing-seller"
            />
            <GigCard
              removeWrapper
              href="/gig/gigname"
              id="1"
              images="ffff"
              isLoading={false}
              price={50}
              rating={4}
              ratingCount={7}
              shortDescription="I am telling you I can do it"
              title="I will create a website like google from scratch"
              username="amazing-seller"
            />
            <GigCard
              removeWrapper
              href="/gig/gigname"
              id="1"
              images="ffff"
              isLoading={false}
              price={50}
              rating={4}
              ratingCount={7}
              shortDescription="I am telling you I can do it"
              title="I will create a website like google from scratch"
              username="amazing-seller"
            />
            <GigCard
              removeWrapper
              href="/gig/gigname"
              id="1"
              images="ffff"
              isLoading={false}
              price={50}
              rating={4}
              ratingCount={7}
              shortDescription="I am telling you I can do it"
              title="I will create a website like google from scratch"
              username="amazing-seller"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default PopuparGig;
