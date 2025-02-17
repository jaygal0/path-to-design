export function Country({ country }: any) {
  return (
    <div className="inline">
      {country == "England" && "🏴"}
      {country == "Mexico" && "🇲🇽"}
      {country == "Sweden" && "🇸🇪"}
      {country == "India" && "🇮🇳"}
      {country == "Iran" && "🇮🇷"}
    </div>
  );
}
