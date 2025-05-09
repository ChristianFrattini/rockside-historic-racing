import Showroom from "@/app/components/front-components/Showroom";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

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
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

export default async function ShowroomPage() {
  noStore();
  const data = await getData();
  return <Showroom data={data} />;
}
