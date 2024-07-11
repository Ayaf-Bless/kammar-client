"use client";
import HeadingOne from "@/components/general/headingOne";
import Wrapper from "@/components/general/wrapper";
import { Image } from "@nextui-org/react";

const gigData = {
  _id: "6679b0b9b853321d1739d18d",
  title: "I will make a power presetation for your product",
  seller: {
    sub: "6679adb0fcb17c599c878fa7",
    username: "user3",
    verified: "false",
    status: "active",
    _id: "6679b0b9b853321d1739d18e",
  },
  slug: "amazing-gig-service",
  shortDescription: "this is a short description of the amazing gig service.",
  targetCity: "New York",
  targetCountry: "USA",
  tags: ["design", "art", "graphics"],
  images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
  descriptionTemplate: {
    others: {
      title: "Additional Info",
      paragraph: "Contact me for more details.",
    },
    getAttention: "get the best design services.",
    introduction: "i provide high-quality design services.",
    whatsIncluded: ["Logo design", "Flyer design", "Poster design"],
    uniqueSellingPoints: ["Fast delivery", "High quality"],
    requirements: [
      "Provide all necessary information",
      "Be clear about your expectations",
    ],
    process:
      "First, we discuss the project. Then, I create a draft. Finally, we make revisions.",
    callToAction: "Order now and get started!",
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
      title: "basic",
      expectedDelivery: 5,
      price: 15,
      isRecommended: false,
      deliveryUnit: "D",
      extras: [
        {
          title: "Extra Design",
          price: 5,
          description: "Add an extra design to your package.",
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
      title: "Standard",
      expectedDelivery: 40,
      price: 30,
      isRecommended: true,
      deliveryUnit: "D",
      extras: [
        {
          title: "Extra Revision",
          price: 10,
          description: "Add an extra revision to your package.",
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
      title: "Premium",
      expectedDelivery: 30,
      price: 50,
      isRecommended: false,
      deliveryUnit: "D",
      extras: [
        {
          title: "Express Delivery",
          price: 20,
          description: "Get your order delivered within 24 hours.",
          _id: "6679b0b9b853321d1739d19b",
        },
      ],
      _id: "6679b0b9b853321d1739d19a",
    },
  ],
  isFlash: false,
  category: "6679a1e571d6be2b12512599",
  subCategory: {
    title: "logo design",
    shortDescription:
      "creating unique and memorable logos for brands and businesses.",
    _id: "6679a1e571d6be2b1251259a",
  },
  faqs: [
    {
      title: "What do you need from me?",
      content: "I need detailed information about your project.",
      _id: "6679b0b9b853321d1739d19d",
    },
    {
      title: "How long does it take?",
      content: "Delivery time depends on the package you choose.",
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
      <div className="mt-6 bg-primary-400 h-[400px]">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          {/* <Image
            src="/2.jpeg"
            alt="Two each of gray, white, and black shirts laying flat."
            className="h-full w-full object-cover object-center"
          /> */}
        </div>
      </div>
      <Wrapper>
        <div className="text-default-500 my-7">
          <HeadingOne>{gigData.title}</HeadingOne>
        </div>
      </Wrapper>
    </div>
  );
}

export default GitItem;
