import { Skeleton } from "@/components/ui/skeleton";

export default function QuizResultLoading() {
  return (
    <section className="flex min-h-[42rem] items-center py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 space-y-16 p-8 shadow-2xl md:p-12">
        <div className="space-y-4 text-center">
          <Skeleton className="mx-auto h-4 w-36 rounded-full bg-stone-800" />
          <Skeleton className="mx-auto h-12 w-full max-w-xl bg-stone-800" />
          <Skeleton className="mx-auto h-6 w-full max-w-2xl bg-stone-800" />
        </div>

        <section className="text-center">
          <Skeleton className="mx-auto h-6 w-40 bg-stone-800" />
          <div className="mt-4 flex justify-center gap-3">
            <Skeleton className="h-10 w-10 rounded-md bg-stone-800" />
            <Skeleton className="h-10 w-10 rounded-md bg-stone-800" />
            <Skeleton className="h-10 w-10 rounded-md bg-stone-800" />
          </div>
        </section>

        <section>
          <Skeleton className="h-8 w-64 bg-stone-800" />
          <Skeleton className="mt-3 h-5 w-full max-w-2xl bg-stone-800" />
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-stone-800 bg-stone-950/60 p-5"
              >
                <Skeleton className="h-5 w-5 rounded-full bg-stone-800" />
                <Skeleton className="mt-5 h-7 w-5/6 bg-stone-800" />
                <Skeleton className="mt-2 h-7 w-2/3 bg-stone-800" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between gap-3">
            <Skeleton className="h-8 w-64 bg-stone-800" />
            <Skeleton className="h-5 w-32 bg-stone-800" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-stone-800 bg-stone-950/60 p-5"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-full bg-stone-800" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-40 bg-stone-800" />
                    <Skeleton className="h-4 w-28 bg-stone-800" />
                  </div>
                </div>
                <Skeleton className="mt-6 h-4 w-full bg-stone-800" />
                <Skeleton className="mt-2 h-4 w-4/5 bg-stone-800" />
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          {["Apps", "Books", "Tools"].map((label) => (
            <div key={label}>
              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-6 w-52 bg-stone-800" />
                <Skeleton className="h-5 w-28 bg-stone-800" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={`${label}-${index}`} className="space-y-3">
                    <Skeleton className="aspect-square w-full rounded-2xl bg-stone-800" />
                    <Skeleton className="h-4 w-4/5 bg-stone-800" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
