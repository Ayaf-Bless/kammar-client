import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import {
  Checkbox,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { useState } from "react";
import classNames from "classnames";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import Badge from "../general/badge";

import { ExpressPackage, GigPackage } from "@/interface/gig";
import { formatDeliveryTime } from "@/utils/formatDeliveryTime";

interface Prop {
  packages: GigPackage[];
  username: string;
  expressPackage: ExpressPackage;
}

function PackageCard({ packages, username, expressPackage }: Prop) {
  const [selectedSize, setSelectedSize] = useState({
    name: "18L",
    description: "Perfect for a reasonable amount of snacks.",
  });

  return (
    <Card radius="sm">
      <CardHeader className="flex flex-col items-start px-6 pb-0 pt-5">
        <h4 className="text-large font-medium capitalize">select packages</h4>
        <p className="text-tiny text-default-600 dark:text-default-400">
          Find a package that&apos;s right for your need
        </p>
      </CardHeader>
      <CardBody>
        <RadioGroup
          className="mt-1 flex flex-col gap-4 "
          value={selectedSize}
          onChange={setSelectedSize}
        >
          {packages.map((pkg) => (
            <Radio
              key={pkg._id}
              aria-label={pkg.title}
              as="div"
              className={({ focus }) =>
                classNames(
                  focus ? "ring-2 ring-primary" : "",
                  "relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none",
                )
              }
              value={pkg}
            >
              {({ checked, focus }) => (
                <>
                  <p className="text-base flex gap-2 font-medium text-default-600 dark:text-default-600">
                    {pkg.title}
                    {pkg.bargain.enabled && (
                      <Badge type="warning">You can Haggle</Badge>
                    )}
                    {pkg.isRecommended && (
                      <Badge type="success">Recommended</Badge>
                    )}
                  </p>
                  <p className="text-3xl tracking-tight">${pkg.price}</p>
                  <p className="text-tiny text-default-600 dark:text-default-400">
                    {formatDeliveryTime(pkg.deliveryUnit, pkg.expectedDelivery)}
                  </p>
                  {pkg.whatsIncluded && (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <h3>
                            <DisclosureButton className="group relative flex w-full items-center justify-between pt-3 text-left">
                              <span
                                className={classNames(
                                  open ? "text-primary" : "text-default-500",
                                  "text-tiny dark:text-default-400",
                                )}
                              >
                                What is included
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    aria-hidden="true"
                                    className="block h-4 w-4 text-primary group-hover:text-primary"
                                  />
                                ) : (
                                  <PlusIcon
                                    aria-hidden="true"
                                    className="block h-4 w-4 text-default-400 group-hover:text-primary"
                                  />
                                )}
                              </span>
                            </DisclosureButton>
                          </h3>
                          <DisclosurePanel
                            as="div"
                            className="prose prose-sm pb-6 mt-2"
                          >
                            <ul className="text-tiny flex flex-col gap-1">
                              {pkg.whatsIncluded &&
                                pkg.whatsIncluded.map((el) => (
                                  <li key={el}>
                                    <span>- {el}</span>
                                  </li>
                                ))}
                            </ul>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  )}
                  <div
                    aria-hidden="true"
                    className={classNames(
                      checked ? "border-primary" : "border-transparent",
                      focus ? "border" : "border-2",
                      "pointer-events-none absolute -inset-px rounded-lg",
                    )}
                  />
                </>
              )}
            </Radio>
          ))}
        </RadioGroup>
        <Divider className="my-4" />
        <p className="pl-3 mb-2 text-tiny text-default-600 dark:text-default-400">
          Make <span className="text-pretty font-bold">{username}</span> work
          faster
        </p>
        {expressPackage && (
          <Checkbox
            aria-label={expressPackage.title}
            as="div"
            className={({ focus }) =>
              classNames(
                focus ? "ring-2 ring-primary" : "",
                "relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none",
              )
            }
            value={expressPackage}
          >
            {({ checked, focus }) => (
              <>
                <p className="text-base flex gap-2 font-medium text-gray-900">
                  {expressPackage.title}
                </p>
                <p className="text-3xl tracking-tight text-gray-900">
                  ${expressPackage.price}
                </p>
                <p className="text-tiny text-default-600 dark:text-default-400">
                  {formatDeliveryTime(
                    expressPackage.deliveryUnit,
                    expressPackage.expectedDelivery,
                  )}
                </p>

                <div
                  aria-hidden="true"
                  className={classNames(
                    checked ? "border-primary" : "border-transparent",
                    focus ? "border" : "border-2",
                    "pointer-events-none absolute -inset-px rounded-lg",
                  )}
                />
              </>
            )}
          </Checkbox>
        )}
      </CardBody>
      <CardFooter>
        <Button
          className="w-full"
          color="primary"
          endContent={<span className="font-bold">$10</span>}
          radius="sm"
          variant="solid"
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PackageCard;
