"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { VehicleSchema } from "../lib/zodSchemas";
import prisma from "../lib/db";
import { utDeleteImage } from "../lib/uploadthingDelete/imageDelete";

export async function addVehicle(previousState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: VehicleSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrls =
    submission.value.images?.flatMap((urlString) =>
      urlString.split(",").map((url) => url.trim()),
    ) || [];

  await prisma.vehicle.create({
    data: {
      name: submission.value.name,
      brand: submission.value.brand,
      year: submission.value.year,
      description: submission.value.description,
      isFeatured: submission.value.isFeatured,
      status: submission.value.status,
      images: flattenUrls,
    },
  });

  redirect("/admin/vehicles");
}

export async function editVehicle(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: VehicleSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim()),
  );

  const vehicleId = formData.get("vehicleId") as string;

  console.log("Ecooloooo" + vehicleId);
  await prisma.vehicle.update({
    where: {
      id: vehicleId,
    },
    data: {
      name: submission.value.name,
      brand: submission.value.brand,
      year: submission.value.year,
      description: submission.value.description,
      status: submission.value.status,
      images: flattenUrls,
      isFeatured: submission.value.isFeatured === true ? true : false,
    },
  });
  redirect("/admin/vehicles");
}

export async function deleteVehicle(formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }
  const vehicleId = formData.get("vehicleId") as string;

  try {
    // **1. Fetch the vehicle to get images**
    const vehicle = await prisma.vehicle.findUnique({
      where: { id: vehicleId },
      select: { images: true }, // Adjust field name if necessary
    });

    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    const images = vehicle.images as string[]; // Assuming images are stored as an array of URLs
    console.log(images);

    // **2. Delete images sequentially**
    for (const image of images) {
      //console.log(image);
      await utDeleteImage(image);
    }

    // **3. Delete the vehicle after images are removed**
    await prisma.vehicle.delete({
      where: { id: vehicleId },
    });

    //console.log("Vehicle and associated images deleted successfully");
  } catch (error) {
    console.error("Error deleting vehicle or images:", error);
    return redirect("/admin/vehicles?error=deletion_failed");
  }
  return redirect("/admin/vehicles");
}
