"use client";

import { Button, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Navbar from "./navbar";

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 dark:bg-gray-900 py-32 sm:py-36 lg:py-40 overflow-hidden min-h-max flex items-center relative">
        <div
          className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50"
        />
        <div
          className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50"
        />
        <div
          className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-emerald-400/5 right-0
  -translate-y-[40%] translate-x-[40%] top-0"
        >
          <div className="inset-[10%] rounded-full bg-gradient-to-l from-emerald-400/20">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-emerald-400/30" />
          </div>
        </div>
        <div
          className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-emerald-400/5 left-0
  translate-y-[40%] -translate-x-[40%] bottom-0"
        >
          <div className="inset-[10%] rounded-full bg-gradient-to-r from-emerald-400/40">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-emerald-400/50" />
          </div>
        </div>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center flex flex-col items-center space-y-10">
            <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
              Creativity in mind
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
              Same dynamics as in real life,
              <em className="text-primary"> but safer</em>
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-[70%]">
              Kammar ensures that every transaction mimics the authenticity of
              real-life interactions while prioritizing your security. Whether
              you&apos;re a buyer seeking quality services or a seller looking
              to expand your clientele, we provide a seamless and trustworthy
              environment for all your needs. With advanced safety measures and
              user-friendly features, enjoy peace of mind as you engage in a
              dynamic marketplace.
            </p>
            <div className="flex justify-center">
              <Button
                as={Link}
                className="bg-primary text-white border px-8 h-12"
                color="primary"
                href="/become_seller"
                radius="full"
                variant="bordered"
              >
                <span>Explore gigs</span>
                <svg
                  height="1em"
                  viewBox="0 0 28 28"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.705 4.289a1 1 0 1 0-1.406 1.422L21.675 13H4a1 1 0 1 0 0 2h17.673l-7.374 7.286a1 1 0 0 0 1.406 1.423l8.927-8.821a1.25 1.25 0 0 0 0-1.778z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
