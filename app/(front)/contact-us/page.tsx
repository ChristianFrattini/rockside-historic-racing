"use client";
import ContactForm from "@/app/components/front-components/ContactForm";
import Location from "@/app/components/front-components/Location";
import MapComponent from "@/app/components/front-components/Map";
import OpeningTimes from "@/app/components/front-components/OpeningTimes";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ContactUsPage() {
  return (
    <div className="py-12 pt-[6.7rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:space-x-10 lg:justify-between space-y-8 lg:space-y-0">
        <div className="flex flex-col gap-5 w-full lg:w-auto ">
          <Location />
          <OpeningTimes />
        </div>

        <div className="w-full lg:w-auto">
          <ContactForm />
        </div>
      </div>

      <div className={" mt-10 h-[40rem] w-full cursor-pointer"}>
        <MapComponent />
        <Button
          variant={"secondary"}
          className={"w-full mt-1 text-xl"}
          onClick={() => {
            const latitude = 54.96;
            const longitude = -1.6;
            const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
            window.open(url, "_blank"); // Opens in a new tab
          }}
        >
          Get directions
        </Button>
      </div>
    </div>
  );
}
