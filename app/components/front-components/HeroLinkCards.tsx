"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import showroom from "@/public/showroom.jpg";
import about from "@/public/about.jpg";
import { MessageSquareMore } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroLinkCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Initial state (hidden and slightly offset)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true, amount: 0.35 }} // Trigger when 50% of the component is visible
      transition={{ duration: 0.7, ease: "easeInOut" }} // Smooth transition
      className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4 mx-5 "
    >
      {/* Enlarged "All Products" Card */}
      <motion.div
        whileHover={{ scale: 1.02 }} // Scale up slightly on hover
        transition={{ type: "tween", duration: 0.175 }} // Springy effect
        className="group sm:col-span-3 rounded-lg overflow-hidden relative h-80"
      >
        <Image
          src={showroom}
          alt="All Products Image"
          className="object-cover w-full h-full"
          fill // Ensures the image fills the container
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
        <div className="absolute inset-0 p-4 flex items-end">
          <Link href="">
            <h3 className="text-white font-semibold text-xl">Showroom</h3>
            <p className="mt-1 text-sm text-white">Visit Now</p>
          </Link>
        </div>
      </motion.div>

      {/* Stacked Smaller Cards */}
      <motion.div
        className="sm:col-span-1 flex flex-col gap-4 h-80"
        initial={{ opacity: 0, y: 40 }} // Initial state (hidden and slightly offset)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        viewport={{ once: true, amount: 0.35 }} // Trigger when 50% of the component is visible
        transition={{ duration: 0.85, ease: "easeInOut" }}
      >
        {/* About Us Card */}
        <motion.div
          whileHover={{ scale: 1.05 }} // Scale up slightly on hover
          transition={{ type: "tween", duration: 0.175 }} // Springy effect
          className="group rounded-lg overflow-hidden relative flex-1"
        >
          <Image
            src={about}
            alt="All Products Image"
            className="object-cover w-full h-full"
            fill // Ensures the image fills the container
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
          <div className="absolute inset-0 p-4 flex items-end">
            <Link href="">
              <h3 className="text-white font-semibold">About Us</h3>
            </Link>
          </div>
        </motion.div>

        {/* Contact Us Card */}
        <motion.div
          whileHover={{ scale: 1.05 }} // Scale up slightly on hover
          transition={{ type: "tween", duration: 0.175 }} // Springy effect
          className="group rounded-lg overflow-hidden relative flex-1 bg-purpleRed"
        >
          <Link href="/contact-us">
            <MessageSquareMore
              className={
                "h-full w-full flex items-center justify-center scale-x-[-1]"
              }
            />
            <div className="absolute inset-0 bg-black/40" />{" "}
            {/* Dark overlay */}
            <div className="absolute inset-0 p-4 flex items-end  ">
              <h3 className="text-white font-semibold">Contact us</h3>
            </div>{" "}
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
