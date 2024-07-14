"use client";

import type { RadioProps } from "@nextui-org/react";

import React from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";

import { cn } from "@/libs/general/cn";
import { formatDeliveryTime } from "@/utils/formatDeliveryTime";

export type PlanRadioProps = RadioProps & {
  icon?: React.ReactNode;
  price: number;
  label?: string;
  IsBargainable?: boolean;
  deliveryUnit: string;
  expectedDelivery: number;
};

const PlanCheck = React.forwardRef<HTMLInputElement, PlanRadioProps>(
  (
    {
      icon,
      price,
      label,
      className,
      IsBargainable,
      deliveryUnit,
      expectedDelivery,
      classNames = {},
      ...props
    },
    ref,
  ) => (
    <CheckboxGroup>
      <Checkbox
        {...props}
        ref={ref}
        classNames={{
          ...classNames,
          base: cn(
            "inline-flex m-0 px-3 py-4 max-w-[100%] items-center justify-between",
            "flex-row-reverse w-full cursor-pointer rounded-sm 3 border-medium border-default-100",
            "data-[selected=true]:border-secondary data-[selected=true]:bg-secondary-50",
            classNames?.base,
            className,
          ),
          wrapper: cn(
            "group-data-[focus-visible=true]:ring-secondary",
            classNames?.wrapper,
          ),
        }}
        color="secondary"
        radius="sm"
      >
        <div className="flex w-full items-center gap-3">
          <div className="item-center flex rounded-full bg-secondary-50 p-2 group-data-[selected=true]:bg-secondary-100">
            {icon}
          </div>
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center gap-1">
              <p className="text-small">{label}</p>
              <span className="mt-0.5 text-tiny text-default-500">
                ${price}
              </span>
              <span className="mt-0.5 text-tiny text-default-500 text-secondary">
                {IsBargainable && "You can Bargain"}
              </span>
            </div>
            <p className="text-tiny text-default-400">
              {formatDeliveryTime(deliveryUnit, expectedDelivery)}
            </p>
          </div>
        </div>
      </Checkbox>
    </CheckboxGroup>
  ),
);

PlanCheck.displayName = "PlanCheck";

export default PlanCheck;
