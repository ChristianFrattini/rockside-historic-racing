"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { bannerSchema, spareSchema, VehicleSchema } from "../lib/zodSchemas";
import prisma from "../lib/db";
import { utDeleteImage } from "../lib/uploadthingDelete/imageDelete";
import { Resend } from "resend";

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
      isFeatured: submission.value.isFeatured === true ? true : false,
      status: submission.value.status,
      price: submission.value.price,
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

  //console.log("Ecooloooo" + vehicleId);
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
      price: submission.value.price,
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

export async function createBanner(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, { schema: bannerSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }
  await prisma.banner.create({
    data: {
      title: submission.value.title,
      imageString: submission.value.imageString,
    },
  });

  redirect("/admin/banner/");
}

export async function deleteBanner(formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }
  const bannerId = formData.get("bannerId") as string;

  try {
    // **1. Fetch the vehicle to get images**
    const banner = await prisma.banner.findUnique({
      where: { id: bannerId },
      select: { imageString: true }, // Adjust field name if necessary
    });

    if (!banner) {
      throw new Error("Vehicle not found");
    }

    const image = banner.imageString as string;
    // console.log(images);

    // **2. Delete image**

    await utDeleteImage(image);

    // **3. Delete the vehicle after images are removed**
    await prisma.banner.delete({
      where: { id: bannerId },
    });

    //console.log("Vehicle and associated images deleted successfully");
  } catch (error) {
    console.error("Error deleting vehicle or images:", error);
    return redirect("/admin/vehicles?error=deletion_failed");
  }
  return redirect("/admin/banner");
}

export async function addSpare(previousState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: spareSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrls =
    submission.value.images?.flatMap((urlString) =>
      urlString.split(",").map((url) => url.trim()),
    ) || [];

  console.log(submission.value);
  console.log(prisma.spare);

  await prisma.spare.create({
    data: {
      name: submission.value.name,
      category: submission.value.category,
      description: submission.value.description,
      isFeatured: submission.value.isFeatured === true ? true : false,
      price: submission.value.price,
      status: submission.value.status,
      images: flattenUrls,
    },
  });

  redirect("/admin/spares");
}

export async function deleteSpare(formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }
  const spareId = formData.get("spareId") as string;

  try {
    // **1. Fetch the vehicle to get images**
    const spare = await prisma.spare.findUnique({
      where: { id: spareId },
      select: { images: true }, // Adjust field name if necessary
    });

    if (!spare) {
      throw new Error("Vehicle not found");
    }

    const images = spare.images as string[]; // Assuming images are stored as an array of URLs
    console.log(images);

    // **2. Delete images sequentially**
    for (const image of images) {
      //console.log(image);
      await utDeleteImage(image);
    }

    // **3. Delete the vehicle after images are removed**
    await prisma.spare.delete({
      where: { id: spareId },
    });

    //console.log("Vehicle and associated images deleted successfully");
  } catch (error) {
    console.error("Error deleting vehicle or images:", error);
    return redirect("/admin/vehicles?error=deletion_failed");
  }
  return redirect("/admin/spares/");
}

export async function editSpare(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: spareSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim()),
  );

  const spareId = formData.get("spareId") as string;

  await prisma.spare.update({
    where: {
      id: spareId,
    },
    data: {
      name: submission.value.name,
      category: submission.value.category,
      description: submission.value.description,
      isFeatured: submission.value.isFeatured === true ? true : false,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenUrls,
    },
  });
  redirect("/admin/spares/");
}
