"use client";

import GigDetails from "@/components/gig/gig-detail";
import Breadcrumbs from "@/components/general/breadcrumbs";
import { Igig } from "@/interface/gig";
import { useContext } from "react";
import { GigContext } from "@/contexts/GigContext";

const breadcrumbItems = [
  { text: "Category", link: "/category" },
  { text: "Subcategory", link: "/category/subcategory" },
  { text: "Product", link: "/category/subcategory/product" },
];

export default function GigItem() {
  const { gig } = useContext(GigContext);

  return (
    <div className="">
      <main className="pt-8 sm:pt-10">
        <Breadcrumbs breadcrumbs={breadcrumbItems} />

        <GigDetails gig={gig} />
      </main>
    </div>
  );
}
