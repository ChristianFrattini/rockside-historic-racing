import { Skeleton } from "@/components/ui/skeleton";

export function ContactFormSkeleton() {
  return (
    <div className="text-center bg-greyish rounded-xl">
      <div className="mt-5 flex flex-col dark:text-black px-3 pb-2 gap-5">
        {/* first name and last name row */}
        <div className="flex space-x-3 justify-between">
          <div className="flex flex-col gap-3 w-full">
            <Skeleton className="h-4 w-1/4 rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Skeleton className="h-4 w-1/4 rounded-lg" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        </div>

        {/* email field */}
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-1/4 rounded-lg" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>

        {/* telephone field */}
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-1/4 rounded-lg" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>

        {/* message textarea */}
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-1/4 rounded-lg" />
          <Skeleton className="h-[9.5rem] w-full rounded-lg" />
        </div>

        {/* send message button */}
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>

      {/* footer text */}
      <div className="text-gray-600 mt-3 dark:text-white/80 px-2 font-medium">
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4 mt-2 rounded-lg" />
      </div>
    </div>
  );
}
