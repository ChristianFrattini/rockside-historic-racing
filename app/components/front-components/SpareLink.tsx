import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function SpareLink() {
  return (
    <>
      <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
        <p className="text-sm md:text-base text-gray-700 font-semibold leading-6">
          Looking for a part replacement for one of your cars?
        </p>
        <Button asChild className="w-full sm:w-auto">
          <Link href="/spares" className="text-sm px-4 leading-6">
            Explore available Spare Parts
          </Link>
        </Button>
      </div>
    </>
  );
}
