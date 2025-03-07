import Image from "next/legacy/image";
import { AvatarProps } from "@/types";

export function Avatar({
  firstName,
  lastName,
  size,
  profileImage,
}: AvatarProps) {
  return (
    <div
      className={`relative ${size == "md" && "h-16 w-16"} ${size == "sm" && "h-6 w-6"} overflow-hidden rounded-full bg-slate-50`}
    >
      <Image
        src={profileImage!}
        alt={`Profile image of ${firstName} ${lastName}`}
        className="w-full object-cover"
        layout="fill"
      />
    </div>
  );
}
