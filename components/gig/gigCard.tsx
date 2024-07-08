"use client";

import React from "react";
import { Avatar, Button, Image, Link, Skeleton } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import NextLink from "next/link";

import { cn } from "@/libs/general/cn";

// const gigData = {
//   _id: "6679b0b9b853321d1739d18d",
//   title: "I will make a power presetation for your product",
//   seller: {
//     sub: "6679adb0fcb17c599c878fa7",
//     username: "user3",
//     verified: "false",
//     status: "active",
//     _id: "6679b0b9b853321d1739d18e",
//   },
//   slug: "amazing-gig-service",
//   shortDescription: "this is a short description of the amazing gig service.",
//   targetCity: "New York",
//   targetCountry: "USA",
//   tags: ["design", "art", "graphics"],
//   images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
//   descriptionTemplate: {
//     others: {
//       title: "Additional Info",
//       paragraph: "Contact me for more details.",
//     },
//     getAttention: "get the best design services.",
//     introduction: "i provide high-quality design services.",
//     whatsIncluded: ["Logo design", "Flyer design", "Poster design"],
//     uniqueSellingPoints: ["Fast delivery", "High quality"],
//     requirements: [
//       "Provide all necessary information",
//       "Be clear about your expectations",
//     ],
//     process:
//       "First, we discuss the project. Then, I create a draft. Finally, we make revisions.",
//     callToAction: "Order now and get started!",
//     _id: "6679b0b9b853321d1739d18f",
//   },
//   status: "published",
//   isFeatured: true,
//   rating: {
//     ratingsCount: 0,
//     ratingSum: 0,
//     five: {
//       value: 0,
//       count: 0,
//       _id: "6679b0b9b853321d1739d190",
//     },
//     four: {
//       value: 0,
//       count: 0,
//       _id: "6679b0b9b853321d1739d191",
//     },
//     three: {
//       value: 0,
//       count: 0,
//       _id: "6679b0b9b853321d1739d192",
//     },
//     two: {
//       value: 0,
//       count: 0,
//       _id: "6679b0b9b853321d1739d193",
//     },
//     one: {
//       value: 0,
//       count: 0,
//       _id: "6679b0b9b853321d1739d194",
//     },
//     _id: "6679b0b9b853321d1739d195",
//     createdAt: "2024-06-24T17:45:29.614Z",
//     updatedAt: "2024-06-24T17:45:29.614Z",
//   },
//   packages: [
//     {
//       bargain: {
//         enabled: true,
//         minPrice: 10,
//       },
//       title: "basic",
//       expectedDelivery: 5,
//       price: 15,
//       isRecommended: false,
//       deliveryUnit: "D",
//       extras: [
//         {
//           title: "Extra Design",
//           price: 5,
//           description: "Add an extra design to your package.",
//           _id: "6679b0b9b853321d1739d197",
//         },
//       ],
//       _id: "6679b0b9b853321d1739d196",
//     },
//     {
//       bargain: {
//         enabled: false,
//         minPrice: 25,
//       },
//       title: "Standard",
//       expectedDelivery: 40,
//       price: 30,
//       isRecommended: true,
//       deliveryUnit: "D",
//       extras: [
//         {
//           title: "Extra Revision",
//           price: 10,
//           description: "Add an extra revision to your package.",
//           _id: "6679b0b9b853321d1739d199",
//         },
//       ],
//       _id: "6679b0b9b853321d1739d198",
//     },
//     {
//       bargain: {
//         enabled: false,
//         minPrice: 40,
//       },
//       title: "Premium",
//       expectedDelivery: 30,
//       price: 50,
//       isRecommended: false,
//       deliveryUnit: "D",
//       extras: [
//         {
//           title: "Express Delivery",
//           price: 20,
//           description: "Get your order delivered within 24 hours.",
//           _id: "6679b0b9b853321d1739d19b",
//         },
//       ],
//       _id: "6679b0b9b853321d1739d19a",
//     },
//   ],
//   isFlash: false,
//   category: "6679a1e571d6be2b12512599",
//   subCategory: {
//     title: "logo design",
//     shortDescription:
//       "creating unique and memorable logos for brands and businesses.",
//     _id: "6679a1e571d6be2b1251259a",
//   },
//   faqs: [
//     {
//       title: "What do you need from me?",
//       content: "I need detailed information about your project.",
//       _id: "6679b0b9b853321d1739d19d",
//     },
//     {
//       title: "How long does it take?",
//       content: "Delivery time depends on the package you choose.",
//       _id: "6679b0b9b853321d1739d19e",
//     },
//   ],
//   createdAt: "2024-06-24T17:45:29.634Z",
//   updatedAt: "2024-06-24T17:45:29.634Z",
//   __v: 0,
// };

export type PlaceListItemColor = {
  name: string;
  hex: string;
};

export type PlaceItem = {
  id: string;
  title: string;
  href: string;
  price: number;
  //   isNew?: boolean;
  rating: number;
  ratingCount: number;
  shortDescription: string;
  images: string;
  username: string;
};

export type PlaceListItemProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "id"
> & {
  isPopular?: boolean;
  isLoading?: boolean;
  removeWrapper?: boolean;
} & PlaceItem;

const GigCard = React.forwardRef<HTMLDivElement, PlaceListItemProps>(
  (
    {
      title,
      price,
      rating,
      ratingCount,
      isLoading,
      shortDescription,
      images,
      removeWrapper,
      href,
      username,
      ...props
    },
    ref,
  ) => {
    const [isLiked, setIsLiked] = React.useState(false);

    return (
      <Link as={NextLink} href={href}>
        <div
          ref={ref}
          className={cn("relative flex w-full flex-none flex-col gap-3", {
            "rounded-none bg-background shadow-none": removeWrapper,
          })}
          {...props}
        >
          <Button
            isIconOnly
            className="absolute right-3 top-3 z-20 bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
            radius="full"
            size="sm"
            variant="flat"
            onPress={() => setIsLiked(!isLiked)}
          >
            <Icon
              className={cn("text-default-900/50", {
                "text-danger-400": isLiked,
              })}
              icon="solar:heart-bold"
              width={16}
            />
          </Button>
          <Image
            isBlurred
            isZoomed
            alt={title}
            className="aspect-square w-full hover:scale-110"
            isLoading={isLoading}
            src={
              "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/1.jpeg"
            }
          />

          <div className="mt-1 flex flex-col gap-2 px-1">
            {isLoading ? (
              <div className="my-1 flex flex-col gap-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="mt-3 w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="mt-4 w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
              </div>
            ) : (
              <>
                <div className="flex items-start flex-col justify-between gap-1">
                  <div className="flex flex-row items-center gap-3">
                    <button className="mt-1 h-8 w-8 transition-transform">
                      <Avatar
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a04258114e29526708c"
                      />
                    </button>
                    <span className="font-bold">{username}</span>
                  </div>
                  <h3 className="text-small font-semibold text-default-700">
                    {title}
                  </h3>
                </div>
                {shortDescription ? (
                  <p className="text-small text-default-500">
                    {shortDescription}
                  </p>
                ) : null}
                {rating !== undefined ? (
                  <div className="flex items-center gap-1">
                    <Icon
                      className="text-default-500"
                      icon="solar:star-bold"
                      width={16}
                    />
                    <span className="text-small text-default-500">{5}</span>
                  </div>
                ) : null}
                <p className="text-small font-medium text-default-500">
                  from: <span className="font-bold">${price}</span>{" "}
                </p>
              </>
            )}
          </div>
        </div>
      </Link>
    );
  },
);

GigCard.displayName = "GigCard";

export default GigCard;
