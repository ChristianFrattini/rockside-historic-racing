"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CarFront,
  HelpingHand,
  House,
  MenuIcon,
  MessageSquareMore,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const links = [
  {
    name: "Showroom",
    href: "/showroom",
    icon: CarFront,
  },
  {
    name: "Services",
    href: "/services",
    icon: HelpingHand,
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    icon: MessageSquareMore,
  },
  {
    name: "About Us",
    href: "/about-us",
    icon: Users,
  },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled down
      setIsScrolled(window.scrollY > 25); // Adjust the scroll position threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={" top-0 w-full fixed z-50"}>
      {/*TO ADD CLASSNAME   className={"fixed top-0 w-full"} */}
      <div
        className={`flex lg:justify-between items-center justify-center bg-customGrayBackground  ${
          isScrolled ? "lg:h-[5rem] h-[5.9rem]" : " lg:h-[5.7rem] h-[7rem]"
        }   px-7  transition-all ease-in-out duration-500 lg:backdrop-blur-xl backdrop-blur-md opacity-95 lg:opacity-90`}
      >
        <div className={""}>
          <Link href={"/"} className={"flex items-center justify-center"}>
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 10000,
                  stopOnInteraction: false,
                  stopOnLastSnap: false,
                }),
              ]}
              className={`${
                isScrolled ? "w-[260px] md:w-[270px]" : "w-[290px] md:w-[300px]"
              } transition-all ease-in-out duration-500 `}
            >
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt={"logo"}
                    src={"/Rockside_logo.jpeg"}
                    priority
                    height={isScrolled ? 155 : 190}
                    width={isScrolled ? 255 : 290}
                    className={
                      "object-cover transition-all duration-500 ease-in-out backdrop-blur-xl opacity-90"
                    }
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt={"logo"}
                    src={"/rockside_classic.png"}
                    priority
                    height={isScrolled ? 155 : 190}
                    width={isScrolled ? 255 : 290}
                    className={
                      "object-cover transition-all duration-500 ease-in-out backdrop-blur-xl opacity-90"
                    }
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt={"logo"}
                    src={"/rockside_sibsport.png"}
                    priority
                    height={isScrolled ? 155 : 190}
                    width={isScrolled ? 255 : 290}
                    className={
                      "object-cover transition-all duration-500 ease-in-out backdrop-blur-xl opacity-90"
                    }
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </Link>
        </div>
        <div className={"hidden lg:block"}>
          {/* <p
            className={` flex leading-10 text-white ${
              isScrolled ? "text-xl font-extralight" : "text-2xl font-light"
            } transition-all duration-200`}
          ></p>*/}

          {links.map((link) => (
            <Button
              variant={"ghost"}
              asChild
              key={link.href}
              className={` min-w-[100px] px-4 leading-10  mx-3 tracking-wide text-gray-300 font-medium ${
                isScrolled ? "lg:text-sm text-xs" : "lg:text-base text-sm"
              }  transition-all duration-200 hover:bg-customGrayBackground hover:text-white`}
            >
              <Link href={link.href} className={"group relative"}>
                {link.name}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-customRed transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </Button>
          ))}
        </div>

        <div className="lg:hidden absolute right-[90%]">
          <Sheet>
            <SheetTrigger>
              <MenuIcon className={"text-gray-300"} />
            </SheetTrigger>
            <SheetContent
              className="flex flex-col bg-customGrayBackground border border-customGrayBackground px-4"
              side="top"
            >
              {/* Title and Description */}
              <SheetTitle
                className={
                  "mb-4 text-2xl md:text-4xl text-gray-300 flex items-center justify-center w-full"
                }
              >
                <Image
                  alt={"logo"}
                  src={"/Rockside_logo.jpeg"}
                  height={180}
                  width={300}
                  className={
                    "object-fill transition-all duration-500 ease-in-out backdrop-blur-xl opacity-90 w-full max-w-[300px] md:max-w-[380px] h-auto"
                  }
                  priority
                />
              </SheetTitle>
              <SheetDescription></SheetDescription>

              <div
                className={
                  "gap-3 md:gap-10 flex justify-center items-center flex-col md:flex-row"
                }
              >
                <SheetClose
                  asChild
                  className={"flex md:flex-col items-center justify-center"}
                >
                  <Link
                    href={"/"}
                    className={cn(
                      "text-xl md:text-2xl font-medium",
                      "/" === pathname
                        ? " text-red-700 "
                        : "text-customGrayText",
                    )}
                  >
                    <House className={"h-5 w-5 mr-2 md:h-10 md:w-10"} />
                    Home
                  </Link>
                </SheetClose>

                {links.map((link) => {
                  const Icon = link.icon; // Get the icon component dynamically
                  return (
                    <SheetClose
                      asChild
                      key={link.href}
                      className={"flex md:flex-col items-center justify-center"}
                    >
                      <Link
                        className={cn(
                          "text-xl md:text-2xl font-medium",
                          link.href === pathname
                            ? " text-red-700 "
                            : "text-customGrayText",
                        )}
                        href={link.href}
                      >
                        <Icon className={"h-5 w-5 md:h-10 md:w-10 mr-2"} />
                        {link.name}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
