import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Skeleton className="w-32 h-12 rounded-lg" />
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-40 h-6" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="w-60 h-4" />
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-auto max-h-[65vh]">
          <div className="overflow-auto">
            <div className="grid grid-cols-7 gap-4 py-2 border-b bg-slate-100 sticky top-0 z-10">
              {Array.from({ length: 7 }).map((_, index) => (
                <Skeleton key={index} className="h-6 w-full" />
              ))}
            </div>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="grid grid-cols-7 gap-4 py-4 border-b">
                <Skeleton className="h-20 w-20 rounded-md" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-24 hidden md:block" />
                <Skeleton className="h-6 w-16 hidden md:block" />
                <Skeleton className="h-6 w-20 hidden md:block" />
                <Skeleton className="h-6 w-24 hidden md:block" />
                <div className="flex justify-end gap-2">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
