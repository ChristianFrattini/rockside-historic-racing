import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileX, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Banner() {
  noStore();
  const data = await getData();

  const formatDate = (isoString: Date): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <>
      <div className={"flex items-center justify-end"}>
        <Button className={"flex items-center gap-2 group p-5"} asChild>
          <Link href="/admin/banner/add-banner">
            <PlusCircle
              className={"h-10 w-10 group-hover:scale-110 duration-200 "}
            />
            <span>Add New Banner</span>
          </Link>
        </Button>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Banners</CardTitle>
          <CardDescription>Manage your banners</CardDescription>
        </CardHeader>

        <CardContent className={"overflow-auto max-h-[65vh]"}>
          <div className={"overflow-auto"}>
            {data.length > 0 ? (
              <Table className="min-w-full">
                <TableHeader className="bg-slate-100">
                  <TableRow>
                    <TableHead className="w-1/4">Image</TableHead>
                    <TableHead className="w-1/2">Title</TableHead>
                    <TableHead className="w-1/2 hidden md:table-cell">
                      Date Created
                    </TableHead>
                    <TableHead className="w-1/4 text-end">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Image
                          alt="banner_image"
                          src={item.imageString}
                          width={100}
                          height={100}
                          className="rounded-lg object-cover h-[100px] w-[100px] sm:h-[75px] sm:w-[75px]"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.title}
                      </TableCell>
                      <TableCell className="font-medium hidden md:table-cell">
                        {formatDate(item.createdAt)}
                      </TableCell>
                      <TableCell className="text-end">
                        <Button variant="ghost" size="icon">
                          <Link href={`/admin/banner/${item.id}/delete`}>
                            <Trash2 className="h-3 w-3 text-red-600" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className={"h-[30vh] flex justify-center items-center"}>
                <p
                  className={
                    "text-center text-lg text-gray-600 p-2 rounded-lg underline font-semibold flex flex-col items-center justify-center"
                  }
                >
                  <FileX className={"w-12 h-12 mb-4"} />
                  No Spare Part added yet.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
