"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
    href: "/about",
  },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`flex md:justify-between items-center justify-center bg-customGrayBackground  ${
          isScrolled ? " h-[5rem]" : " h-[6rem]"
        }   px-7 transition-all ease-in-out duration-500 backdrop-blur-xl opacity-90`}
      >
        <div className={" "}>
          <Link href={"/"}>
            <Image
              alt={"logo"}
              src={"/Rockside_logo.jpeg"}
              priority
              height={isScrolled ? 80 : 120}
              width={isScrolled ? 210 : 270}
              className={
                "object-cover transition-all duration-500 ease-in-out backdrop-blur-xl opacity-90 "
              }
            />
          </Link>
        </div>
        <div className={"hidden md:block  "}>
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
                isScrolled ? "text-sm" : "text-base"
              }  transition-all duration-200 hover:bg-customGrayBackground hover:text-white`}
            >
              <Link href={link.href} className={"group relative"}>
                {link.name}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-customRed transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </Button>
          ))}
        </div>

        <div className="md:hidden absolute right-[90%]">
          <Sheet>
            <SheetTrigger>
              <MenuIcon className={"text-white"} />
            </SheetTrigger>
            <SheetContent className="flex flex-col h-full" side="left">
              {/* Title and Description */}
              <SheetTitle>Hello</SheetTitle>
              <SheetDescription>Welcome to iTER</SheetDescription>

              {/* Content */}
              <SheetClose className="flex flex-col flex-1 mt-5 space-y-2  "></SheetClose>

              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
