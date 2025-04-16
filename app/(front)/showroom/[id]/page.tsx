import ContactForm from "@/app/components/front-components/ContactForm";
import FeaturedVehicles from "@/app/components/front-components/FeaturedVehicles";
import ImageSlider from "@/app/components/front-components/ImageSlider";
import SpareLink from "@/app/components/front-components/SpareLink";
import prisma from "@/app/lib/db";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

async function getData(id: string) {
  const data = await prisma.vehicle.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      brand: true,
      year: true,
      description: true,
      price: true,
      images: true,
      id: true,
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

export default async function VehicleRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //console.log(params);
  const { id } = await params;
  noStore();
  const data = await getData(id);
  return (
    <>
      <div className="flex flex-col gap-8 py-12 lg:pt-[7rem] pt-[8.5rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-8 items-start">
          {/* Image Slider */}
          <div className="w-full overflow-hidden ">
            <ImageSlider images={data.images} />
          </div>

          {/* Name, Brand, and Price */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {data.name} ({data.year})
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-gray-600">
              {data.brand}
            </h2>
            {data.price === 0 ? (
              <div className={"flex gap-5 items-center "}>
                <p className="text-xl md:text-3xl font-bold text-gray-900">
                  P.O.A.
                </p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 flex gap-1">
                      <Info className="w-6 h-6 text-gray-700" /> Info
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="center"
                      className="max-w-xs rounded-xl bg-white text-gray-800 shadow-lg border border-gray-300 p-4"
                    >
                      <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium">
                          Price On Application
                        </p>
                        <p className="text-xs leading-relaxed tracking-wide text-gray-600">
                          The price for this item is currently unavailable.
                          Please get in touch for more information.
                        </p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ) : (
              <p className="text-2xl md:text-3xl font-bold text-gray-900">
                £{data.price}
              </p>
            )}

            <div className={"hidden md:hidden lg:block "}>
              <div className={"mt-8"}>
                <ContactForm name={data.name} id={data.id} page={"showroom"} />
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full space-y-3">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 ">
            Description
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {data.description}
          </p>
        </div>
        <div className={"lg:hidden"}>
          <ContactForm name={data.name} id={data.id} page={"showroom"} />
        </div>

        <div className="max-w-7xl ">
          <FeaturedVehicles />
        </div>
        <Separator className={"w-full border  border-customGrayBackground "} />
        <div className={"flex justify-center items-center mt-5 "}>
          <SpareLink />
        </div>
      </div>
    </>
  );
}
