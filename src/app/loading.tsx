import { Skeleton } from "../components/ui/skeleton";

export default function Loading() {
  return (
    <div className="col-start-3 col-end-10 row-span-full row-start-1 flex flex-col items-center justify-center space-y-8 py-20">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <Skeleton className="h-8 w-3/4 bg-gray-400/20" />
        <Skeleton className="h-6 w-5/6 bg-gray-400/20" />
        <Skeleton className="h-6 w-2/3 bg-gray-400/20" />
        <Skeleton className="h-40 w-full rounded-xl bg-gray-400/20" />
        <Skeleton className="h-40 w-full rounded-xl bg-gray-400/20" />
      </div>
    </div>
  );
}
