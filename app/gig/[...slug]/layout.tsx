"use client";

import React, { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";

import Navbar from "@/components/general/navbar";
import Wrapper from "@/components/general/wrapper";
import { GigContext } from "@/contexts/GigContext";
import { Igig } from "@/interface/gig";
import { ISeller } from "@/interface/sellers";
import WithOptionalAuth from "@/libs/hoc/WithOptionalAuth";
import { useGetGigBySlugQuery } from "@/services/gig/gig.service";
import { useGetSellerByUsenameQuery } from "@/services/seller/seller.service";
import { WithChildren } from "@/types";

function GigLayout({ children }: WithChildren) {
  const { slug } = useParams();

  const sellerUsername = slug[0];
  const gigSlug = slug[1];

  const {
    data: gigData,
    isSuccess: isGigDataSuccess,
    isLoading: isGigLoading,
  } = useGetGigBySlugQuery(gigSlug);
  const {
    data: sellerData,
    isSuccess: isSellerDataSuccess,
    isLoading: isSellerLoading,
  } = useGetSellerByUsenameQuery(sellerUsername);

  const [gig, setGig] = useState<Igig | null>(null);
  const [seller, setSeller] = useState<ISeller | null>(null);

  useEffect(() => {
    if (isGigDataSuccess && gigData?.data) {
      setGig(gigData.data as Igig);
    } else if (!isGigLoading) {
      notFound();
    }
  }, [isGigDataSuccess, gigData, isGigLoading]);

  useEffect(() => {
    if (isSellerDataSuccess && sellerData?.data) {
      setSeller(sellerData.data as ISeller);
    } else if (!isSellerLoading) {
      notFound();
    }
  }, [isSellerDataSuccess, sellerData, isSellerLoading]);

  useEffect(() => {
    if (gig && seller && gig.seller && gig.seller.sub !== seller._id) {
      notFound();
    }
  }, [gig, seller]);

  const isLoading = isGigLoading || isSellerLoading;

  return (
    <GigContext.Provider
      value={{
        gig,
        seller,
        isLoading,
      }}
    >
      <WithOptionalAuth>
        <Navbar />
        <Wrapper>
          <section>{children}</section>
        </Wrapper>
      </WithOptionalAuth>
    </GigContext.Provider>
  );
}

export default GigLayout;
