import ContactForm from "@/app/components/front-components/ContactForm";
import FeaturedVehicles from "@/app/components/front-components/FeaturedVehicles";
import ImageSlider from "@/app/components/front-components/ImageSlider";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import React from "react";

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
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              £{data.price}
            </p>
            <div className={"hidden md:hidden lg:block "}>
              <div className={"mt-8"}>
                <ContactForm name={data.name} id={data.id} />
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
          <ContactForm name={data.name} id={data.id} />
        </div>
      </div>

      <div className="mt-7 mx-auto max-w-7xl ">
        <FeaturedVehicles />
      </div>
    </>
  );
}
