interface Props {
  heading: string;
  desc: string;
}
export function Benefits({ heading, desc }: Props) {
  return (
    <li className="text-stone-400">
      ✅ <span className="font-bold text-white">{heading}</span> &ndash; {desc}
    </li>
  );
}
