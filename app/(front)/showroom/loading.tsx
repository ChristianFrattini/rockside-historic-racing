import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="py-12 lg:pt-[7rem] pt-[8.5rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Skeleton className="h-10 w-48 md:mb-10 mb-1" />{" "}
      <Skeleton className="h-5 w-full mb-4" />{" "}
      <Skeleton className="h-4 w-full md:mb-10 mb-5" />{" "}
      <Skeleton className="h-4 w-3/4 md:mb-10 mb-5" />{" "}
      <Skeleton className="w-full h-[1px] md:mb-10 mb-5" />{" "}
      <div className="flex md:flex-row flex-col md:justify-between gap-5">
        <div className="flex items-center justify-center">
          <Skeleton className="h-10 w-[15rem]" />{" "}
        </div>
        <div className="flex items-center justify-center">
          <Skeleton className="h-10 w-[15rem]" />{" "}
        </div>
        <div className="flex items-center justify-center">
          <Skeleton className="h-10 w-[15rem]" />{" "}
        </div>
        <div className="flex items-center justify-center">
          <Skeleton className="h-6 w-20" />{" "}
          <Skeleton className="h-6 w-10 ml-5" />{" "}
        </div>
      </div>
      <Skeleton className="w-full h-[1px] md:my-10 my-5" />{" "}
      <div className="mt-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-10 mx-5">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-full rounded-lg" />{" "}
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />{" "}
            <Skeleton className="h-4 w-2/3" />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
