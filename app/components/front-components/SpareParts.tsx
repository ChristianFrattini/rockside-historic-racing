"use client";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SparePartCard from "./SparePartCard";

/*import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";*/

interface iAppProps {
  data: {
    id: string;
    name: string;
    category: string;
    price: number;
    images: string[];
    isFeatured: boolean;
  }[];
}

export default function SpareParts({ data }: iAppProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceOrder, setPriceOrder] = useState<"highest" | "lowest" | null>(
    null,
  );

  const [showFeatured, setShowFeatured] = useState<boolean>(false);

  //  unique brands using a set
  const uniqueBrands = Array.from(new Set(data.map((item) => item.category)));
  // filtering
  const filteredData = data
    .filter((item) =>
      selectedCategory ? item.category === selectedCategory : true,
    )
    .filter((item) => (showFeatured ? item.isFeatured : true))
    .sort((a, b) => {
      if (priceOrder === "highest") {
        return b.price - a.price;
      } else if (priceOrder === "lowest") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });

  return (
    <div className="py-12 lg:pt-[7rem] pt-[8.5rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className={"md:mb-10 mb-1 font-light md:text-4xl text-3xl"}>
        Spare Parts
      </h2>
      <p className={"text-lg text-gray-700 font-semibold leading-6 mb-4"}>
        Rockside Historic Racing - Spare Parts.{" "}
      </p>
      {/*<TypewriterEffectSmooth className={"mb-4"} words={words} />*/}{" "}
      {/*typewriter effect NOT mobile responsive*/}
      <p className={"text-sm text-gray-700 leading-7 md:mb-10 mb-5"}>
        Every vehicle has its own story, and the right spare parts keep it
        running strong. Whether you`&apos;`re restoring a classic, upgrading
        performance, or replacing worn components, we offer a carefully selected
        range of genuine and aftermarket parts. Explore our collection for the
        perfect fit. For any questions, do not hesitate to{" "}
        <a
          href={"/contact-us"}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          contact us
        </a>
        .
      </p>
      <Separator
        className={"w-full border md:mb-10 mb-5 border-customGrayBackground "}
      />
      <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-between items-center gap-3 sm:gap-4 lg:gap-5">
        <div className="w-full sm:w-[48%] lg:w-auto flex items-center justify-center">
          <Select
            onValueChange={(value) =>
              setSelectedCategory(value === "all" ? null : value)
            }
          >
            <SelectTrigger className="w-full min-w-[12rem] bg-transparent border-2 border-customGrayBackground focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              {uniqueBrands.map((brand, index) => (
                <SelectItem key={index} value={brand}>
                  {brand}
                </SelectItem>
              ))}
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Price Filter */}
        <div className="w-full sm:w-[48%] lg:w-auto flex items-center justify-center">
          <Select
            onValueChange={(value) =>
              setPriceOrder(value as "highest" | "lowest" | null)
            }
          >
            <SelectTrigger className="w-full min-w-[12rem] bg-transparent border-2 border-customGrayBackground focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none">
              <SelectValue placeholder="Filter by Price" />
            </SelectTrigger>
            <SelectContent className="border-none shadow-none">
              <SelectItem value="highest">Highest</SelectItem>
              <SelectItem value="lowest">Lowest</SelectItem>
              <SelectItem value="clear">Clear</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Featured Toggle */}
        <div className="w-full sm:w-[48%] lg:w-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p className="text-sm sm:text-base">Featured Only</p>
          <Switch
            checked={showFeatured}
            onCheckedChange={setShowFeatured}
            className="sm:ml-0"
          />
        </div>
      </div>
      <Separator
        className={"w-full border md:my-10 my-5  border-customGrayBackground"}
      />
      <div className={"mt-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-10 mx-5"}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <SparePartCard key={item.id} item={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}
