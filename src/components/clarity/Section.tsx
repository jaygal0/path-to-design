import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface Props {
  heading: string;
  summary: string;
  children: React.ReactNode;
  designerOneImage?: string;
  designerOne?: string;
  designerOneLink?: string;
}

export default function Section({
  heading,
  summary,
  children,
  designerOneImage,
  designerOne,
  designerOneLink,
}: Props) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="col-span-1 col-start-1 flex flex-col gap-4 text-xl leading-relaxed">
          <div className="sticky top-20 space-y-12">
            <h2 className="text-5xl font-semibold">{heading}</h2>
            <div>
              <p className="mb-3 w-1/2 text-sm text-muted-foreground">
                Based on patterns observed across the directory. Highlighted
                examples include:
              </p>
              <div className="space-y-1">
                <div className="flex items-start gap-3">
                  {designerOne && designerOneLink ? (
                    <Link href={designerOneLink}>
                      <Button variant="link" className="p-0">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={designerOneImage} />
                          <AvatarFallback className="text-xs">
                            {designerOne?.slice(0, 1)}
                          </AvatarFallback>
                        </Avatar>
                        {designerOne}
                      </Button>
                    </Link>
                  ) : (
                    designerOne && <h3>{designerOne}</h3>
                  )}
                </div>
                <div className="flex items-start gap-3">
                  {designerOne && designerOneLink ? (
                    <Link href={designerOneLink}>
                      <Button variant="link" className="p-0">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={designerOneImage} />
                          <AvatarFallback className="text-xs">
                            {designerOne?.slice(0, 1)}
                          </AvatarFallback>
                        </Avatar>
                        {designerOne}
                      </Button>
                    </Link>
                  ) : (
                    designerOne && <h3>{designerOne}</h3>
                  )}
                </div>
                <div className="flex items-start gap-3">
                  {designerOne && designerOneLink ? (
                    <Link href={designerOneLink}>
                      <Button variant="link" className="p-0">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={designerOneImage} />
                          <AvatarFallback className="text-xs">
                            {designerOne?.slice(0, 1)}
                          </AvatarFallback>
                        </Avatar>
                        {designerOne}
                      </Button>
                    </Link>
                  ) : (
                    designerOne && <h3>{designerOne}</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 col-start-2">
          <div className="space-y-20">{children}</div>
        </div>
      </div>
      <div className="px-20 py-56 text-center text-5xl font-thin">
        {summary}
      </div>
    </>
  );
}
