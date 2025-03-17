import FeaturedVehicles from "@/app/components/front-components/FeaturedVehicles";
import Showroom from "@/app/components/front-components/Showroom";
import VehicleCard from "@/app/components/front-components/VehicleCard";
import prisma from "@/app/lib/db";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import React from "react";

async function getData() {
  const data = await prisma.vehicle.findMany({
    where: {
      status: "published",
    },
    select: {
      name: true,
      brand: true,
      year: true,
      description: true,
      isFeatured: true,
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

export default async function ShowroomPage() {
  const data = await getData();
  return <Showroom data={data} />;
}

{
  /*<div className="py-12 pt-[7rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className={"md:mb-10 mb-5 font-light md:text-4xl text-3xl"}>
        Showroom
      </h2>
      <p className={"text-base text-gray-700 font-semibold leading-6 mb-4"}>
        Welcome to the Rockside Historic Racing Showroom.{" "}
      </p>
      <p className={"text-sm text-gray-600 leading-7 md:mb-10 mb-5"}>
        Unlike modern cars, each classic car is genuinely one-of-a-kind. Some
        cars will be original, while others may have modifications. Many will
        have been refurbished, and some completely rebuilt. We always recommend
        viewing a vehicle in person when comparing seemingly similar options.
        For the ultimate buying experience, we invite you to visit our showroom
        in person. For any question do not hesitate to{" "}
        <a
          href={"/contact-us"}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          contact us
        </a>
        .
      </p>
      <Separator
        className={"w-full border md:mb-10 mb-5 border-customGrayBackground"}
      />

      <div className={"mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-5"}>
        {data.map((item) => (
          <VehicleCard key={item.id} item={item} />
        ))}
      </div>
    </div>*/
}
