import prisma from "@/app/lib/db";
import React from "react";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

async function getData() {
  const data = await prisma.vehicle.findMany({
    where: {
      status: "published",
      isFeatured: true,
    },
    select: {
      id: true,
      name: true,
      brand: true,
      year: true,
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
      <div className={"mt-7 mb-4 "}>
        <h2
          className={
            "text-xl md:text-2xl font-semibold tracking-tight text-customBlack/80 mx-5 "
          }
        >
          Explore Our Featured Vehicles
        </h2>
        <div className={"mt-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mx-5"}>
          {data.slice(0, 3).map((item) => (
            <VehicleCard key={item.id} item={item} />
          ))}
        </div>
        <div className={"flex items-center justify-center mt-5 w-full"}>
          {data.length > 3 ? (
            <Button
              asChild
              variant={"outline"}
              className={"bg-white/40 hover:bg-white/70 border-2  group"}
            >
              <Link href={"/showroom"}>
                View More Vehicles{" "}
                <ChevronRight
                  className={"h-5 w-5  group-hover:translate-x-1 duration-200"}
                />
              </Link>
            </Button>
          ) : (
            ""
          )}{" "}
        </div>
      </div>
    </>
  );
}
