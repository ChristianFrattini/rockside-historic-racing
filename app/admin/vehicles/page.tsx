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
import { PlusCircle, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Vehicles() {
  return (
    <>
      <div className={"flex items-center justify-end"}>
        <Button className={"flex items-center gap-2 group p-5"} asChild>
          <Link href="/admin/vehicles/add-vehicle">
            <PlusCircle
              className={"h-10 w-10 group-hover:scale-110 duration-200 "}
            />
            <span>Add New</span>
          </Link>
        </Button>
      </div>

      <Card className={"mt-5"}>
        <CardHeader>
          <CardTitle>Your Vehicles</CardTitle>
          <CardDescription>
            Manage your vehicles and view their details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className={"bg-slate-100"}>
              <TableRow>
                <TableHead className={"w-[100px]"}>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead>View</TableHead>
                <TableHead className={"text-end"}>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>BOINK</TableCell>
                <TableCell>BOINK</TableCell>
                <TableCell>BOINK</TableCell>
                <TableCell>BOINK</TableCell>
                <TableCell>BOINK</TableCell>
                <TableCell>BOINK</TableCell>
                <TableCell>BOINK</TableCell>
                <TableCell className={"text-end"}>
                  <Button variant={"ghost"} size={"icon"}>
                    <SquarePen className={"h-3 w-3 text-blue-600"} />
                  </Button>
                  <Button variant={"ghost"} size={"icon"}>
                    <Trash2 className={"h-3 w-3 text-red-600"} />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
