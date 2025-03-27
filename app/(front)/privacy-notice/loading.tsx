import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function loading() {
  return (
    <div className="py-12 lg:pt-[7rem] pt-[8.5rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Skeleton className={"w-full h-40"} />
      <Skeleton className={"w-full h-40"} />
      <Skeleton className={"w-full h-40"} />
      <Skeleton className={"w-full h-40"} />
    </div>
  );
}
