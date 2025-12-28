interface Props {
  patternNumber: number;
  heading: string;
  insight: string;
  children: React.ReactNode;
}

export default function Pattern({
  patternNumber,
  heading,
  insight,
  children,
}: Props) {
  return (
    <div className="col-span-1 col-start-2">
      <div className="mb-8">
        <h3 className="text-sm text-muted-foreground">
          Pattern {patternNumber}
        </h3>
        <h4 className="mb-4 text-2xl font-bold">{heading}</h4>
        {children}
        <div className="mt-12 rounded-2xl bg-muted p-4">
          <h5 className="text-muted-foreground">Insights</h5>
          <h6 className="text-3xl font-extralight">{insight}</h6>
        </div>
      </div>
    </div>
  );
}
