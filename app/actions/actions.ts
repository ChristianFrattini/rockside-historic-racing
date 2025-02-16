"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { VehicleSchema } from "../lib/zodSchemas";
import prisma from "../lib/db";

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
