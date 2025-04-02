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
import { FileX, PlusCircle, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  const data = await prisma.spare.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Spares() {
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
          <Link href="/admin/spares/add-spare">
            <PlusCircle
              className={"h-10 w-10 group-hover:scale-110 duration-200 "}
            />
            <span>Add New</span>
          </Link>
        </Button>
      </div>

      <Card className={"mt-5"}>
        <CardHeader>
          <CardTitle>Your Spare Parts</CardTitle>
          <CardDescription>
            Manage your spares and view their details
          </CardDescription>
        </CardHeader>
        <CardContent className={"overflow-auto max-h-[65vh]"}>
          <div className={"overflow-auto"}>
            {data.length > 0 ? (
              <Table>
                <TableHeader className={"bg-slate-100"}>
                  <TableRow>
                    <TableHead className={"w-[100]px]"}>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Category
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Status
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Date Created
                    </TableHead>
                    <TableHead className="hidden md:table-cell">View</TableHead>
                    <TableHead className={"text-end"}>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Image
                          alt={`image${item.id}`}
                          src={item.images[0]}
                          height={70}
                          width={70}
                          className={"rounded-md object-cover h-20 w-20"}
                        />
                      </TableCell>
                      <TableCell>{item.name}</TableCell>

                      <TableCell className="hidden md:table-cell">
                        {item.category}
                      </TableCell>

                      <TableCell className="hidden md:table-cell">
                        {item.status}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {formatDate(item.createdAt)}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Button variant={"outline"}>View</Button>
                      </TableCell>
                      <TableCell className={"text-end"}>
                        <Button variant={"ghost"} size={"icon"} asChild>
                          <Link href={`/admin/spares/${item.id}`}>
                            <SquarePen className={"h-3 w-3 text-blue-600"} />
                          </Link>
                        </Button>
                        <Button variant={"ghost"} size={"icon"}>
                          <Link href={`/admin/spares/${item.id}/delete`}>
                            <Trash2 className={"h-3 w-3 text-red-600"} />
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
