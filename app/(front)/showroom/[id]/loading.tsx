import { ContactFormSkeleton } from "@/app/components/front-components/ContactFormSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-8 py-12 pt-[7rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-8 items-start">
        {/* Image Slider Skeleton */}
        <div className="w-full overflow-hidden">
          <Skeleton className="h-[600px] w-full rounded-lg" />
        </div>

        {/* Name, Brand, and Price Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4 rounded-lg" />
          <Skeleton className="h-6 w-1/2 rounded-lg" />
          <Skeleton className="h-8 w-1/3 rounded-lg" />
          <div className="hidden md:hidden lg:block">
            <div className="mt-8">
              <Skeleton className="h-[400px] w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Description Section Skeleton */}
      <div className="w-full space-y-3">
        <Skeleton className="h-8 w-1/4 rounded-lg" />
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4 rounded-lg" />
        <Skeleton className="h-4 w-2/3 rounded-lg" />
      </div>

      {/* Contact Form Skeleton for Mobile */}
      <div className="lg:hidden">
        <Skeleton className="h-[400px] w-full rounded-lg" />
      </div>

      {/* Featured Vehicles Skeleton */}
      <div className="mt-7 mx-auto max-w-7xl">
        <Skeleton className="h-[300px] w-full rounded-lg" />
      </div>
    </div>
  );
}
