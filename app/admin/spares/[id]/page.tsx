import EditSpareForm from "@/app/components/admin-components/EditSparesForm";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

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
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  noStore();
  const data = await getData(id);
  return <EditSpareForm data={data} />;
}
