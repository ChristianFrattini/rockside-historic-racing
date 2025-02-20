"use client";

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
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, XIcon } from "lucide-react";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { useToast } from "@/hooks/use-toast";
import SubmitButton from "@/app/components/SubmitButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddNewSpare() {
  const { toast } = useToast();
  return (
    <form>
      <Card className={"mt-5 border-none shadow-none "}>
        <CardHeader>
          <CardTitle>Create New Spare Part</CardTitle>
          <CardDescription>
            Please, fill in the form and click on Save to ADD a new spare part.
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
                  placeholder={"Enter the Name "}
                />

                <p className={"text-sm text-red-500"}></p>
              </div>

              <div className={"flex flex-col gap-3 w-full"}>
                <Label>Category</Label>
                <Input
                  type={"text"}
                  className={"w-full"}
                  placeholder={"Enter the Category"}
                />

                <p className={"text-sm text-red-500"}></p>
              </div>
              <div className={"flex flex-col gap-3 w-full"}>
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

                <p className={"text-sm text-red-500"}></p>
              </div>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Description</Label>
              <Textarea placeholder={"Enter the description "} />

              <p className={"text-sm text-red-500"}></p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Featured</Label>
              <Switch />
              <p className={"text-sm text-red-500"}></p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Images</Label>

              <UploadDropzone
                endpoint={"imageUploader"}
                onUploadError={() => {
                  toast({
                    variant: "destructive",
                    title: ` Ops... Something went wrong`,
                    description:
                      "There was an issue uploading some of your pictures.",
                  });
                }}
                onClientUploadComplete={(res) => {
                  toast({
                    title: `✓   Uploaded successfully`,
                    description: "Your images have been uploaded successfully",
                  });
                }}
              />
              <p className={"text-sm text-red-500"}></p>
            </div>
          </div>
        </CardContent>
        <CardFooter
          className={"flex pt-3  rounded-b-lg justify-between bg-slate-100 "}
        >
          <Button
            variant={"destructive"}
            asChild
            className={"flex items-center justify-center group"}
          >
            <Link href={"/admin/spares"} className="flex items-center">
              <ChevronLeft
                className={
                  "h-5 w-5 transition-transform group-hover:-translate-x-1 duration-150"
                }
              />
              <span>Return</span>
            </Link>
          </Button>
          <SubmitButton text={"Save"} loadingText={"Saving"} />
        </CardFooter>
      </Card>
    </form>
  );
}
