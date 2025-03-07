import Image from "next/image";

export function AppsUsed({ apps }: any) {
  return (
    <div>
      <h3 className="mb-4 font-serif text-2xl text-stone-200">
        What apps do you use to help you design?
      </h3>
      <div className="flex flex-wrap gap-10 gap-y-4">
        {apps
          ?.slice() // Create a shallow copy to avoid mutating the original array
          .sort((a: any, b: any) => a.app.localeCompare(b.app)) // Sort alphabetically
          .map((app: any) => {
            return (
              <a
                key={app.app}
                className="font-sans font-thin leading-relaxed"
                href={app.url}
                target="_blank"
              >
                <div
                  key={app.app}
                  className="flex flex-col items-center gap-2 rounded-xl"
                >
                  <Image
                    src={`/apps/${app.app.toLowerCase().replace(/ /g, "-")}.jpg`}
                    alt={app.app}
                    width={80}
                    height={80}
                    quality={100}
                    className="rounded-xl transition-all hover:scale-105" // Add this here
                  />
                  <p className="my-0 w-[80px] text-center text-sm capitalize">
                    {app.app}
                  </p>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
}
