import prisma from "@/app/lib/db";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SparePartCard from "./SparePartCard";
import FeaturedVehicles from "./FeaturedVehicles";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  const data = await prisma.spare.findMany({
    where: {
      status: "published",
      isFeatured: true,
    },
    select: {
      id: true,
      name: true,
      category: true,
      price: true,
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function FeaturedSpareParts() {
  noStore();
  const data = await getData();
  return (
    <>
      {data.length > 0 ? (
        <div className={"mt-7 mb-4 "}>
          <h2
            className={
              "text-xl md:text-2xl font-semibold tracking-tight text-customBlack/80  "
            }
          >
            Explore Our Featured Spare Parts
          </h2>
          <div className={"mt-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-5 "}>
            {data.slice(0, 3).map((item) => (
              <SparePartCard key={item.id} item={item} />
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
                  View More Spares{" "}
                  <ChevronRight
                    className={
                      "h-5 w-5  group-hover:translate-x-1 duration-200"
                    }
                  />
                </Link>
              </Button>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
      ) : (
        <FeaturedVehicles />
      )}
    </>
  );
}
