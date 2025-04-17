import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  //const facebook = "/icons/facebook.svg"; // Local file in /public
  //const instagram = "/icons/instagram.svg"; // Local file in /public
  //const tiktok = "/icons/tiktok.svg"; // Local file in /public

  const images = [
    {
      src: "/rockside_classic.png",
      alt: "rocksideclassic",
    },
    {
      src: "/Rockside_logo.jpeg",
      alt: "rocksidelogo",
    },
    {
      src: "/rockside_sibsport.png",
      alt: "rocksidesibsport",
    },
  ];

  const links = [
    {
      name: "Showroom",
      href: "/showroom",
    },
    {
      name: "Spare Parts",
      href: "/spares",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10 mt-10 py-14 bg-customGrayBackground">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-8 lg:space-y-0">
        {/* Socials */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-3 text-base font-semibold text-gray-200">
            Follow Us
          </h2>
          <div className="flex space-x-6 sm:space-x-12">
            <Link
              href="/"
              className="rounded-full bg-greyish hover:bg-customGrayText duration-100 border-customGrayText border"
            >
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={37}
                height={37}
              />
            </Link>
            <Link
              href="/"
              className="rounded-xl bg-greyish hover:bg-customGrayText duration-100 border-customGrayText border"
            >
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={37}
                height={37}
              />
            </Link>
            <Link
              href="/"
              className="rounded-xl bg-greyish hover:bg-customGrayText duration-100 border-customGrayText border"
            >
              <Image
                src="/icons/tiktok.svg"
                alt="tiktok"
                width={37}
                height={37}
              />
            </Link>
          </div>
        </div>

        {/* Logos */}
        <div className="w-full lg:w-[30rem] xl:w-[45rem]">
          <InfiniteMovingCards
            images={images}
            direction="left"
            speed="fast"
            pauseOnHover={false}
          />
        </div>

        {/* Website Links */}
        <div className="flex flex-col space-y-3 text-center lg:text-left">
          <h2 className="mb-3 text-base font-semibold text-gray-200">
            Site Index
          </h2>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-greyish hover:text-customGrayText duration-100"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 flex items-center justify-center flex-col">
        <p className="text-xs leading-5 text-greyish text-center">
          &copy; {new Date().getFullYear()} Rockside Historic Racing -
          Sibsportperformance - Rockside Classic+Vintage. All Rights Reserved.
        </p>
        <Link
          href={"/privacy-notice"}
          className={"text-xs text-gray-300 p-2 underline  "}
        >
          Privacy Notice
        </Link>
      </div>
    </div>
  );
}
