"use client";

import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import Navbar from "../general/navbar";
import Wrapper from "../general/wrapper";
import AppLink from "../apps/AppLink";

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <section>
          <div className="relative isolate">
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 dark:stroke-default-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            >
              <defs>
                <pattern
                  height={200}
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  patternUnits="userSpaceOnUse"
                  width={200}
                  x="50%"
                  y={-1}
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg
                className="overflow-visible fill-gray-50 dark:fill-default-200"
                x="50%"
                y={-1}
              >
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                height="100%"
                strokeWidth={0}
                width="100%"
              />
            </svg>
            <div
              aria-hidden="true"
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                }}
              />
            </div>
            <div className="overflow-hidden">
              <div className=" px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="gap-x-14 justify-between lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="relative w-full lg:shrink-0 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-normal sm:text-6xl">
                      Same dynamics as in real life,{" "}
                      <span className="text-primary italic">but safer</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
                      Kammar ensures that every transaction mimics the
                      authenticity of real-life interactions while prioritizing
                      your security. Whether you&apos;re a buyer seeking quality
                      services or a seller looking to expand your clientele, we
                      provide a seamless and trustworthy environment for all
                      your needs. With advanced safety measures and
                      user-friendly features, enjoy peace of mind as you engage
                      in a dynamic marketplace.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <AppLink
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        href="#"
                      >
                        Join as Seller
                      </AppLink>
                      <AppLink
                        className="text-sm dark:text-white text-black font-semibold leading-6"
                        href="#"
                      >
                        Explore gigs <span aria-hidden="true">→</span>
                      </AppLink>
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <Image
                          alt=""
                          as={NextImage}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          height={500}
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          width={300}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <Image
                          alt=""
                          as={NextImage}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          height={500}
                          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          width={300}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          alt=""
                          as={NextImage}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          height={500}
                          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                          width={300}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <Image
                          alt=""
                          as={NextImage}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          height={500}
                          src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                          width={300}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          alt=""
                          as={NextImage}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          height={500}
                          src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          width={300}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
