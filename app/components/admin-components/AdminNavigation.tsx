import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Vehicles",
    href: "/dashboard/vehicles",
  },
  {
    name: "Spare Parts",
    href: "/dashboard/spares",
  },
  {
    name: "Banner Picture(s)",
    href: "/dashboard/banner",
  },
];

export default function AdminNavigation() {
  return (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.name}
        </Link>
      ))}
    </>
  );
}
