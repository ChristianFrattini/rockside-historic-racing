"use client";
import ContactForm from "@/app/components/front-components/ContactForm";
import Location from "@/app/components/front-components/Location";
import MapComponent from "@/app/components/front-components/Map";
import OpeningTimes from "@/app/components/front-components/OpeningTimes";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ContactUsPage() {
  return (
    <div className="py-12 lg:pt-[7rem] pt-[8.5rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className={"md:mb-10 mb-5 font-light md:text-4xl text-3xl"}>
        Contact Us
      </h2>
      <p className={"text-lg text-gray-700 font-semibold leading-6 mb-5"}>
        Reach out to us for any inquiries, and our team will get back to you as
        soon as possible.
      </p>

      <div className="flex flex-col lg:flex-row lg:space-x-10 lg:justify-between space-y-8 lg:space-y-0">
        <div className="w-full lg:w-[58%]">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-5 w-full lg:w-[42%]">
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
