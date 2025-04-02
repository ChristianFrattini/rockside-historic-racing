import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <Skeleton className="w-40 h-6" />
      <Skeleton className="w-60 h-4" />

      <div className="flex flex-col lg:flex-row justify-between gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-3 w-full">
            <Skeleton className="w-24 h-5" />
            <Skeleton className="w-full h-10" />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-full h-20" />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-full h-10" />
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-full h-40" />
      </div>

      <div className="flex justify-between">
        <Skeleton className="w-24 h-10 rounded-lg" />
        <Skeleton className="w-24 h-10 rounded-lg" />
      </div>
    </div>
  );
}
