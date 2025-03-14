import { Separator } from "@/components/ui/separator";
import { MapPinned } from "lucide-react";
import React from "react";

export default function Location() {
  return (
    <>
      <div className={"flex gap-3 flex-col "}>
        <div className={"flex gap-3 items-center"}>
          <MapPinned className="h-8 w-8 sm:h-12 sm:w-12" />
          <h2 className="text-xl sm:text-2xl font-bold">Find us here</h2>
        </div>

        <Separator className={"border-[2px] border-customRed rounded-xl"} />
        <div
          className={
            "space-y-1 bg-customGrayBackground/10 rounded-md px-2 py-2"
          }
        >
          <p className={"text-xl font-semibold"}>Rockside Historic Racing</p>
          <p className={"font-normal text-sm"}>Address Line 1</p>
          <p className={"font-normal text-sm"}>Address Line 2</p>
          <p className={"font-normal text-sm"}>City</p>
          <p className={"font-normal text-sm"}>Postcode</p>
        </div>
      </div>
    </>
  );
}
