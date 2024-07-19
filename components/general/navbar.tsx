import Link from "next/link";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TabGroup,
  TabPanel,
  TabPanels,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import Logo from "../logo/Logo";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-inherit">
      {/* Mobile menu */}
      <Transition show={open}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0  z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative  dark:bg-black bg-white flex w-full max-w-xs flex-col overflow-y-auto  pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-default-700"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>

                {/* Links */}
                <TabGroup className="mt-2">
                  <div className="border-b border-default-400">
                    <div className="-mb-px flex space-x-8 px-4">Menu</div>
                  </div>
                  <TabPanels as={Fragment}>
                    <TabPanel className="space-y-10 px-4 pb-8 pt-10">
                      <div>
                        <p className="font-medium ">Category</p>
                        <ul
                          aria-labelledby={`-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          <li className="flow-root">
                            <Link
                              className="-m-2 block p-2 text-gray-500"
                              href="#"
                            >
                              Category Item
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      className="-m-2 block p-2 font-medium text-gray-900"
                      href="#"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      className="-m-2 block p-2 font-medium text-gray-900"
                      href="#"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className="relative dark:bg-black">
        <nav
          aria-label="Top"
          className="mx-auto max-w-[90%] px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-default-200 ">
            <div className="flex h-16 items-center">
              <button
                className="relative rounded-md bg-white dark:bg-black p-2 text-gray-400 lg:hidden"
                type="button"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Logo />
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Popover className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <PopoverButton
                            className={classNames(
                              open
                                ? "border-primary-500 text-primary-500"
                                : "border-transparent hover:text-default-700",
                              "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out",
                            )}
                          >
                            Categories
                          </PopoverButton>
                        </div>

                        <Transition
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <PopoverPanel className="absolute z-10 inset-x-0 top-full text-sm text-gray-500">
                            <div className="relative bg-white dark:bg-black dark:text-default-500 ">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                  {/* In case I want to add images */}
                                  {/* <div className="col-start-2 grid grid-cols-2 gap-x-8"></div> */}
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    <div>
                                      <p
                                        className="font-medium text-gray-900  dark:text-default-700 "
                                        id={`heading`}
                                      >
                                        category
                                      </p>
                                      <ul
                                        aria-labelledby={`-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li className="flex">
                                          <Link className="" href="#">
                                            name
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    className="text-sm font-medium  hover:text-gray-800"
                    href="/signin"
                  >
                    Sign in
                  </Link>
                  <span
                    aria-hidden="true"
                    className="h-6 w-px bg-default-200"
                  />
                  <Link
                    className="text-sm font-medium  hover:text-gray-800"
                    href="/signup"
                  >
                    Create account
                  </Link>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <Link
                    className="p-2 text-default-500 hover:text-default-700"
                    href="#"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link className="group -m-2 flex items-center p-2" href="#">
                    <HeartIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-default-500 group-hover:text-default-700"
                    />
                    <span className="ml-2 text-sm font-medium text-default-400 group-hover:text-default-700">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
