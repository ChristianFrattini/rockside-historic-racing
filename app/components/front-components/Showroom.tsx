"use client";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import VehicleCard from "./VehicleCard";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/*import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";*/

interface iAppProps {
  data: {
    id: string;
    name: string;
    brand: string;
    price: number;
    year: number;
    images: string[];
    isFeatured: boolean;
  }[];
}

export default function Showroom({ data }: iAppProps) {
  /*const words = [
    {
      text: "Welcome",
      className: "text-base text-gray-700 font-semibold leading-6",
    },
    {
      text: "to",
      className: "text-base text-gray-700 font-semibold leading-6",
    },
    {
      text: "the",
      className: "text-base text-gray-700 font-semibold leading-6",
    },
    {
      text: "Rockside",
      className: "text-base text-gray-700 font-semibold leading-6",
    },
    {
      text: "Historic",
      className: "text-base text-gray-700 font-semibold leading-6",
    },
    {
      text: "Racing",
      className: "text-base text-gray-700 font-semibold leading-6",
    },
    {
      text: "Showroom.",
      className: "text-base text-gray-700 font-semibold leading-6",
    },
  ];*/
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceOrder, setPriceOrder] = useState<"highest" | "lowest" | null>(
    null,
  );

  const [yearOrder, setYearOrder] = useState<"newest" | "oldest" | null>(null);
  const [showFeatured, setShowFeatured] = useState<boolean>(false);

  //  unique brands using a set
  const uniqueBrands = Array.from(new Set(data.map((item) => item.brand)));

  // filtering
  const filteredData = data
    .filter((item) => (selectedBrand ? item.brand === selectedBrand : true))
    .filter((item) => (showFeatured ? item.isFeatured : true))
    .sort((a, b) => {
      if (priceOrder === "highest") {
        return b.price - a.price;
      } else if (priceOrder === "lowest") {
        return a.price - b.price;
      } else if (yearOrder === "newest") {
        return b.year - a.year;
      } else if (yearOrder === "oldest") {
        return a.year - b.year;
      } else {
        return 0;
      }
    });

  return (
    <div className="py-12 pt-[7rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className={"md:mb-10 mb-1 font-light md:text-4xl text-3xl"}>
        Showroom
      </h2>
      <p className={"text-base text-gray-700 font-semibold leading-6 mb-4"}>
        Welcome to the Rockside Historic Racing Showroom.{" "}
      </p>
      {/*<TypewriterEffectSmooth className={"mb-4"} words={words} />*/}{" "}
      {/*typewriter effect NOT mobile responsive*/}
      <p className={"text-sm text-gray-700 leading-7 md:mb-10 mb-5"}>
        **Unlike modern cars, each classic car is genuinely one-of-a-kind. Some
        cars will be original, while others may have modifications. Many will
        have been refurbished, and some completely rebuilt. We always recommend
        viewing a vehicle in person when comparing seemingly similar options.
        For the ultimate buying experience, we invite you to visit our showroom
        in person. For any question do not hesitate to{" "}
        <a
          href={"/contact-us"}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          contact us
        </a>
        .**
      </p>
      <Separator
        className={"w-full border md:mb-10 mb-5 border-customGrayBackground "}
      />
      <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-between items-center gap-3 sm:gap-4 lg:gap-5">
        {/* Brand Filter */}
        <div className="w-full sm:w-[48%] lg:w-auto flex items-center justify-center">
          <Select
            onValueChange={(value) =>
              setSelectedBrand(value === "all" ? null : value)
            }
          >
            <SelectTrigger className="w-full min-w-[12rem] bg-transparent border-2 border-customGrayBackground focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none">
              <SelectValue placeholder="Filter by Brand" />
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

        {/* Year Filter */}
        <div className="w-full sm:w-[48%] lg:w-auto flex items-center justify-center">
          <Select
            onValueChange={(value) =>
              setYearOrder(value as "newest" | "oldest" | null)
            }
          >
            <SelectTrigger className="w-full min-w-[12rem] bg-transparent border-2 border-customGrayBackground focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none">
              <SelectValue placeholder="Filter by Year" />
            </SelectTrigger>
            <SelectContent className="border-none shadow-none">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
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
          filteredData.map((item) => <VehicleCard key={item.id} item={item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}
