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
    year: number;
    price: number;
    images: string[];
  };
}

export default function VehicleCard({ item }: iAppProps) {
  return (
    <Link href={`/showroom/${item.id}`}>
      <motion.div
        className="relative w-full h-[12rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] rounded-lg overflow-hidden shadow-lg cursor-pointer"
        // whileHover={{ scale: 1.05 }}
      >
        {/* Image */}
        <Image
          src={item.images[0]}
          alt={`${item.brand} ${item.name}`}
          className="w-full h-full object-cover"
          width={500}
          height={300}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        />

        <div className="absolute bottom-0 left-0 p-4 text-white pointer-events-none">
          <h3 className="text-base sm:text-lg font-bold mb-1">
            {item.name} ({item.year})
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mb-1">{item.brand}</p>
          <p className="text-xs sm:text-sm font-semibold">£{item.price}</p>
        </div>
      </motion.div>
    </Link>
  );
}
