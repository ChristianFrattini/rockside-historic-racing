import { deleteVehicle } from "@/app/actions/actions";
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

export default function Delete({ params }: { params: { id: string } }) {
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
            <Link href={`/admin/vehicles/`}>
              <ChevronLeft className={"h-4 w-4 mr-2"} /> Return to vehicles list
            </Link>
          </Button>

          <form action={deleteVehicle}>
            <input type={"hidden"} name={"vehicleId"} value={params.id} />
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
