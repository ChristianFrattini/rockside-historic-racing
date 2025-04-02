import prisma from "@/app/lib/db";

import React from "react";

import BannerCarousel from "./BannerCarousel";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Hero() {
  noStore();
  const data = await getData();
  return (
    <div className={""}>
      <BannerCarousel data={data} />
    </div>
  );
}
