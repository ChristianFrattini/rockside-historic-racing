import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import React from "react";

export default function WorkInProgress() {
  return (
    <div className="flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Work in progress</CardTitle>
          <CardDescription>
            We are currently working on this section. Please, check back soon
            for updates. Thank you for your patience.
          </CardDescription>
          <CardContent className={"flex items-center justify-center"}>
            <LoaderCircle className={"h-32 w-32 animate-spin"} />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
