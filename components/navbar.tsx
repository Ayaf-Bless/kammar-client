"use client";

import React from "react";
import {
  Navbar as NextUINav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Popover,
  PopoverTrigger,
  Badge,
  PopoverContent,
  Avatar,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

import Logo from "./logo/Logo";
import { ThemeSwitch } from "./theme-switch";

import { useCurrentUser } from "@/libs/hooks/useCurrentUser";
import NotificationsCard from "./notifications-card";

export default function Navbar() {
  const currentUser = useCurrentUser();

  return (
    <div className="">
      <NextUINav
        isBordered
        classNames={{
          item: "data-[active=true]:text-primary",
          wrapper: "px-4 sm:px-6 w-full max-w-[90%] container",
        }}
        height="64px"
      >
        <NavbarBrand>
          <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
          <Logo />
          <NavbarItem className="hidden lg:flex ml-2">
            <Dropdown radius="none">
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="py-2 bg-transparent data-[hover=true]:bg-transparent"
                    radius="none"
                    variant="bordered"
                  >
                    Categories
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="category"
                className="w-full"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem key="autoscaling">
                  <h1>Heee</h1>
                </DropdownItem>
                <DropdownItem key="usage_metrics">Usage Metrics</DropdownItem>
                <DropdownItem key="production_ready">
                  Production Ready
                </DropdownItem>
                <DropdownItem key="99_uptime">+99% Uptime</DropdownItem>
                <DropdownItem key="supreme_support">
                  +Supreme Support
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarBrand>

        {/* Right Menu */}
        <NavbarContent
          className="ml-auto h-12 max-w-fit items-center gap-0"
          justify="end"
        >
          <NavbarItem className="mr-2 hidden lg:flex">
            <Input
              aria-label="Search"
              classNames={{
                inputWrapper: "bg-content2 dark:bg-content1",
              }}
              placeholder="Search..."
              radius="full"
              startContent={
                <Icon
                  className="text-default-500"
                  icon="solar:magnifer-linear"
                  width={20}
                />
              }
              variant="bordered"
            />
          </NavbarItem>
          {/* Mobile search */}
          <NavbarItem className="lg:hidden">
            <Button isIconOnly radius="full" variant="light">
              <Icon
                className="text-default-500"
                icon="solar:magnifer-linear"
                width={20}
              />
            </Button>
          </NavbarItem>
          {/* Theme change */}
          <NavbarItem className="hidden lg:flex">
            <ThemeSwitch />
          </NavbarItem>

          {currentUser ? (
            <>
              <NavbarItem className="hidden lg:flex">
                <Button isIconOnly radius="full" variant="light">
                  <Icon
                    className="text-default-500"
                    icon="solar:settings-linear"
                    width={24}
                  />
                </Button>
              </NavbarItem>

              <NavbarItem className="flex">
                <Popover offset={12} placement="bottom-end">
                  <PopoverTrigger>
                    <Button
                      disableRipple
                      isIconOnly
                      className="overflow-visible"
                      radius="full"
                      variant="light"
                    >
                      <Badge
                        className="bg-primary"
                        content="5"
                        showOutline={false}
                        size="md"
                      >
                        <Icon
                          className="text-default-500"
                          icon="solar:bell-linear"
                          width={22}
                        />
                      </Badge>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
                    <NotificationsCard className="w-full shadow-none" />
                  </PopoverContent>
                </Popover>
              </NavbarItem>

              <NavbarItem className="px-2">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <button className="mt-1 h-8 w-8 transition-transform">
                      <Badge
                        className="bg-primary"
                        content=""
                        placement="bottom-right"
                        shape="circle"
                      >
                        <Avatar
                          size="sm"
                          src="https://i.pravatar.cc/150?u=a04258114e29526708c"
                        />
                      </Badge>
                    </button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">johndoe@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">
                      Team Settings
                    </DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">
                      Configurations
                    </DropdownItem>
                    <DropdownItem key="help_and_feedback">
                      Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            </>
          ) : (
            <>
              <div className="flex flex-row gap-2 mx-2">
                <NavbarItem>
                  <Button
                    as={Link}
                    // className="text-primary"
                    // color="primary"
                    href="/signup"
                    radius="none"
                    variant="bordered"
                  >
                    Sign Up
                  </Button>
                </NavbarItem>

                <NavbarItem>
                  <Button
                    as={Link}
                    // className="text-primary"
                    // color="primary"
                    href="/signin"
                    radius="none"
                    variant="bordered"
                  >
                    Sign In
                  </Button>
                </NavbarItem>
              </div>
            </>
          )}

          <NavbarItem>
            <Button
              as={Link}
              className="dark:text-white light:text-primary border"
              color="primary"
              href="/become_seller"
              radius="none"
              variant="bordered"
            >
              <span>Become a seller</span>
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
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Dashboard
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive>
            <Link
              aria-current="page"
              className="w-full"
              color="primary"
              href="#"
            >
              Deployments
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Analytics
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Team
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Settings
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NextUINav>
    </div>
  );
}
