"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Button } from "@/components/ui/button";

interface iAppProps {
  data: {
    id: string;
    title: string;
    imageString: string;
  }[];
}

export default function BannerCarousel({ data }: iAppProps) {
  const images = data.map((item) => item.imageString);

  return (
    <ImagesSlider className="h-[55rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Welcome to <br /> Rockside Historic Racing
        </motion.p>
        <Button>Visit the showroom</Button>
      </motion.div>
    </ImagesSlider>
  );
}
