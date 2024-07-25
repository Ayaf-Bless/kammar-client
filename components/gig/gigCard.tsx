"use client";

import React from "react";
import { Avatar, Button, Image, Link, Skeleton } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import NextLink from "next/link";

import { cn } from "@/libs/general/cn";

export type GigItem = {
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
  isLoading?: boolean;
  removeWrapper?: boolean;
} & GigItem;

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
            src={"/2.jpeg"}
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
                    <span className="font-bold text-default-800 capitalize">
                      {username}
                    </span>
                  </div>
                  <h3 className="text-small font-semibold text-default-600">
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
