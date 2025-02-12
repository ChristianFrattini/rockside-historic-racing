"use client";
import { cn } from "@/lib/utils";
import { Home, CarFront, Cog, Images } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    name: "Vehicles",
    href: "/dashboard/vehicles",
    icon: CarFront,
  },
  {
    name: "Spare Parts",
    href: "/dashboard/spares",
    icon: Cog,
  },
  {
    name: "Banner Picture(s)",
    href: "/dashboard/banner",
    icon: Images,
  },
];

export default function AdminNavigation() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const Icon = link.icon; // Get the icon component dynamically
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-2",
              link.href === pathname
                ? "text-white font-semibold bg-slate-800 p-3 rounded-lg"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="w-5 h-5" /> {/* Render the icon */}
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
