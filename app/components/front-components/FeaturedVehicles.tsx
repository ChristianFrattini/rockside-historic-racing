import prisma from "@/app/lib/db";
import React from "react";
import VehicleCard from "./VehicleCard";

async function getData() {
  const data = await prisma.vehicle.findMany({
    where: {
      status: "published",
    },
    select: {
      id: true,
      name: true,
      brand: true,
      price: true,
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function FeaturedVehicles() {
  const data = await getData();
  return (
    <>
      <div className={"mt-7 lg:p-4 "}>
        <h2
          className={
            "text-2xl font-extrabold tracking-tight text-customBlack/80 mx-3 "
          }
        >
          Explore Our Featured Vehicles
        </h2>
        <div className={"mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5"}>
          {data.map((item) => (
            <VehicleCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
