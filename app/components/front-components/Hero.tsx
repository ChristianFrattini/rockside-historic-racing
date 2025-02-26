import prisma from "@/app/lib/db";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

import Image from "next/image";
import BannerCarousel from "./BannerCarousel";
import { motion } from "framer-motion";

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
