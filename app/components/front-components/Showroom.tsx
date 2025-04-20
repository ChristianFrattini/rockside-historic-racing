"use client";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useMemo, useState } from "react";
import VehicleCard from "./VehicleCard";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SpareLink from "./SpareLink";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
  const [priceOrder, setPriceOrder] = useState<
    "highest" | "lowest" | "poa" | null
  >(null);

  const [yearOrder, setYearOrder] = useState<"newest" | "oldest" | null>(null);
  const [showFeatured, setShowFeatured] = useState<boolean>(false);

  //  unique brands using a set
  const uniqueBrands = Array.from(new Set(data.map((item) => item.brand)));

  // Reset to page 1 when any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrand, priceOrder, yearOrder, showFeatured]);

  // Your existing filtering logic (this should operate on the full dataset)
  const filteredData = useMemo(() => {
    let result = [...data]; // Your original data

    // Apply brand filter
    if (selectedBrand) {
      result = result.filter((item) => item.brand === selectedBrand);
    }

    // Apply featured filter
    if (showFeatured) {
      result = result.filter((item) => item.isFeatured);
    }

    // Apply price filtering before sorting
    if (priceOrder === "poa") {
      result = result.filter((item) => item.price === 0);
    } else if (priceOrder === "highest" || priceOrder === "lowest") {
      result = result.filter((item) => item.price > 0);
    }

    // Apply price sorting
    if (priceOrder === "highest") {
      result.sort((a, b) => b.price - a.price);
    } else if (priceOrder === "lowest") {
      result.sort((a, b) => a.price - b.price);
    }

    // Apply year sorting
    if (yearOrder === "newest") {
      result.sort((a, b) => b.year - a.year);
    } else if (yearOrder === "oldest") {
      result.sort((a, b) => a.year - b.year);
    }

    return result;
  }, [data, selectedBrand, priceOrder, yearOrder, showFeatured]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getVisiblePages = (currentPage: number, totalPages: number) => {
    const maxVisible = 3; // Maximum number of visible page buttons
    let startPage, endPage;

    if (totalPages <= maxVisible) {
      // Less than maxVisible pages: show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // More than maxVisible pages: calculate start and end pages
      const maxVisibleBeforeCurrent = Math.floor(maxVisible / 2);
      const maxVisibleAfterCurrent = Math.ceil(maxVisible / 2) - 1;

      if (currentPage <= maxVisibleBeforeCurrent) {
        // Near the beginning
        startPage = 1;
        endPage = maxVisible;
      } else if (currentPage + maxVisibleAfterCurrent >= totalPages) {
        // Near the end
        startPage = totalPages - maxVisible + 1;
        endPage = totalPages;
      } else {
        // Somewhere in the middle
        startPage = currentPage - maxVisibleBeforeCurrent;
        endPage = currentPage + maxVisibleAfterCurrent;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };

  return (
    <div className="py-12 lg:pt-[7rem] pt-[8.5rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className={"md:mb-10 mb-1 font-light md:text-4xl text-3xl"}>
        Showroom
      </h2>
      <p className={"text-lg text-gray-700 font-semibold leading-6 mb-4"}>
        Welcome to the Rockside Historic Racing Showroom.{" "}
      </p>
      {/*<TypewriterEffectSmooth className={"mb-4"} words={words} />*/}{" "}
      {/*typewriter effect NOT mobile responsive*/}
      <p
        className={
          "text-sm text-gray-800 leading-7 tracking-wider md:mb-10 mb-5"
        }
      >
        Unlike modern cars, every classic car has its own unique story. Some
        remain in original condition, while others feature modifications or have
        been refurbished — even fully rebuilt. That&apos;s why we always
        recommend viewing vehicles in person when comparing seemingly similar
        models. For the best possible buying experience, we invite you to visit
        our showroom. For any question do not hesitate to{" "}
        <a
          href={"/contact-us"}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          contact us
        </a>
        .
      </p>
      <div
        className={
          "flex justify-center items-center md:mb-10 mb-8 px-4 sm:px-6 lg:px-8"
        }
      >
        <SpareLink />
      </div>
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
              <SelectItem value={"poa"}>Price On Application (POA)</SelectItem>
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
      {/* Results grid */}
      <div className={"mt-3 grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-5"}>
        {filteredData.length > 0 ? (
          currentItems.length > 0 ? (
            currentItems.map((item) => (
              <VehicleCard key={item.id} item={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No results found.
            </p>
          )
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No results match your filters.
          </p>
        )}
      </div>
      {/* Pagination */}
      {filteredData.length > itemsPerPage && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) paginate(currentPage - 1);
                }}
                className={
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }
              />
            </PaginationItem>

            {/* Always show first page */}
            {currentPage > 3 && totalPages > 5 && (
              <>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      paginate(1);
                    }}
                    isActive={currentPage === 1}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                {currentPage > 4 && totalPages > 6 && (
                  <PaginationItem>
                    <span className="px-2">...</span>
                  </PaginationItem>
                )}
              </>
            )}

            {/* Visible pages */}
            {getVisiblePages(currentPage, totalPages).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(page);
                  }}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Always show last page */}
            {currentPage < totalPages - 2 && totalPages > 5 && (
              <>
                {currentPage < totalPages - 3 && totalPages > 6 && (
                  <PaginationItem>
                    <span className="px-2">...</span>
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      paginate(totalPages);
                    }}
                    isActive={currentPage === totalPages}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) paginate(currentPage + 1);
                }}
                className={
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
