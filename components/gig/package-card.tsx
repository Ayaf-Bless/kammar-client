import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  RadioGroup,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

import PlanRadio from "./plan-radio";
import PlanCheck from "./plan-check";

import { ExpressPackage, GigPackage } from "@/interface/gig";

interface Prop {
  packages: GigPackage[];
  username: string;
  expressPackage: ExpressPackage;
}

function PackageCard({ packages, username, expressPackage }: Prop) {
  return (
    <Card radius="sm">
      <CardHeader className="flex flex-col items-start px-6 pb-0 pt-5">
        <h4 className="text-large font-medium">Select your plan</h4>
        <p className="text-tiny text-default-400">
          Find a package that&apos;s right for your need
        </p>
      </CardHeader>
      <CardBody>
        <RadioGroup aria-label="packages" classNames={{ wrapper: "gap-3" }}>
          {packages.map((pkg) => {
            return (
              <PlanRadio
                key={pkg._id}
                IsBargainable={pkg.bargain.enabled}
                deliveryUnit={pkg.deliveryUnit}
                expectedDelivery={pkg.expectedDelivery}
                icon={
                  <Icon
                    className="text-primary"
                    icon="solar:box-minimalistic-linear"
                    width={18}
                  />
                }
                isRecommanded={pkg.isRecommended}
                label={pkg.title}
                monthlyPrice={pkg.price}
                value={pkg.title.toLowerCase().replace(" ", "-")}
                whatsIncluded={pkg.whatsIncluded}
              />
            );
          })}
        </RadioGroup>
        <Divider className="my-4" />
        <p className="pl-3 mb-2 text-tiny text-default-600 dark:text-default-400">
          Make <span className="text-secondary">{username}</span> work faster
        </p>
        {expressPackage && (
          <PlanCheck
            deliveryUnit={expressPackage.deliveryUnit}
            expectedDelivery={expressPackage.expectedDelivery}
            icon={
              <Icon
                className="text-primary"
                icon="solar:box-minimalistic-linear"
                width={18}
              />
            }
            label={expressPackage.title}
            price={expressPackage.price}
            value="express"
          />
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
