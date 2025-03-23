import prisma from "@/app/lib/db";

import React from "react";

import BannerCarousel from "./BannerCarousel";

async function getData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <div className={""}>
      <BannerCarousel data={data} />
    </div>
  );
}
