import { LoaderCircle } from "lucide-react";
import React from "react";

export default function SparesPage() {
  return (
    <div className="py-12 pt-[7rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className={"flex flex-col items-center justify-center"}>
        <h2 className={"text-4xl font-bold mt-40 "}>Work In Progress</h2>
        <LoaderCircle className={"h-48 w-48 animate-spin"} />
      </div>
    </div>
  );
}
