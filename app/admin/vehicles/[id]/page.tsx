import EditVehicleForm from "@/app/components/admin-components/EditVehicleForm";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

async function getData(vehicleId: string) {
  const data = await prisma.vehicle.findUnique({
    where: {
      id: vehicleId,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}

export default async function EditVehicle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  noStore();
  const data = await getData(id);
  return <EditVehicleForm data={data} />;
}
