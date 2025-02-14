import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CarFront,
  ChevronRight,
  ChevronRightCircle,
  Cog,
  Images,
} from "lucide-react";
import React from "react";

export default function AdminPage() {
  return (
    <>
      <div className={"mt-5 mb-6"}>
        <h2 className={"text-2xl font-semibold  "}>
          Rockside Historic Racing - ADMIN
        </h2>
        <span className={"text-muted-foreground text-sm"}>
          Manage your website from this page.
        </span>
      </div>

      <div className={"grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2"}>
        <Card className={"bg-slate-100"}>
          <CardHeader className={"flex flex-row items-center gap-3 pb-2 "}>
            <CarFront className={"h-8 w-8"} />
            <CardTitle> Vehicles</CardTitle>
          </CardHeader>
          <CardContent className=" rounded-lg p-4 space-y-2">
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Published:</span>{" "}
              <span className="font-semibold text-gray-800">21</span>
            </p>
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Drafts:</span>{" "}
              <span className="font-semibold text-gray-800">9</span>
            </p>
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Archived:</span>{" "}
              <span className="font-semibold text-gray-800">4</span>
            </p>
            <p className="border-t pt-2 text-gray-700 text-sm flex justify-between font-medium">
              <span>Total:</span>{" "}
              <span className="text-lg font-bold text-gray-900">34</span>
            </p>
          </CardContent>
          <CardFooter className={"flex items-center justify-center"}>
            <Button className={"group"}>
              View Full Vehicles List{" "}
              <ChevronRight
                className={"h-5 w-5  group-hover:translate-x-1 duration-200"}
              />
            </Button>
          </CardFooter>
        </Card>

        <Card className={"bg-slate-100"}>
          <CardHeader className={"flex flex-row items-center pb-2 gap-3"}>
            <Cog className={"h-8 w-8"} />
            <CardTitle>Spare Parts</CardTitle>
          </CardHeader>
          <CardContent className=" rounded-lg p-4 space-y-2">
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Published:</span>{" "}
              <span className="font-semibold text-gray-800">21</span>
            </p>
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Drafts:</span>{" "}
              <span className="font-semibold text-gray-800">9</span>
            </p>
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Archived:</span>{" "}
              <span className="font-semibold text-gray-800">4</span>
            </p>
            <p className="border-t pt-2 text-gray-700 text-sm flex justify-between font-medium">
              <span>Total:</span>{" "}
              <span className="text-lg font-bold text-gray-900">34</span>
            </p>
          </CardContent>
          <CardFooter className={"flex items-center justify-center"}>
            <Button className={"group"}>
              View Full Spare Parts List{" "}
              <ChevronRight
                className={"h-5 w-5  group-hover:translate-x-1 duration-200"}
              />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
