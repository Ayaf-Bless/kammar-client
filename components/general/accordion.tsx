import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

interface AccordionProps {
  title: string;
  items: string[] | { _id: string; title: string }[];
}

const Accordion = ({ title, items }: AccordionProps) => {
  return (
    <Disclosure as="div" className="w-full">
      {({ open }) => (
        <>
          <h3>
            <Disclosure.Button className="group relative flex w-full items-center justify-between py-1 text-left">
              <span className={open ? "text-primary" : "text-default-500"}>
                {title}
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
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel
            animate={{ opacity: 1, height: "auto" }}
            as={motion.div}
            className="overflow-hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <ul className="text-tiny flex flex-col gap-1 py-2">
              {items.map((item, index) => (
                // Use index as key for string items
                <li
                  key={typeof item === "string" ? index : item._id}
                  className="flow-root"
                >
                  <Link className="-m-2 block p-2 text-gray-500" href="#">
                    {typeof item === "string" ? item : item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
