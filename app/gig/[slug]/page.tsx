"use client";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
  Link,
  RadioGroup,
} from "@nextui-org/react";
import NextLink from "next/link";

import HeadingOne from "@/components/general/headingOne";
import HeadingTwo from "@/components/general/HeadingTwo";
import Wrapper from "@/components/general/wrapper";
import { Icon } from "@iconify/react";
import PlanRadio from "@/components/gig/plan-radio";

const gigData = {
  _id: "6679b0b9b853321d1739d18d",
  title:
    "I will create a comprehensive PowerPoint presentation for showcasing your product",
  seller: {
    sub: "6679adb0fcb17c599c878fa7",
    username: "user3",
    verified: "false",
    status: "active",
    _id: "6679b0b9b853321d1739d18e",
    bio: "Professional and modern MS Tools user",
  },
  slug: "amazing-gig-service",
  shortDescription:
    "This is a brief overview of the exceptional gig service being offered.",
  targetCity: "New York",
  targetCountry: "United States of America",
  tags: ["design", "art", "graphics"],
  images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
  descriptionTemplate: {
    others: {
      title: "Additional Information",
      paragraph:
        "Have a question or need more details about this gig? Don't hesitate to reach out! I'm happy to discuss your specific project requirements and answer any inquiries you may have. Feel free to provide details about your brand, target audience, and the overall vision you have for your presentation. The more information you share, the better I can tailor the design to your unique needs and exceed your expectations.", // Length: 322 characters
    },
    getAttention:
      "Elevate your brand and captivate your audience with a professional and impactful presentation. Don't settle for generic templates or mediocre design. Invest in a presentation that truly reflects the quality and value of your product.", // Length: 302 characters
    introduction:
      "I am a highly skilled and experienced designer specializing in crafting presentations that not only look stunning but also effectively communicate your message and leave a lasting impression on your audience. Whether you're pitching to potential investors, presenting at a conference, or educating your team, a well-designed presentation can make a world of difference.", // Length: 322 characters
    whatsIncluded: [
      "Professional and modern presentation design tailored to your brand identity",
      "High-quality visuals and graphics that will grab attention and keep your audience engaged",
      "Attention-grabbing layouts and transitions that will ensure a smooth and dynamic presentation experience",
      "Clear and concise content organization that allows viewers to easily understand your key points",
      "Unlimited revisions until you are completely satisfied with the final outcome", // Added element to list, Length: 298 characters
    ],
    uniqueSellingPoints: [
      "Fast turnaround times to meet your deadlines and keep your project on track",
      "Exceptional communication and customer service to ensure a smooth and collaborative experience",
      "A proven track record of delivering high-quality presentations that exceed client expectations", // Added element to list, Length: 304 characters
    ],
    requirements: [
      "A clear understanding of your target audience and the message you want to convey",
      "Content for your presentation, including text, logos, images, and any other relevant information",
      "Any specific design preferences or brand guidelines you may have", // Added element to list, Length: 299 characters
    ],
    process:
      "Our collaborative process begins with a consultation to discuss your vision, project goals, and target audience. I will then create an initial draft based on your input. We will then work together on revisions until you are completely satisfied with the final design. Throughout the process, I will maintain open communication and address any questions or concerns you may have.", // Length: 324 characters
    callToAction:
      "Don't wait! Order your presentation today and take your brand to the next level. Let's create a presentation that will leave a lasting impression and help you achieve your business objectives!", // Length: 303 characters
    _id: "6679b0b9b853321d1739d18f",
  },
  status: "published",
  isFeatured: true,
  rating: {
    ratingsCount: 0,
    ratingSum: 0,
    five: {
      value: 0,
      count: 0,
      _id: "6679b0b9b853321d1739d190",
    },
    four: {
      value: 0,
      count: 0,
      _id: "6679b0b9b853321d1739d191",
    },
    three: {
      value: 0,
      count: 0,
      _id: "6679b0b9b853321d1739d192",
    },
    two: {
      value: 0,
      count: 0,
      _id: "6679b0b9b853321d1739d193",
    },
    one: {
      value: 0,
      count: 0,
      _id: "6679b0b9b853321d1739d194",
    },
    _id: "6679b0b9b853321d1739d195",
    createdAt: "2024-06-24T17:45:29.614Z",
    updatedAt: "2024-06-24T17:45:29.614Z",
  },
  packages: [
    {
      bargain: {
        enabled: true,
        minPrice: 10,
      },
      title: "Basic Package",
      expectedDelivery: 5,
      price: 15,
      isRecommended: false,
      deliveryUnit: "D",
      extras: [
        {
          title: "Additional Design",
          price: 5,
          description: "Include an extra design in your package.",
          _id: "6679b0b9b853321d1739d197",
        },
      ],
      _id: "6679b0b9b853321d1739d196",
    },
    {
      bargain: {
        enabled: false,
        minPrice: 25,
      },
      title: "Standard Package",
      expectedDelivery: 40,
      price: 30,
      isRecommended: true,
      deliveryUnit: "D",
      extras: [
        {
          title: "Additional Revision",
          price: 10,
          description: "Include an extra revision in your package.",
          _id: "6679b0b9b853321d1739d199",
        },
      ],
      _id: "6679b0b9b853321d1739d198",
    },
    {
      bargain: {
        enabled: false,
        minPrice: 40,
      },
      title: "Premium Package",
      expectedDelivery: 30,
      price: 50,
      isRecommended: false,
      deliveryUnit: "D",
      extras: [
        {
          title: "Express Delivery",
          price: 20,
          description: "Receive your order within 24 hours.",
          _id: "6679b0b9b853321d1739d19b",
        },
      ],
      _id: "6679b0b9b853321d1739d19a",
    },
  ],
  isFlash: false,
  category: "6679a1e571d6be2b12512599",
  subCategory: {
    title: "Logo Design",
    shortDescription:
      "Specializing in creating unique and memorable logos for brands and businesses.",
    _id: "6679a1e571d6be2b1251259a",
  },
  faqs: [
    {
      title: "What information do you need from me?",
      content:
        "I need detailed information about your project, including your specific requirements and expectations.",
      _id: "6679b0b9b853321d1739d19d",
    },
    {
      title: "How long will it take to complete my order?",
      content:
        "The delivery time depends on the package you choose. Please refer to the package details for specific delivery times.",
      _id: "6679b0b9b853321d1739d19e",
    },
  ],
  createdAt: "2024-06-24T17:45:29.634Z",
  updatedAt: "2024-06-24T17:45:29.634Z",
  __v: 0,
};

function GitItem() {
  return (
    <div>
      <Wrapper>
        <div className="pt-6">
          <div className="flex flex-wrap w-full justify-between pb-10 relative">
            <div className="md:w-2/3 w-full flex flex-col  gap-7 pb-6 md:pb-0 md:pr-6">
              {/* title */}
              <div className="text-default-500">
                <HeadingOne>{gigData.title}</HeadingOne>
              </div>
              {/* Images */}
              <div className="overflow-hidden rounded-sm w-full flex flex-col gap-3">
                <Image
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="w-full object-cover object-center"
                  src="/2.jpeg"
                />
                <div>
                  <p className="text-default-600">{gigData.shortDescription}</p>
                </div>
                <div className="flex gap-2">
                  {gigData.tags.map((tag, i) => (
                    <Chip key={i} className="capitalize" color="default">
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>
              {/* seller */}
              <div>
                <Link
                  as={NextLink}
                  className="flex gap-5 items-start"
                  href={`seller/${gigData.seller.username}`}
                >
                  <Avatar
                    radius="full"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a04258114e29526708c"
                  />
                  <div className="flex flex-col text-default-800">
                    <p className="font-bold">{gigData.seller.username}</p>
                    <p className="text-default-600 text-small">
                      {gigData.seller.bio}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Introduction */}
              <div className="flex flex-col gap-3">
                <h2 className="text-small font-semibold text-default-700">
                  Introduction
                </h2>
                <p className="text-default-600">
                  {gigData.descriptionTemplate.introduction}
                </p>
              </div>
              {/* What's Included */}
              <div className="flex flex-col gap-3">
                <h2 className="text-small font-semibold text-default-700">
                  What is Included
                </h2>
                <ul className="space-y-2 pl-4">
                  {gigData.descriptionTemplate.whatsIncluded.map((point, i) => (
                    <li
                      key={i}
                      className="text-default-600 flex items-center gap-3"
                    >
                      <span className="h-2 w-2 rounded-lg bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-small font-semibold text-default-700">
                  Unique selling ponts
                </h3>
                <ul className="space-y-2 pl-4">
                  {gigData.descriptionTemplate.uniqueSellingPoints.map(
                    (point, i) => (
                      <li
                        key={i}
                        className="text-default-600 flex items-center gap-3"
                      >
                        <span className="h-2 w-2 rounded-lg bg-primary" />
                        <span>{point}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              {/* Requirements */}
              <div className="flex flex-col gap-3">
                <h2 className="text-small font-semibold text-default-700">
                  Requirements
                </h2>
                <ul className="space-y-2 pl-4">
                  {gigData.descriptionTemplate.requirements.map((req, i) => (
                    <li
                      key={i}
                      className="text-default-600 flex items-center gap-3"
                    >
                      <span className="h-2 w-2 rounded-lg bg-primary" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-small font-semibold text-default-700">
                  Process
                </h2>
                <p className="text-default-600">
                  {gigData.descriptionTemplate.process}
                </p>
              </div>

              <div className="dark:bg-primary-100 bg-primary-100 p-6">
                <div className="max-w-screen-md flex flex-col gap-3">
                  <h2 className="text-small font-semibold text-default-700 dark:text-default-200">
                    A message from ${gigData.seller.username}
                  </h2>
                  <p className="mb-8 font-light text-default-800 sm:text-medium dark:text-default-400">
                    {gigData.descriptionTemplate.callToAction}
                  </p>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                      Make an order
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg  focus:ring-4 focus:ring-gray-100 dark:text-default-200 dark:border-gray-600 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="mr-2 -ml-1 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7zM6 7h11v1H6zm0 3h11v1H6zm0 3h8v1H6z"
                        ></path>
                      </svg>
                      Message me
                    </a>
                  </div>
                </div>
              </div>
              <section className="w-full">
                <div className="flex w-full flex-col gap-8">
                  <h2 className="text-small font-semibold text-default-700">
                    <span className="hidden md:inline-block">
                      Frequently asked questions
                    </span>
                  </h2>

                  <Accordion
                    fullWidth
                    keepContentMounted
                    itemClasses={{
                      base: "px-0",
                      title: "font-medium",
                      trigger: "py-6 flex-row-reverse",
                      content: "pt-0 pb-6 text-base text-default-500",
                      indicator: "rotate-0 data-[open=true]:-rotate-45",
                    }}
                    items={gigData.faqs}
                    selectionMode="multiple"
                  >
                    {gigData.faqs.map((item, i) => (
                      <AccordionItem
                        key={i}
                        indicator={
                          <Icon
                            className="text-secondary"
                            icon="lucide:plus"
                            width={24}
                          />
                        }
                        title={item.title}
                      >
                        {item.content}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            </div>

            <div className="md:w-1/3 w-full sticky">
              <Card className="">
                <CardHeader className="flex flex-col items-start px-6 pb-0 pt-5">
                  <h4 className="text-large font-medium">Select your plan</h4>
                  <p className="text-tiny text-default-400">
                    Find a package that&apos;s right for your need
                  </p>
                </CardHeader>
                <CardBody>
                  <RadioGroup
                    aria-label="packages"
                    classNames={{ wrapper: "gap-3" }}
                  >
                    {gigData.packages.map((pkg) => {
                      if (pkg.isRecommended) {
                        return (
                          <Badge
                            key={pkg._id}
                            classNames={{
                              badge:
                                "z-10 bg-secondary-200 border-small text-secondary border-secondary-200 right-14 px-2 py-1",
                            }}
                            content={pkg.isRecommended ? "Recommended" : null}
                            size="sm"
                            variant="solid"
                          >
                            <PlanRadio
                              description={pkg.extras
                                .map((extra) => extra.description)
                                .join(", ")}
                              icon={
                                <Icon
                                  className="text-secondary"
                                  icon="solar:box-minimalistic-linear"
                                  width={18}
                                />
                              }
                              label={pkg.title}
                              monthlyPrice={pkg.price}
                              value={pkg.title.toLowerCase().replace(" ", "-")}
                              IsBargainable={pkg.bargain.enabled}
                            />
                          </Badge>
                        );
                      } else {
                        return (
                          <PlanRadio
                            key={pkg._id}
                            description={pkg.extras
                              .map((extra) => extra.description)
                              .join(", ")}
                            icon={
                              <Icon
                                className="text-secondary"
                                icon="solar:box-minimalistic-linear"
                                width={18}
                              />
                            }
                            label={pkg.title}
                            monthlyPrice={pkg.price}
                            value={pkg.title.toLowerCase().replace(" ", "-")}
                            IsBargainable={pkg.bargain.enabled}
                          />
                        );
                      }
                    })}
                  </RadioGroup>
                  <p className="pl-1 pt-4 text-tiny text-default-400">
                    Selected payment method can be changed at any time.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default GitItem;
