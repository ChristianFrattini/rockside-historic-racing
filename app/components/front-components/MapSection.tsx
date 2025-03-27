"use client";
import React from "react";
import MapComponent from "./Map";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Location from "./Location";
import OpeningTimes from "./OpeningTimes";

export default function MapSection() {
  return (
    <div className={"flex flex-col w-full"}>
      {/* Title at the Top */}
      <h2
        className={
          "text-xl md:text-2xl font-semibold tracking-tight text-customBlack/80 mb-3"
        }
      >
        Contact Information
      </h2>

      {/* Main Content: Map & Details */}
      <div className={"flex flex-col lg:flex-row gap-16 w-full"}>
        {/* Left Section: MapComponent */}
        <div className={"w-full xl:w-[60%]"}>
          <MapComponent />
        </div>

        {/* Right Section */}
        <div className={"w-full xl:w-[30%] flex flex-col space-y-7"}>
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
    </div>
  );
}
