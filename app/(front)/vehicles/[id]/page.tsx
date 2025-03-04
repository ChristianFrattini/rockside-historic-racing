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
  params: { id: string };
}) {
  const data = await getData(params.id);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start lg:gap-x-24 py-12 pt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <ImageSlider images={data.images} />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            {data.name}
          </h1>
          <h2 className="text-xl font-semibold text-gray-700">{data.brand}</h2>
          <p className="text-3xl font-bold text-gray-900">£{data.price}</p>
          <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
            {data.description}
          </p>
        </div>
      </div>

      <div className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeaturedVehicles />
      </div>
    </>
  );
}
