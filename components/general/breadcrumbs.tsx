// components/AppBreadcrumbs.js
import React from "react";
import { useRouter } from "next/router";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

// Example icons for demonstration
import { HandShackIcon } from "./icons";
import { HomeIcon } from "./icons";

import { generateBreadcrumbItems } from "@/utils/breadcrumbs";

const iconsMap: { [key: string]: React.ReactElement } = {
  Home: <HomeIcon />,
  Gig: <HandShackIcon />,
};

export default function AppBreadcrumbs() {
  const router = useRouter();
  const { pathname } = router;
  const breadcrumbItems = generateBreadcrumbItems(pathname);

  return (
    <Breadcrumbs>
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbItem key={item.href} startContent={iconsMap[item.label]}>
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
