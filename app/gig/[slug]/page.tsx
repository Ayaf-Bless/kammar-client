"use client";
// import {
//   Accordion,
//   AccordionItem,
//   Avatar,
//   Chip,
//   Image,
//   Link,
// } from "@nextui-org/react";
// import NextLink from "next/link";
// import { Icon } from "@iconify/react";

// import HeadingOne from "@/components/general/headingOne";
// import Wrapper from "@/components/general/wrapper";
// import PackageCard from "@/components/gig/package-card";

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
      "Don't wait! Order your presentation today and take your brand to the next level.", // Length: 303 characters
    _id: "6679b0b9b853321d1739d18f",
    deliverables: [
      "300 DPI Resolution print ready file",
      "AI/EPS/PSD/PDF/JPEG/PNG file",
    ],
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
      _id: "6679b0b9b853321d1739d196",
      whatsIncluded: [
        "Professional and modern presentation design tailored to your brand identity",
        "High-quality visuals and graphics that will grab attention and keep your audience engaged",
        "Attention-grabbing layouts and transitions that will ensure a smooth and dynamic presentation experience",
        "Clear and concise content organization that allows viewers to easily understand your key points",
        "Unlimited revisions until you are completely satisfied with the final outcome", // Added element to list, Length: 298 characters
      ],
    },
    {
      bargain: {
        enabled: true,
        minPrice: 25,
      },
      title: "Standard Package",
      expectedDelivery: 40,
      price: 30,
      isRecommended: true,
      deliveryUnit: "D",
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
      _id: "6679b0b9b853321d1739d19a",
      whatsIncluded: [
        "Professional and modern presentation design tailored to your brand identity",
        "High-quality visuals and graphics that will grab attention and keep your audience engaged",
        "Attention-grabbing layouts and transitions that will ensure a smooth and dynamic presentation experience",
        "Clear and concise content organization that allows viewers to easily understand your key points",
        "Unlimited revisions until you are completely satisfied with the final outcome", // Added element to list, Length: 298 characters
      ],
    },
  ],
  ExpressPackage: {
    title: "Express",
    price: 20,
    deliveryUnit: "D",
    expectedDelivery: -2,
  },
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

// function GitItem() {
//   return (
//     <div>
//       <Wrapper>
//         <div className="pt-6">
//           <div className="flex flex-wrap w-full justify-between pb-10 relative">
//             <div className="md:w-2/3 w-full flex flex-col  gap-7 pb-6 md:pb-0 md:pr-6">
//               {/* title */}
//               <div className="text-default-500">
//                 <HeadingOne>{gigData.title}</HeadingOne>
//               </div>
//               {/* Images */}
//               {/* <div className="overflow-hidden rounded-sm w-full flex flex-col gap-3">
//                 <Image
//                   alt="Two each of gray, white, and black shirts laying flat."
//                   className="w-full object-cover object-center"
//                   src="/2.jpeg"
//                 />
//                 <div>
//                   <p className="text-default-600">{gigData.shortDescription}</p>
//                 </div>
//                 */}

//               <div
//                 id="default-carousel"
//                 className="relative w-full"
//                 data-carousel="slide"
//               >
//                 <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                   <div
//                     className="hidden duration-700 ease-in-out"
//                     data-carousel-item
//                   >
//                     <Image
//                       alt="Two each of gray, white, and black shirts laying flat."
//                       className="w-full object-cover object-center"
//                       src="/2.jpeg"
//                     />
//                   </div>

//                   <div
//                     className="hidden duration-700 ease-in-out"
//                     data-carousel-item
//                   >
//                     <Image
//                       alt="Two each of gray, white, and black shirts laying flat."
//                       className="w-full object-cover object-center"
//                       src="/2.jpeg"
//                     />
//                   </div>
//                 </div>

//                 <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//                   <button
//                     type="button"
//                     className="w-3 h-3 rounded-full"
//                     aria-current="true"
//                     aria-label="Slide 1"
//                     data-carousel-slide-to="0"
//                   ></button>
//                   <button
//                     type="button"
//                     className="w-3 h-3 rounded-full"
//                     aria-current="false"
//                     aria-label="Slide 2"
//                     data-carousel-slide-to="1"
//                   ></button>
//                 </div>

//                 <button
//                   type="button"
//                   className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                   data-carousel-prev
//                 >
//                   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg
//                       className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 6 10"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M5 1 1 5l4 4"
//                       />
//                     </svg>
//                     <span className="sr-only">Previous</span>
//                   </span>
//                 </button>
//                 <button
//                   type="button"
//                   className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                   data-carousel-next
//                 >
//                   <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg
//                       className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 6 10"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="m1 9 4-4-4-4"
//                       />
//                     </svg>
//                     <span className="sr-only">Next</span>
//                   </span>
//                 </button>
//               </div>

//               <div className="flex gap-2">
//                 {gigData.tags.map((tag, i) => (
//                   <Chip key={i} className="capitalize" color="default">
//                     {tag}
//                   </Chip>
//                 ))}
//               </div>
//               {/* seller */}
//               <div>
//                 <Link
//                   as={NextLink}
//                   className="flex gap-5 items-start"
//                   href={`seller/${gigData.seller.username}`}
//                 >
//                   <Avatar
//                     radius="full"
//                     size="md"
//                     src="https://i.pravatar.cc/150?u=a04258114e29526708c"
//                   />
//                   <div className="flex flex-col text-default-800">
//                     <p className="font-bold">{gigData.seller.username}</p>
//                     <p className="text-default-600 text-small">
//                       {gigData.seller.bio}
//                     </p>
//                   </div>
//                 </Link>
//               </div>

//               {/* Introduction */}
//               <div className="flex flex-col gap-3">
//                 <h2 className="text-small font-semibold text-default-700">
//                   Introduction
//                 </h2>
//                 <p className="text-default-600">
//                   {gigData.descriptionTemplate.introduction}
//                 </p>
//               </div>
//               {/* What's Included */}
//               <div className="flex flex-col gap-3">
//                 <h2 className="text-small font-semibold text-default-700">
//                   What is Included
//                 </h2>
//                 <ul className="space-y-2 pl-4">
//                   {gigData.descriptionTemplate.whatsIncluded.map((point, i) => (
//                     <li
//                       key={i}
//                       className="text-default-600 flex items-center gap-3"
//                     >
//                       <span className="h-2 w-2 rounded-lg bg-primary" />
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="flex flex-col gap-3">
//                 <h3 className="text-small font-semibold text-default-700">
//                   Unique selling ponts
//                 </h3>
//                 <ul className="space-y-2 pl-4">
//                   {gigData.descriptionTemplate.uniqueSellingPoints.map(
//                     (point, i) => (
//                       <li
//                         key={i}
//                         className="text-default-600 flex items-center gap-3"
//                       >
//                         <span className="h-2 w-2 rounded-lg bg-primary" />
//                         <span>{point}</span>
//                       </li>
//                     ),
//                   )}
//                 </ul>
//               </div>
//               {/* Requirements */}
//               <div className="flex flex-col gap-3">
//                 <h2 className="text-small font-semibold text-default-700">
//                   Requirements
//                 </h2>
//                 <ul className="space-y-2 pl-4">
//                   {gigData.descriptionTemplate.requirements.map((req, i) => (
//                     <li
//                       key={i}
//                       className="text-default-600 flex items-center gap-3"
//                     >
//                       <span className="h-2 w-2 rounded-lg bg-primary" />
//                       <span>{req}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex flex-col gap-3">
//                 <h2 className="text-small font-semibold text-default-700">
//                   Process
//                 </h2>
//                 <p className="text-default-600">
//                   {gigData.descriptionTemplate.process}
//                 </p>
//               </div>

//               <div className="dark:bg-primary-100 bg-primary-100 p-6">
//                 <div className="max-w-screen-md flex flex-col gap-3">
//                   <h2 className="text-small font-semibold text-default-700 dark:text-default-200">
//                     A message from ${gigData.seller.username}
//                   </h2>
//                   <p className="mb-8 font-light text-default-800 sm:text-medium dark:text-default-400">
//                     {gigData.descriptionTemplate.callToAction}
//                   </p>
//                   <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
//                     <a
//                       className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
//                       href="#"
//                     >
//                       Make an order
//                     </a>
//                     <a
//                       className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg  focus:ring-4 focus:ring-gray-100 dark:text-default-200 dark:border-gray-600 dark:focus:ring-gray-600"
//                       href="#"
//                     >
//                       <svg
//                         className="mr-2 -ml-1 w-5 h-5"
//                         height="1em"
//                         viewBox="0 0 24 24"
//                         width="1em"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7zM6 7h11v1H6zm0 3h11v1H6zm0 3h8v1H6z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                       Message me
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <section className="w-full">
//                 <div className="flex w-full flex-col gap-8">
//                   <h2 className="text-small font-semibold text-default-700">
//                     <span className="hidden md:inline-block">
//                       Frequently asked questions
//                     </span>
//                   </h2>

//                   <Accordion
//                     fullWidth
//                     keepContentMounted
//                     itemClasses={{
//                       base: "px-0",
//                       title: "font-medium",
//                       trigger: "py-6 flex-row-reverse",
//                       content: "pt-0 pb-6 text-base text-default-500",
//                       indicator: "rotate-0 data-[open=true]:-rotate-45",
//                     }}
//                     items={gigData.faqs}
//                     selectionMode="multiple"
//                   >
//                     {gigData.faqs.map((item, i) => (
//                       <AccordionItem
//                         key={i}
//                         indicator={
//                           <Icon
//                             className="text-primary"
//                             icon="lucide:plus"
//                             width={24}
//                           />
//                         }
//                         title={item.title}
//                       >
//                         {item.content}
//                       </AccordionItem>
//                     ))}
//                   </Accordion>
//                 </div>
//               </section>
//             </div>

// <div className="md:w-1/3 w-full">
//   <PackageCard
//     expressPackage={gigData.ExpressPackage}
//     packages={gigData.packages}
//     username={gigData.seller.username}
//   />
// </div>
//           </div>
//         </div>
//       </Wrapper>
//     </div>
//   );
// }

// export default GitItem;

import { StarIcon } from "@heroicons/react/20/solid";

import Badge from "@/components/general/badge";
import { addLineBreaks } from "@/utils/utils";
import AppLink from "@/components/apps/AppLink";
import PackageCard from "@/components/gig/package-card";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = {
  href: "#",
  average: 4,
  totalCount: 117,
  featured: [
    {
      id: 1,
      title: "This is the best white t-shirt out there",
      rating: 5,
      content: `
        <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
      `,
      author: "Mark Edwards",
      avatarSrc:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      title: "Adds the perfect variety to my wardrobe",
      rating: 4,
      content: `
        <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
      `,
      author: "Blake Reid",
      avatarSrc:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    },
    {
      id: 3,
      title: "All good things come in 6-Packs",
      rating: 5,
      content: `
        <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
      `,
      author: "Ben Russel",
      avatarSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function GigItem() {
  return (
    <div className="bg-white">
      {/* Mobile menu */}

      <main className="pt-8 sm:pt-10">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex  items-center space-x-2 px-4 sm:px-6 lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    className="mr-2 text-sm font-medium text-gray-900"
                    href={breadcrumb.href}
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                    fill="currentColor"
                    height={20}
                    viewBox="0 0 16 20"
                    width={16}
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
                href={product.href}
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6  sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
              src={product.images[0].src}
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
                src={product.images[1].src}
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
                src={product.images[2].src}
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
              src={product.images[3].src}
            />
          </div>
        </div>

        <div className="flex gap-2 mt-3 ml-8">
          {gigData.tags.map((tag, i) => (
            <Badge key={i} type="info">
              {tag.toUpperCase()}
            </Badge>
          ))}
        </div>

        {/* Product info */}
        <div className="mx-auto  px-4 pt-5 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {gigData.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <div className="w-full">
              <PackageCard
                expressPackage={gigData.ExpressPackage}
                packages={gigData.packages}
                username={gigData.seller.username}
              />
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Short description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {gigData.shortDescription}
                </p>
              </div>
            </div>

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2
                className="text-sm capitalize font-medium text-gray-900"
                id="shipping-heading"
              >
                introduction
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {gigData.descriptionTemplate.introduction}
                </p>
              </div>
            </section>

            <section aria-labelledby="highlight-heading" className="mt-10">
              <h2
                className="text-sm capitalize font-medium text-gray-900"
                id="highlight-heading"
              >
                why choose this gig?
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {gigData.descriptionTemplate.getAttention}
                </p>
              </div>
            </section>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                What is Included
              </h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {gigData.descriptionTemplate.whatsIncluded.map((el) => (
                    <li key={el} className="text-gray-400">
                      <span className="text-gray-600">{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Unique selling ponts
              </h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {gigData.descriptionTemplate.uniqueSellingPoints.map((el) => (
                    <li key={el} className="text-gray-400">
                      <span className="text-gray-600">{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Requirement</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {gigData.descriptionTemplate.requirements.map((el) => (
                    <li key={el} className="text-gray-400">
                      <span className="text-gray-600">{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2
                className="text-sm capitalize font-medium text-gray-900"
                id="shipping-heading"
              >
                process
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {gigData.descriptionTemplate.process}
                </p>
              </div>
            </section>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Delivarable</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {gigData.descriptionTemplate.deliverables.map((el) => (
                    <li key={el} className="text-gray-400">
                      <span className="text-gray-600">{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2
                className="text-sm capitalize font-medium text-gray-900"
                id="shipping-heading"
              >
                {gigData.descriptionTemplate.others.title}
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {gigData.descriptionTemplate.others.paragraph}
                </p>
              </div>
            </section>

            <div className="bg-indigo-100 mt-10">
              <div className="mx-auto  px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: addLineBreaks(
                      gigData.descriptionTemplate.callToAction,
                      5,
                    ),
                  }}
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                />
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                  <AppLink
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    href="#"
                  >
                    Get started
                  </AppLink>
                  <AppLink
                    className="text-sm font-semibold leading-6 text-gray-900"
                    href="#"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </AppLink>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Reviews */}
            <section
              aria-labelledby="reviews-heading"
              className="border-t border-gray-200 pt-10 lg:pt-16"
            >
              <h2 className="sr-only" id="reviews-heading">
                Reviews
              </h2>

              <div className="space-y-10">
                {reviews.featured.map((review) => (
                  <div key={review.id} className="flex flex-col sm:flex-row">
                    <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        {review.title}
                      </h3>
                      <p className="sr-only">{review.rating} out of 5 stars</p>

                      <div
                        dangerouslySetInnerHTML={{ __html: review.content }}
                        className="mt-3 space-y-6 text-sm text-gray-600"
                      />
                    </div>

                    <div className="order-1 flex items-center sm:flex-col sm:items-start">
                      <img
                        alt={`${review.author}.`}
                        className="h-12 w-12 rounded-full"
                        src={review.avatarSrc}
                      />

                      <div className="ml-4 sm:ml-0 sm:mt-4">
                        <p className="text-sm font-medium text-gray-900">
                          {review.author}
                        </p>
                        <div className="mt-2 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                review.rating > rating
                                  ? "text-gray-900"
                                  : "text-gray-200",
                                "h-5 w-5 flex-shrink-0",
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <section
          aria-labelledby="related-products-heading"
          className="bg-white"
        >
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2
              className="text-xl font-bold tracking-tight text-gray-900"
              id="related-products-heading"
            >
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      src={product.imageSrc}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
