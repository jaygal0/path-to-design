import Image from "next/image";

export function AppsUsed({ apps }: any) {
  return (
    <div>
      <h3 className="mb-4 font-serif text-2xl text-stone-200">
        What apps do you use to design?
      </h3>
      <div className="flex flex-wrap gap-10 gap-y-4">
        {apps?.map((app: any) => {
          return (
            <a
              key={app.app}
              className="font-sans font-thin leading-relaxed"
              href={app.url}
              target="_blank"
            >
              <div
                key={app.app}
                className="flex flex-col items-center gap-2 overflow-hidden rounded-xl"
              >
                <Image
                  src={`/app-${app.app.toLowerCase()}.jpg`}
                  alt={app.app}
                  width={80}
                  height={80}
                  quality={100}
                />
                <p className="my-0 text-center text-sm capitalize">{app.app}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
