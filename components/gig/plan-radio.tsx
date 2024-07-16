"use client";

import type { RadioProps } from "@nextui-org/react";

import React, { useState } from "react";
import { Chip, Radio } from "@nextui-org/react";
import { motion } from "framer-motion";

import { cn } from "@/libs/general/cn";
import { formatDeliveryTime } from "@/utils/formatDeliveryTime";

export type PlanRadioProps = RadioProps & {
  icon?: React.ReactNode;
  monthlyPrice?: number;
  label?: string;
  IsBargainable?: boolean;
  deliveryUnit: string;
  expectedDelivery: number;
  whatsIncluded?: string[];
  isRecommanded?: boolean;
};

const PlanRadio = React.forwardRef<HTMLInputElement, PlanRadioProps>(
  (
    {
      icon,
      monthlyPrice,
      label,
      className,
      IsBargainable,
      deliveryUnit,
      expectedDelivery,
      whatsIncluded,
      isRecommanded,
      classNames = {},
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="flex flex-col gap-1">
        <Radio
          {...props}
          ref={ref}
          classNames={{
            ...classNames,
            base: cn(
              "inline-flex m-0 px-3 py-4 max-w-[100%] items-center justify-between",
              "flex-row-reverse w-full cursor-pointer rounded-sm 3 border-medium border-default-100",
              "data-[selected=true]:border-primary data-[selected=true]:bg-secondary-50",
              classNames?.base,
              className,
            ),
            wrapper: cn(
              "group-data-[focus-visible=true]:ring-primary",
              classNames?.wrapper,
            ),
            labelWrapper: cn("ml-0", classNames?.labelWrapper),
          }}
          color="primary"
        >
          <div className="flex w-full items-center gap-3">
            <div className="item-center flex rounded-full bg-primary-50 p-2 group-data-[selected=true]:bg-primary-100">
              {icon}
            </div>
            <div className="flex w-full  flex-col gap-1">
              <div className="flex items-end gap-1">
                <p className="text-tiny text-default-600 dark:text-default-500">
                  {label}
                </p>
                <span className="mt-0.5 text-small font-bold text-default-500">
                  {monthlyPrice !== undefined && ` $${monthlyPrice}`}
                </span>
                <span className="mt-0.5 text-tiny  text-secondary">
                  {IsBargainable && "You Can Bargain"}
                </span>
                {isRecommanded && (
                  <Chip color="primary" size="md">
                    Recommended
                  </Chip>
                )}
              </div>
              <p className="text-tiny text-default-600 dark:text-default-400">
                {formatDeliveryTime(deliveryUnit, expectedDelivery)}
              </p>
            </div>
          </div>
        </Radio>
        {whatsIncluded && (
          <div data-accordion="collapse" id="accordion-collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                aria-controls="accordion-collapse-body-1"
                aria-expanded={isOpen}
                className="flex items-center justify-between w-full font-bold text-tiny text-default-600 dark:text-default-400 px-3 gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                type="button"
                onClick={toggleAccordion}
              >
                <span>What&apos;s is Included</span>
                <motion.svg
                  data-accordion-icon
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  aria-hidden="true"
                  className="w-3 h-3 shrink-0"
                  fill="none"
                  initial={{ rotate: 0 }}
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5 5 1 1 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </motion.svg>
              </button>
            </h2>
            <motion.div
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              aria-labelledby="accordion-collapse-heading-1"
              className="overflow-hidden"
              id="accordion-collapse-body-1"
              initial={false}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-2 pl-4">
                {whatsIncluded.map((point, i) => (
                  <li
                    key={i}
                    className="text-tiny text-default-600 dark:text-default-400 flex items-center gap-3"
                  >
                    <span className="h-1 w-1 rounded-lg bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    );
  },
);

PlanRadio.displayName = "PlanRadio";

export default PlanRadio;
