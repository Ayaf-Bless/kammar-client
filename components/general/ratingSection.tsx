import React from "react";
import StarIcon from "@heroicons/react/24/solid/StarIcon";
import classNames from "classnames";

import AppLink from "../apps/AppLink";

const formatRating = (rating: number) => rating.toFixed(1);

const RatingSection = ({
  rating,
}: {
  rating: { average: number; total: number };
}) => {
  if (rating.average === 0 && rating.total === 0) {
    return (
      <p className="text-sm font-bold">
        No reviews yet. Be the first to review!
      </p>
    );
  }

  return (
    <div className="flex items-center">
      <p className="text-sm font-bold">
        {formatRating(rating.average)}
        <span className="sr-only"> out of 5 stars</span>
      </p>
      <div className="ml-1 flex items-center">
        {[0, 1, 2, 3, 4].map((val) => (
          <StarIcon
            key={val}
            aria-hidden="true"
            className={classNames(
              rating.average > val
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-200 fill-gray-200",
              "h-5 w-5 flex-shrink-0",
            )}
          />
        ))}
      </div>
      <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
        ·
      </div>
      <div className="ml-4 flex">
        <AppLink
          className="text-sm font-medium text-secondary hover:text-secondary-700"
          href="#"
        >
          See all {rating.total} reviews
        </AppLink>
      </div>
    </div>
  );
};

export default RatingSection;
