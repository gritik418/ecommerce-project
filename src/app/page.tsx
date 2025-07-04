"use client";

import ProductListing from "@/components/ProductListing/ProductListing";
import ProductListingFallback from "@/components/ProductListingFallback/ProductListingFallback";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<ProductListingFallback />}>
      <ProductListing />
    </Suspense>
  );
}
