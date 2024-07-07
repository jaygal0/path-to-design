import Image from "next/image";
import { AvatarProps } from "./type";

export function Avatar({ firstName, lastName, size }: AvatarProps) {
  return (
    <div
      className={`relative ${size == "md" && "h-16 w-16"} ${size == "sm" && "h-6 w-6"} overflow-hidden rounded-full bg-slate-50`}
    >
      <Image
        src={`/profile-${firstName}-${lastName}.png`}
        alt={`Profile image of ${firstName} ${lastName}`}
        objectFit="cover"
        fill
      />
    </div>
  );
}
