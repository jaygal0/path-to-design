import { Avatar } from "./Avatar";
import { AvatarProps } from "./type";

export function CardDesignerGradient({
  firstName,
  lastName,
  country,
  state,
}: AvatarProps) {
  return (
    <div
      className={`${!state && "rectangle-gradient"} ${state && "rectangle-gradient-hover"} mr-4 flex flex-col items-center justify-between rounded-sm px-1 py-2 font-sans text-stone-950 transition-colors`}
    >
      <Avatar firstName={firstName} lastName={lastName} size="sm" />
      <div className="text-md">
        {country == "England" && "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}
        {country == "Mexico" && "🇲🇽"}
        {country == "Sweden" && "🇸🇪"}
      </div>
    </div>
  );
}
