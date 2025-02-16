"use client";

import { UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AddNewVehicle() {
  return (
    <form>
      <div className={"flex items-center gap-4"}>
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/admin/vehicles/"}>
            <ChevronLeft className={"w-4 h-4"} />
          </Link>
        </Button>
        <h1 className={"text-xl font-semibold tracking-wide"}>
          Add New Vehicle
        </h1>
      </div>

      <Card className={"mt-5 border-none shadow-none "}>
        <CardHeader>
          <CardTitle>Vehicle Details</CardTitle>
          <CardDescription>
            Please, fill in the form and click on Save to add new vehicle.
          </CardDescription>
        </CardHeader>
        <CardContent className={"bg-slate-100 rounded-t-lg py-3"}>
          <div className={"flex flex-col gap-6"}>
            <div className={"flex flex-col lg:flex-row justify-between gap-3"}>
              <div className={"flex flex-col gap-3 w-full"}>
                <Label>Name</Label>
                <Input
                  type={"text"}
                  className={"w-full"}
                  placeholder={"Enter the Name of the vehicle"}
                />
              </div>

              <div className={"flex flex-col gap-3 w-full"}>
                <Label>Brand</Label>
                <Input
                  type={"text"}
                  className={"w-full"}
                  placeholder={"Enter the Name"}
                />
              </div>
              <div className={"flex flex-col gap-3 w-full"}>
                <Label>Year</Label>
                <Input
                  type={"number"}
                  className={"w-full"}
                  placeholder={"1961"}
                />
              </div>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Description</Label>
              <Textarea placeholder={"Enter the description of the vehicle"} />
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Featured</Label>
              <Switch />
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={"Select Status"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"draft"}>Draft</SelectItem>
                  <SelectItem value={"archived"}>Archived</SelectItem>
                  <SelectItem value={"published"}>Published</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Images</Label>
              <UploadDropzone
                endpoint={"imageUploader"}
                onUploadError={() => {
                  alert("Error uploading images");
                }}
                onClientUploadComplete={() => {
                  alert("Uploading images complete");
                }}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter
          className={"flex pt-3  rounded-b-lg justify-end bg-slate-100"}
        >
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
