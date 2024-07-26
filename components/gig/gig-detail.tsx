import Accordion from "../general/accordion";
import AppLink from "../apps/AppLink";
import RatingSection from "../general/ratingSection";
import Badge from "../general/badge";
import ReviewComponent from "../general/review-component";

import PackageCard from "./package-card";
import SwipeCarousel from "./swipeCarousel";

import { Igig } from "@/interface/gig";
import { addLineBreaks } from "@/utils/utils";

interface Prop {
  gig: Igig;
}

const GigDetails = ({ gig }: Prop) => {
  const {
    title,
    expressPackage,
    packages,
    seller,
    shortDescription,
    descriptionTemplate,
    rating,
    images,
    tags,
    reviews,
  } = gig;

  const renderSection = (heading: string, content?: string) =>
    content && (
      <section className="mt-10">
        <h2 className="text-sm capitalize font-medium light:text-default-600 dark:text-default-400">
          {heading}
        </h2>
        <div className="mt-4 space-y-6">
          <p className="text-sm text-default-700">{content}</p>
        </div>
      </section>
    );

  const renderListSection = (heading: string, items?: string[]) =>
    items &&
    items.length > 0 && (
      <div className="mt-10">
        <h3 className="text-sm font-medium light:text-default-600 dark:text-default-400">
          {heading}
        </h3>
        <div className="mt-4">
          <ul className="list-disc space-y-2 pl-4 text-sm">
            {items.map((item, index) => (
              <li key={index} className="text-gray-400">
                <span className="text-default-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

  return (
    <>
      <div className="mx-auto mt-6 ">
        <SwipeCarousel images={images} />
      </div>

      {tags && tags.length > 0 && (
        <section className="flex gap-2 mt-3">
          {tags.map((tag, i) => (
            <Badge key={i} type="info">
              {tag.toUpperCase()}
            </Badge>
          ))}
        </section>
      )}

      <div className="mx-auto px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-10">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 dark:lg:border-gray-600 lg:pr-8">
          {title && (
            <>
              <div className="flex items-center">
                <RatingSection rating={rating} />
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
              </h1>
            </>
          )}
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <div className="w-full">
            {expressPackage || packages ? (
              <PackageCard
                expressPackage={expressPackage}
                packages={packages}
                username={seller?.username}
              />
            ) : null}
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 dark:lg:border-gray-600 lg:pb-16 lg:pr-8 lg:pt-6">
          {shortDescription && (
            <div className="space-y-6">
              <p className="text-base text-default-700">{shortDescription}</p>
            </div>
          )}

          {renderSection("introduction", descriptionTemplate?.introduction)}
          {renderSection(
            "why choose this gig?",
            descriptionTemplate?.getAttention,
          )}
          {renderListSection(
            "What is Included",
            descriptionTemplate?.whatsIncluded,
          )}
          {renderListSection(
            "Unique selling points",
            descriptionTemplate?.uniqueSellingPoints,
          )}
          {renderListSection("Requirement", descriptionTemplate?.requirements)}
          {renderSection("process", descriptionTemplate?.process)}
          {renderListSection("Deliverable", descriptionTemplate?.deliverables)}

          {descriptionTemplate?.others && (
            <section className="mt-10">
              <h2 className="text-sm capitalize font-medium light:text-default-600 dark:text-default-400">
                {descriptionTemplate.others.title}
              </h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-default-700">
                  {descriptionTemplate.others.paragraph}
                </p>
              </div>
            </section>
          )}

          {descriptionTemplate && descriptionTemplate?.faqs?.length > 0 && (
            <section className="mt-10">
              <h2 className="text-sm capitalize font-medium light:text-default-600 dark:text-default-400">
                Frequently asked questions
              </h2>
              <div className="mt-4 space-y-6">
                {descriptionTemplate.faqs.map((faq) => (
                  <Accordion
                    key={faq.title}
                    items={[faq.content]}
                    title={faq.title}
                  />
                ))}
              </div>
            </section>
          )}

          {descriptionTemplate?.callToAction && (
            <div className="bg-primary-100 mt-10">
              <div className="mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: addLineBreaks(descriptionTemplate.callToAction, 5),
                  }}
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                />
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                  <AppLink
                    className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
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
          )}
        </div>
      </div>

      <div className="border-t pt-10 dark:border-default-200">
        <div>
          <h2 className="sr-only">Customer Reviews</h2>

          <div className="-my-10">
            {reviews.map((review, reviewIdx) => (
              <ReviewComponent
                key={review._id}
                review={review}
                reviewIdx={reviewIdx}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GigDetails;
