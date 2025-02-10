import React, { ReactNode } from "react";
import AdminNavigation from "../components/admin-components/AdminNavigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleUser, MenuIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={"flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}
    >
      <header
        className={
          "sticky top-0 flex h-16 items-center justify-between gap-4 border-b"
        }
      >
        {/*Desktop Screen */}
        <nav
          className={
            "hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
          }
        >
          <AdminNavigation />
        </nav>

        {/*Mobile Screen - Sheet*/}

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"ghost"}
              className={"shrink-0 md:hidden"}
              size={"icon"}
            >
              <MenuIcon className={"w-h h-5"} />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetTitle>Admin Menu</SheetTitle>
            <SheetDescription>
              Welcome to the admin section! Navigate through the links below to
              create, edit or delete items.
            </SheetDescription>
            <Separator className={"border-1 my-5"} />
            <nav className={"flex flex-col gap-6 text-lg font-medium"}>
              <AdminNavigation />
            </nav>
          </SheetContent>
        </Sheet>

        {/*Avatar Desktop*/}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"secondary"}
              size={"icon"}
              className={"rounded-full"}
            >
              <CircleUser className={"w-5 h-5"} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={"end"}>
            <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </div>
  );
}
