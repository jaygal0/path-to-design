export function Country({ country }: any) {
  return (
    <div className="inline">
      {country === "England" && "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}
      {country === "United Kingdom" && "🇬🇧"}
      {country === "Mexico" && "🇲🇽"}
      {country === "Sweden" && "🇸🇪"}
      {country === "India" && "🇮🇳"}
      {country === "Iran" && "🇮🇷"}
      {country === "United States" && "🇺🇸"}
      {country === "Germany" && "🇩🇪"}
      {country === "France" && "🇫🇷"}
      {country === "Italy" && "🇮🇹"}
      {country === "Spain" && "🇪🇸"}
      {country === "Brazil" && "🇧🇷"}
      {country === "Canada" && "🇨🇦"}
      {country === "China" && "🇨🇳"}
      {country === "Japan" && "🇯🇵"}
      {country === "South Korea" && "🇰🇷"}
      {country === "Australia" && "🇦🇺"}
      {country === "Netherlands" && "🇳🇱"}
      {country === "Norway" && "🇳🇴"}
      {country === "Denmark" && "🇩🇰"}
      {country === "Finland" && "🇫🇮"}
      {country === "Russia" && "🇷🇺"}
      {country === "Turkey" && "🇹🇷"}
      {country === "Saudi Arabia" && "🇸🇦"}
      {country === "South Africa" && "🇿🇦"}
      {country === "Argentina" && "🇦🇷"}
    </div>
  );
}
