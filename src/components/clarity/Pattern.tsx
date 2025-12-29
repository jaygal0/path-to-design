import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface Props {
  patternNumber: number;
  heading: string;
  insight: string;
  description: string;
  bullets: string[];
  designers?: {
    name: string;
    image?: string;
    link?: string;
  }[];
}

export default function Pattern({
  patternNumber,
  heading,
  insight,
  description,
  bullets,
  designers,
}: Props) {
  return (
    <div className="">
      <h3 className="text-sm text-muted-foreground">Pattern {patternNumber}</h3>
      <h4 className="mb-4 text-3xl">{heading}</h4>
      <div className="text-xl font-extralight">
        <p>{description}</p>
        <p className="my-5 text-muted-foreground">What this looked like:</p>
        <ul className="mb-6">
          {bullets.map((item) => (
            <li key={item} className="ml-4 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </div>
      {designers && designers.length > 0 && (
        <div className="mt-6 space-y-2">
          <p className="text-sm text-muted-foreground">
            Based on patterns observed across the directory. Highlighted
            examples include:
          </p>
          <ul className="space-y-1">
            {designers.map((designer) => (
              <li key={designer.name} className="flex items-center gap-3">
                {designer.link ? (
                  <Link href={`/designers/${designer.link}`}>
                    <Button variant="link" className="p-0">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={designer.image} />
                        <AvatarFallback className="text-xs">
                          {designer.name.slice(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                      {designer.name}
                    </Button>
                  </Link>
                ) : (
                  <span>{designer.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-12 rounded-2xl bg-muted p-4">
        <h5 className="text-muted-foreground">Insights</h5>
        <h6 className="text-3xl font-extralight">{insight}</h6>
      </div>
    </div>
  );
}
