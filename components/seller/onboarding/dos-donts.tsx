import Wrapper from "@/components/general/wrapper";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Feature {
  name: string;
  description: string;
  icon: any;
}

const dos: Feature[] = [
  {
    name: "Provide Accurate Descriptions",
    description:
      "Ensure that your gig descriptions are detailed and accurate to avoid misunderstandings.",
    icon: CheckCircleIcon,
  },
  {
    name: "Communicate Promptly",
    description:
      "Respond to buyer inquiries and messages promptly to build trust and improve your ratings.",
    icon: CheckCircleIcon,
  },
  {
    name: "Deliver on Time",
    description:
      "Ensure that you meet the deadlines you set for your gigs to maintain a good reputation.",
    icon: CheckCircleIcon,
  },
  {
    name: "Update Your Portfolio",
    description:
      "Regularly update your portfolio with your latest work to attract more buyers.",
    icon: CheckCircleIcon,
  },
  {
    name: "Ask for Feedback",
    description:
      "Encourage your buyers to leave feedback to help improve your services and build credibility.",
    icon: CheckCircleIcon,
  },
  {
    name: "Stay Professional",
    description:
      "Maintain a professional tone in all communications with buyers.",
    icon: CheckCircleIcon,
  },
];

const donts: Feature[] = [
  {
    name: "Overpromise and Underdeliver",
    description:
      "Avoid making promises you can’t keep, as this can damage your reputation.",
    icon: XCircleIcon,
  },
  {
    name: "Ignore Buyer Messages",
    description:
      "Not responding to buyer messages can lead to misunderstandings and negative reviews.",
    icon: XCircleIcon,
  },
  {
    name: "Miss Deadlines",
    description:
      "Failing to deliver on time can result in cancellations and poor ratings.",
    icon: XCircleIcon,
  },
  {
    name: "Use Inappropriate Language",
    description:
      "Maintain professionalism and avoid using inappropriate language in your communications.",
    icon: XCircleIcon,
  },
  {
    name: "Plagiarize Content",
    description:
      "Always provide original content to avoid legal issues and maintain your credibility.",
    icon: XCircleIcon,
  },
  {
    name: "Neglect Your Profile",
    description:
      "Keep your profile and gigs updated to reflect your current skills and services.",
    icon: XCircleIcon,
  },
];

function DosDonts() {
  return (
    <>
      <Wrapper>
        <div className="mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Seller Onboarding: Dos and Don&apos;ts
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to succeed as seller on Kammar
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ensure your selling journey is a success by following our essential
            guidelines. Learn what to do and what to avoid to maximize your
            earnings and customer satisfaction.
          </p>
        </div>
        <div className="container flex flex-col gap-8">
          <div className="mx-auto mt-16  sm:mt-20 lg:mt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {dos.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto mt-16  sm:mt-20 lg:mt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {donts.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                      <feature.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
export default DosDonts;
