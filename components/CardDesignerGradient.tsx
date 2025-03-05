import { Avatar } from "./Avatar";
import { AvatarProps } from "@/types";
import { Country } from "./global/Country";

export function CardDesignerGradient({
  firstName,
  lastName,
  country,
  state,
  profileImage,
}: AvatarProps) {
  return (
    <div
      className={`${!state && "rectangle-gradient"} ${state && "rectangle-gradient-hover"} mr-4 flex flex-col items-center justify-between rounded-sm px-1 py-2 font-sans text-stone-950 transition-colors`}
    >
      <Avatar
        firstName={firstName}
        lastName={lastName}
        size="sm"
        profileImage={profileImage}
      />
      <Country country={country} />
    </div>
  );
}
