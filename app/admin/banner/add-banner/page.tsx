"use client";

import { createBanner } from "@/app/actions/actions";
import SubmitButton from "@/app/components/SubmitButton";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { utDeleteImage } from "@/app/lib/uploadthingDelete/imageDelete";
import { bannerSchema } from "@/app/lib/zodSchemas";
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
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ChevronLeft, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useActionState, useState } from "react";

export default function AddNewBanner() {
  const { toast } = useToast();
  const [image, setImage] = useState<string | undefined>(undefined);

  const [lastResult, action] = useActionState(createBanner, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDelete = async (image: string) => {
    const res = await utDeleteImage(image);
    console.log(res);
    if (res.success) {
      toast({
        title: "Image deleted successfully",
        description:
          "The image has been removed successfully from the database ",
      });
    } else {
      toast({
        title: "Ops... Something went wrong",
        description: "Something went wrong. Please, try again",
      });
    }
    setImage(undefined);
  };
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <Card className={"mt-5 border-none shadow-none "}>
        <CardHeader>
          <CardTitle>Create a new Banner</CardTitle>
          <CardDescription>
            Create a new banner by filling the form below.
          </CardDescription>
        </CardHeader>
        <CardContent className={"bg-slate-100 rounded-t-lg py-3"}>
          <div className={"flex flex-col gap-y-6"}>
            <div className={"flex flex-col gap-3"}>
              <Label>Title</Label>
              <Input
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
                type={"text"}
                placeholder={"Banner name..."}
              />
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.title.errors}
              </p>
            </div>
            <div className={"flex flex-col gap-3"}>
              <Label>Image</Label>
              <input
                type={"hidden"}
                value={image || ""}
                name={fields.imageString.name}
                key={fields.imageString.key}
                defaultValue={fields.imageString.initialValue}
              />
              {image !== undefined ? (
                <div className={"relative w-[200px] h-[200px]"}>
                  <Image
                    src={image}
                    alt={"banner_image"}
                    width={200}
                    height={200}
                    className={
                      "w-[200px] h-[200px] object-cover border rounded-lg"
                    }
                  />

                  <button
                    className={
                      "absolute -top-3 -right-3 bg-red-500 p-2 rounded-full text-white"
                    }
                    type={"button"}
                    onClick={() => handleDelete(image)}
                  >
                    <XIcon />
                  </button>
                </div>
              ) : (
                <UploadDropzone
                  endpoint={"bannerUploader"}
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
                      description:
                        "Your images have been uploaded successfully",
                    });
                    setImage(res[0].ufsUrl);
                  }}
                />
              )}
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.imageString.errors}
              </p>
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
            <Link href={"/admin/banner"} className="flex items-center">
              <ChevronLeft
                className={
                  "h-5 w-5 transition-transform group-hover:-translate-x-1 duration-150"
                }
              />
              <span>Return</span>
            </Link>
          </Button>
          <SubmitButton text={"Create Banner"} loadingText={"Saving"} />
        </CardFooter>
      </Card>
    </form>
  );
}
