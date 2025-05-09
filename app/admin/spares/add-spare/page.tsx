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
import React, { useActionState, useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, XIcon } from "lucide-react";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { useToast } from "@/hooks/use-toast";
import SubmitButton from "@/app/components/SubmitButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { addSpare } from "@/app/actions/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { spareSchema } from "@/app/lib/zodSchemas";
import { utDeleteImage } from "@/app/lib/uploadthingDelete/imageDelete";

export default function AddNewSpare() {
  const { toast } = useToast();
  const [lastResult, action] = useActionState(addSpare, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: spareSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [images, setImages] = useState<string[]>([]);

  const handleDelete = async (index: number) => {
    setImages(images.filter((_, i) => i !== index));

    const res = await utDeleteImage(images[index]);
    //console.log(res);
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
  };
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
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
                  key={fields.name.key}
                  name={fields.name.name}
                  defaultValue={fields.name.initialValue}
                  type={"text"}
                  className={"w-full"}
                  placeholder={"Enter the Name "}
                />

                <p className={"text-sm text-red-500"}>{fields.name.errors}</p>
              </div>

              <div className={"flex flex-col gap-3 w-full"}>
                <Label>Category</Label>
                <Input
                  key={fields.category.key}
                  name={fields.category.name}
                  defaultValue={fields.category.initialValue}
                  type={"text"}
                  className={"w-full"}
                  placeholder={"Enter the Category"}
                />

                <p className={"text-sm text-red-500"}>
                  {fields.category.errors}
                </p>
              </div>
              <div className={"flex flex-col gap-3 w-full"}>
                <Label>Status</Label>
                <Select
                  key={fields.status.key}
                  name={fields.status.name}
                  defaultValue={fields.status.initialValue}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={"Select Status"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={"draft"}>Draft</SelectItem>
                    <SelectItem value={"archived"}>Archived</SelectItem>
                    <SelectItem value={"published"}>Published</SelectItem>
                  </SelectContent>
                </Select>

                <p className={"text-sm text-red-500"}>{fields.status.errors}</p>
              </div>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Description</Label>
              <Textarea
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={fields.description.initialValue}
                placeholder={"Enter the description "}
              />

              <p className={"text-sm text-red-500"}>
                {fields.description.errors}
              </p>
            </div>

            <div className={"flex flex-col gap-3 w-full"}>
              <Label>Price</Label>
              <Input
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={fields.price.initialValue}
                type={"number"}
                className={"w-full"}
                placeholder={"500"}
              />
              <p className={"text-sm text-red-500"}>{fields.price.errors}</p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Featured</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                defaultValue={fields.isFeatured.initialValue}
              />
              <p className={"text-sm text-red-500"}>
                {fields.isFeatured.errors}
              </p>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Images</Label>
              <input
                type={"hidden"}
                value={images}
                key={fields.images.key}
                name={fields.images.name}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                defaultValue={fields.images.initialValue as any}
              />

              {images.length > 0 ? (
                <div className={"flex gap-5 mt-3"}>
                  {images.map((url, index) => (
                    <div className={"relative w-[200px] h-[200px]"} key={index}>
                      <Image
                        src={url}
                        alt={"images"}
                        width={200}
                        height={200}
                        className={
                          "w-full h-full object-cover rounded-lg border"
                        }
                      />
                      <button
                        className={
                          "absolute -top-3 -right-3 bg-red-500 p-2 rounded-full text-white"
                        }
                        type={"button"}
                        onClick={() => handleDelete(index)}
                      >
                        <XIcon />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint={"spareUploader"}
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
                    setImages(res.map((r) => r.ufsUrl));
                  }}
                />
              )}
              <p className={"text-sm text-red-500"}>{fields.images.errors}</p>
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
