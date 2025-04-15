import SpareParts from "@/app/components/front-components/SpareParts";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  const data = await prisma.spare.findMany({
    where: {
      status: "published",
    },
    select: {
      name: true,
      description: true,
      category: true,
      isFeatured: true,
      price: true,
      images: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

export default async function SparesPage() {
  noStore();
  const data = await getData();
  return <SpareParts data={data} />;
}
