"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Lens } from "@/components/ui/lens";

interface iAppProps {
  images: string[];
}

export default function ImageSlider({ images }: iAppProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isForeground, setIsForeground] = useState(false); // State to track foreground mode

  function handlePreviousClick() {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }

  function handleNextClick() {
    setMainImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }

  function handleImageClick(index: number) {
    setMainImageIndex(index);
  }

  function toggleForeground() {
    //console.log("Toggle foreground clicked"); // Debugging: Check if the function is triggered

    setIsForeground((prev) => !prev); // Toggle foreground mode
  }

  return (
    <div className="grid gap-4 md:gap-3 items-start">
      {/* Big Image Container */}{" "}
      <div className="relative overflow-hidden rounded-lg w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Zoomable Image Container */}
        <motion.div
          key={mainImageIndex}
          initial={{ opacity: 0.6, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.6, x: -25 }}
          transition={{ duration: 1.2 }}
          className="absolute w-full h-full z-10 cursor-zoom-in" // Add cursor-zoom-in for better UX
          onClick={toggleForeground} // Toggle foreground mode on click
        >
          <Image
            className="object-cover w-full h-full rounded-lg"
            src={images[mainImageIndex]}
            alt="product_images"
            width={600}
            height={600}
          />
        </motion.div>

        {/* Arrows Container */}
        <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 z-20 pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePreviousClick}
            className="rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-8 h-8 sm:w-10 sm:h-10 pointer-events-auto"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          <Button
            variant="ghost"
            onClick={handleNextClick}
            className="rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-8 h-8 sm:w-10 sm:h-10 pointer-events-auto"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>
      {/* Thumbnails Container */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            onClick={() => handleImageClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn("relative overflow-hidden cursor-pointer rounded-md")}
          >
            <Image
              src={image}
              alt="product_images"
              width={100}
              height={100}
              className={cn(
                "object-cover w-full h-[60px] sm:h-[80px] md:h-[100px] rounded-md",
                index === mainImageIndex
                  ? "border-2 border-primary"
                  : "border-2 border-customGrayText",
              )}
            />
          </motion.div>
        ))}
      </div>
      {/* Foreground Modal */}
      {isForeground && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={toggleForeground} // Close modal when clicking outside
        >
          {" "}
          <Lens>
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <Image
                src={images[mainImageIndex]}
                alt="product_images"
                width={1200}
                height={1200}
                className="object-contain w-full h-full rounded-lg"
              />{" "}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event from bubbling up to the parent div
                  toggleForeground();
                }}
                className="absolute top-2 right-2 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </Lens>
        </div>
      )}
    </div>
  );
}
