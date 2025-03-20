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
