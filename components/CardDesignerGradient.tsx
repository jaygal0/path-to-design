import { Avatar } from "./Avatar";
import { AvatarProps } from "./type";

export function CardDesignerGradient({
  firstName,
  lastName,
  country,
}: AvatarProps) {
  return (
    <div className="rectangle-gradient mr-4 flex flex-col items-center justify-between rounded-sm px-1 py-2 font-sans text-stone-950">
      <Avatar firstName={firstName} lastName={lastName} size="sm" />
      <div className="text-md">
        {country == "England" && "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}
        {country == "Mexico" && "🇲🇽"}
        {country == "Sweden" && "🇸🇪"}
      </div>
    </div>
  );
}
