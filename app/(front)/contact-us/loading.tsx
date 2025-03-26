import { ContactFormSkeleton } from "@/app/components/front-components/ContactFormSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function loading() {
  return (
    <div className="py-12 lg:pt-[7rem] pt-[7.6rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Heading Skeleton */}
      <Skeleton className="h-10 w-1/4 mb-5 md:mb-10 rounded-lg" />

      {/* Main Content Skeleton */}
      <div className="flex flex-col lg:flex-row lg:space-x-10 lg:justify-between space-y-8 lg:space-y-0">
        {/* Contact Form Skeleton (Left Side) */}
        <div className="w-full lg:w-[60%]">
          <div className="space-y-4">
            <ContactFormSkeleton />
          </div>
        </div>

        {/* Location and Opening Times Skeleton (Right Side) */}
        <div className="flex flex-col gap-5 w-full lg:w-[35%]">
          <Skeleton className="h-[200px] w-full rounded-lg" />
          <Skeleton className="h-[150px] w-full rounded-lg" />
        </div>
      </div>

      {/* Map Section Skeleton */}
      <div className="mt-10 h-[40rem] w-full cursor-pointer">
        <Skeleton className="h-[38rem] w-full rounded-lg" />
        <Skeleton className="h-12 w-full mt-1 rounded-lg" />
      </div>
    </div>
  );
}
