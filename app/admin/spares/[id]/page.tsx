import EditSpareForm from "@/app/components/admin-components/EditSparesForm";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function getData(spareId: string) {
  const data = await prisma.spare.findUnique({
    where: {
      id: spareId,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}

export default async function EditSpare({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  return <EditSpareForm data={data} />;
}
