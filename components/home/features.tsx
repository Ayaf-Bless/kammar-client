import {
  ChatBubbleLeftIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

import { SearchIcon } from "../general/icons";

const features = [
  {
    name: "Search for Services",
    description:
      "Easily browse and find the gig that meets your needs from a wide array of services offered by talented sellers.",
    href: "#",
    icon: SearchIcon,
  },
  {
    name: "Negotiate with Sellers",
    description:
      "Engage directly with sellers to discuss your project details. Take advantage of our negotiation feature to agree on a price that works for both parties.",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
  {
    name: "Secure Payments",
    description:
      "Make payments confidently knowing that funds are securely held until the project is completed to your satisfaction. Sellers receive their payment only after you approve the work.",
    href: "#",
    icon: CreditCardIcon,
  },
];

function Feature() {
  return (
    <div className="light:bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[90%] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-700">
            Discover and Hire the Best
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight light:text-gray-900 sm:text-4xl">
            The Ultimate Platform for Your Project Needs
          </p>
          <p className="mt-6 text-medium leading-8 light:text-gray-600">
            Our platform offers a seamless experience from finding the perfect
            service to ensuring secure transactions. Whether you need a small
            task completed or a large project managed, we&apos;ve got you
            covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 light:text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-primary-700"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 light:text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      className="text-sm font-semibold leading-6 text-primary-700"
                      href={feature.href}
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Feature;
