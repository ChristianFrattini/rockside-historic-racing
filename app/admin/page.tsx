import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarFront, ChevronRight, Cog } from "lucide-react";
import Link from "next/link";
import React from "react";
import prisma from "../lib/db";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  const [spareStats, vehicleStats] = await Promise.all([
    prisma.spare.groupBy({
      by: ["status"],
      _count: { id: true },
    }),
    prisma.vehicle.groupBy({
      by: ["status"],
      _count: { id: true },
    }),
  ]);

  /*stats.find((s) => s.status === "published")

This searches (find) for an object in stats where s.status === "published".
If it exists, it returns that object.
If no object with status === "published" is found, it returns undefined.

?._count.id
Optional chaining (?.) prevents errors if find() returns undefined.
If an object is found, it accesses _count.id, which holds the count of records with that status.

|| 0
If no published records exist, _count.id would be undefined, so || 0 ensures it defaults to 0.*/

  const formatStats = (stats: { status: string; _count: { id: number } }[]) => {
    return {
      published: stats.find((s) => s.status === "published")?._count.id || 0,
      drafts: stats.find((s) => s.status === "draft")?._count.id || 0,
      archived: stats.find((s) => s.status === "archived")?._count.id || 0,
      total: stats.reduce((sum, s) => sum + s._count.id, 0),
    };
  };

  return {
    vehicles: formatStats(vehicleStats),
    spares: formatStats(spareStats),
  };
}

export default async function AdminPage() {
  noStore();
  const { vehicles, spares } = await getData();
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
              <span className="font-semibold text-gray-800">
                {vehicles.published}
              </span>
            </p>
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Drafts:</span>{" "}
              <span className="font-semibold text-gray-800">
                {vehicles.drafts}
              </span>
            </p>
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Archived:</span>{" "}
              <span className="font-semibold text-gray-800">
                {vehicles.archived}
              </span>
            </p>
            <p className="border-t pt-2 text-gray-700 text-sm flex justify-between font-medium">
              <span>Total:</span>{" "}
              <span className="text-lg font-bold text-gray-900">
                {vehicles.total}
              </span>
            </p>
          </CardContent>
          <CardFooter className={"flex items-center justify-center"}>
            <Button className={"group"} asChild>
              <Link href={"/admin/vehicles/"}>
                View Full Vehicles List{" "}
                <ChevronRight
                  className={"h-5 w-5  group-hover:translate-x-1 duration-200"}
                />
              </Link>
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
              <span className="font-semibold text-gray-800">
                {spares.published}
              </span>
            </p>
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Drafts:</span>{" "}
              <span className="font-semibold text-gray-800">
                {spares.drafts}
              </span>
            </p>
            <p className="text-gray-600 text-sm flex justify-between">
              <span>Archived:</span>{" "}
              <span className="font-semibold text-gray-800">
                {spares.archived}
              </span>
            </p>
            <p className="border-t pt-2 text-gray-700 text-sm flex justify-between font-medium">
              <span>Total:</span>{" "}
              <span className="text-lg font-bold text-gray-900">
                {spares.total}
              </span>
            </p>
          </CardContent>
          <CardFooter className={"flex items-center justify-center"}>
            <Button className={"group"}>
              <Link href={"/admin/spares"}>View Full Spare Parts List</Link>

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
