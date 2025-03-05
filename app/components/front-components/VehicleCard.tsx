"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface iAppProps {
  item: {
    id: string;
    name: string;
    brand: string;
    price: number;
    images: string[];
  };
}

export default function VehicleCard({ item }: iAppProps) {
  return (
    <Link href={`/vehicles/${item.id}`}>
      <motion.div
        className="relative lg:w-[24rem] lg:h-[16rem] md:w-[22rem] md:h-[14rem] sm:w-[16rem] sm:h-[8rem] rounded-lg overflow-hidden shadow-lg cursor-pointer"
        //whileHover={{ scale: 1.05 }}
      >
        {/* Image */}
        <Image
          src={item.images[0]}
          alt={`${item.brand} ${item.name}`}
          className="w-full h-full object-cover"
          width={180}
          height={100}
        />

        {/* Gradient Overlay (Always Visible) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 p-4 text-white pointer-events-none">
          <h3 className="text-lg font-bold mb-1">{item.name}</h3>
          <p className="text-sm text-gray-300 mb-1">{item.brand}</p>
          <p className="text-sm font-semibold">£{item.price}</p>
        </div>
      </motion.div>
    </Link>
  );
}
