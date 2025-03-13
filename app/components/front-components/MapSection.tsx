"use client";
import React from "react";
import MapComponent from "./Map";
import { Clock, MapPinned } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Location from "./Location";
import OpeningTimes from "./OpeningTimes";

export default function MapSection() {
  return (
    <div className={"flex flex-col lg:flex-row gap-16 w-full "}>
      {/* MapComponent takes 70% width on large devices */}
      <div className={"w-full lg:w-[60%]"}>
        <MapComponent />
      </div>

      <div className={"w-full lg:w-[30%] flex flex-col   space-y-7"}>
        <Location />
        <OpeningTimes />

        <div className={"space-x-4 mt-7 flex items-center justify-center"}>
          <Button
            variant={"default"}
            className={"tracking-wide lg:text-base sm:text-xs"}
            asChild
          >
            <Link href="/contact-us"> Get In Touch Now!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
