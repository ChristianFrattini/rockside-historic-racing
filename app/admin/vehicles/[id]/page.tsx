import EditVehicleForm from "@/app/components/admin-components/EditVehicleForm";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import React from "react";

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
  const data = await getData(id);
  return <EditVehicleForm data={data} />;
}
