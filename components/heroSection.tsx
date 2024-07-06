"use client";

import { Link } from "@nextui-org/react";
import NextLink from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-gradient-to-br from-emerald-800 opacity-20 blur-2xl dark:from-emerald-800 dark:invisible dark:opacity-40" />
        <div className="h-20 w-3/5 bg-gradient-to-r from-emerald-400 opacity-40 blur-2xl dark:bg-emerald-950 dark:opacity-40" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-full opacity-50 blur-2xl" />
      <div className="relative mx-auto pt-32 pb-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
        <h1 className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
          Experience the same buying and selling dynamics as in real life,
          <em className="text-emerald-800"> but safer</em>
        </h1>
        <p className="text-gray-800 dark:text-gray-300 mx-auto max-w-2xl">
          Kammar ensures that every transaction mimics the authenticity of
          real-life interactions while prioritizing your security. Whether
          you&apos;re a buyer seeking quality services or a seller looking to
          expand your clientele, we provide a seamless and trustworthy
          environment for all your needs. With advanced safety measures and
          user-friendly features, enjoy peace of mind as you engage in a dynamic
          marketplace.
        </p>
        <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
          <Link
            as={NextLink}
            className="flex items-center h-12 px-6  bg-emerald-800 text-white border border-emerald-800"
            href="#"
          >
            Hire us Now
          </Link>
          <Link
            className="flex items-center h-12 px-6 bg-gray-100 dark:bg-gray-900 text-emerald-800 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
            href="#"
          >
            Learn more
          </Link>
        </div>
        <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-800 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
          <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
            <div className="w-10">
              <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                Explore Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Browse through all services from our sellers and choose the one
                that fits your needs and pleases you the most.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
            <div className="w-10">
              <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                Communicate and Negotiate
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Before the seller starts working on your order, you might have
                some questions. Feel free to ask and negotiate as needed.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
            <div className="w-10">
              <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                Secure Payment
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                The seller will receive payment only after you have validated
                the product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
