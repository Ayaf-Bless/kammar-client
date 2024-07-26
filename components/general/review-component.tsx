import React from "react";
import StarIcon from "@heroicons/react/24/solid/StarIcon";
import classNames from "classnames";

import { formatDate } from "@/utils/time";

type Reviewer = {
  username: string;
  profilePicture: string;
};

type Review = {
  _id: string;
  reviewer: Reviewer;
  createdAt: Date;
  rating: number;
  comment: string;
};

type ReviewProps = {
  review: Review;
  reviewIdx: number;
};

const ReviewComponent: React.FC<ReviewProps> = ({ review, reviewIdx }) => {
  return (
    <div key={review._id} className="flex space-x-4 text-sm text-gray-500">
      <div className="flex-none py-10">
        <img
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
          src={review.reviewer.profilePicture}
        />
      </div>
      <div
        className={classNames(
          reviewIdx === 0
            ? ""
            : "border-t border-gray-200 dark:border-default-200",
          "flex-1 py-10",
        )}
      >
        <h3 className="font-medium">{review.reviewer.username}</h3>
        <p>
          <time dateTime={review.createdAt.toISOString()}>
            {formatDate(new Date(review.createdAt))}
          </time>
        </p>

        <div className="mt-4 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              aria-hidden="true"
              className={classNames(
                review.rating > rating
                  ? "text-yellow-400"
                  : "text-gray-300 dark:text-default-200",
                "h-5 w-5 flex-shrink-0",
              )}
            />
          ))}
        </div>
        <p className="sr-only">{review.rating} out of 5 stars</p>

        <div
          dangerouslySetInnerHTML={{ __html: review.comment }}
          className="prose prose-sm mt-4 max-w-none text-gray-500 dark:text-default-500"
        />
      </div>
    </div>
  );
};

export default ReviewComponent;
