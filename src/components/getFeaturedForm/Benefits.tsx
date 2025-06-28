interface Props {
  heading: string;
  desc: string;
}
export function Benefits({ heading, desc }: Props) {
  return (
    <li className="text-muted-foreground">
      ✅ <span className="text-foreground">{heading}</span> &ndash; {desc}
    </li>
  );
}
