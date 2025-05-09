import { deleteSpare } from "@/app/actions/actions";
import SubmitButton from "@/app/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Delete({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className={"h-[80vh] w-full flex items-center justify-center"}>
      <Card className={"max-w-xl"}>
        <CardHeader>
          <CardTitle> Are you sure?</CardTitle>
          <CardDescription>
            This action cannot be undone. This action will permanently delete
            this item and all its data from the database!
          </CardDescription>
        </CardHeader>
        <CardFooter className={"w-full flex justify-between"}>
          <Button variant={"secondary"} asChild>
            <Link href={`/admin/spares/`}>
              <ChevronLeft className={"h-4 w-4 mr-2"} /> Return to spare parts
              list
            </Link>
          </Button>

          <form action={deleteSpare}>
            <input type={"hidden"} name={"spareId"} value={id} />
            <SubmitButton
              loadingText={"DELETING"}
              text={"DELETE"}
              variant={"destructive"}
            />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
