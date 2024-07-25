import {
  LockClosedIcon,
  ServerIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathRoundedSquareIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";

import Wrapper from "../general/wrapper";

function SellerContent() {
  return (
    <Wrapper>
      <div className="relative isolate overflow-hidden light:bg-white py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-lg font-semibold leading-8 tracking-tight text-primary">
              Join Us Today
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight light:text-gray-900 sm:text-4xl">
              Unlock Your Potential as a freelancer
            </h1>
            <p className="mt-6 text-xl leading-8 light:text-gray-700">
              Take your skills to the next level by joining Kammar. We provide
              everything you need to succeed as a freelances.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <svg
                aria-hidden="true"
                className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 light:stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              >
                <defs>
                  <pattern
                    height={200}
                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                    patternUnits="userSpaceOnUse"
                    width={200}
                  >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                  height="100%"
                  strokeWidth={0}
                  width="100%"
                />
              </svg>
              <figure className="border-l border-primary pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight light:text-gray-900">
                  <p>
                    “Joining Kammar has transformed my freelance business. The
                    support and tools provided are unparalleled.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <img
                    alt=""
                    className="mt-1 h-10 w-10 flex-none rounded-full light:bg-gray-50"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold light:text-gray-900">
                      Brenna Goyette
                    </div>
                    <div className="light:text-gray-600 text-default-500">
                      @brenna
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="max-w-xl text-base leading-7 light:text-gray-700 text-default-500 lg:col-span-7">
              <p>
                As a freelancer on Kammar, you gain access to a variety of
                features designed to help you thrive.
              </p>
              <ul className="mt-8 max-w-xl space-y-8 light:text-gray-600">
                <li className="flex gap-x-3">
                  <AdjustmentsHorizontalIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-primary-700"
                  />
                  <span>
                    <strong className="font-semibold light:text-gray-900 text-default-700">
                      Variety of Payment Options.
                    </strong>
                    We support multiple payment methods, including bank
                    transfers and mobile money, making it easier for you to get
                    paid, especially in African countries.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathRoundedSquareIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-primary-700"
                  />
                  <span>
                    <strong className="font-semibold light:text-gray-900 text-default-700">
                      Easy Service Creation.
                    </strong>
                    Create and publish your services with ease using our
                    straightforwar method, designed with freelancers in mind.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-primary-700"
                  />
                  <span>
                    <strong className="font-semibold light:text-gray-900 text-default-700">
                      Dedicated freelancers Support.
                    </strong>
                    We offer support specifically tailored for freelancers,
                    ensuring you have the assistance you need to succeed.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BanknotesIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-primary-700"
                  />
                  <span>
                    <strong className="font-semibold light:text-gray-900 text-default-700">
                      Sponsorship Plan.
                    </strong>
                    Earn a percentage of orders completed by freelancers you
                    sponsor, providing you with an additional income stream.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-primary-700"
                  />
                  <span>
                    <strong className="font-semibold light:text-gray-900 text-default-700">
                      Secure and Trustworthy.
                    </strong>
                    We have measures in place to ensure you can focus on your
                    work without worrying about finding clients or dealing with
                    difficult characters.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Join us today and take advantage of these benefits to grow your
                freelance business and reach new heights.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight light:text-gray-900">
                Why Wait? Start Now!
              </h2>
              <p className="mt-6">
                Sign up now and discover how Kammar can help you succeed. With
                our support and tools, you can focus on what you do
                best—providing top-notch services to your clients.
              </p>
              <Button
                as={NextLink}
                className="w-full mt-4"
                color="primary"
                href="#"
              >
                Become Frelencer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SellerContent;
