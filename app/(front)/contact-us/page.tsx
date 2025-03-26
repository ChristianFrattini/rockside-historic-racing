"use client";
import ContactForm from "@/app/components/front-components/ContactForm";
import Location from "@/app/components/front-components/Location";
import MapComponent from "@/app/components/front-components/Map";
import OpeningTimes from "@/app/components/front-components/OpeningTimes";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ContactUsPage() {
  return (
    <div className="py-12 lg:pt-[7rem] pt-[7.6rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className={"md:mb-10 mb-5 font-light md:text-4xl text-3xl"}>
        Contact Us
      </h2>

      <div className="flex flex-col lg:flex-row lg:space-x-10 lg:justify-between space-y-8 lg:space-y-0">
        <div className="w-full lg:w-[60%]">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-5 w-full lg:w-[35%]">
          <Location />
          <OpeningTimes />
        </div>
      </div>

      <div className={"mt-10 h-[40rem] w-full cursor-pointer"}>
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
