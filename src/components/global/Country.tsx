export function Country({ country }: any) {
  return (
    <div className="inline">
      {country === "Argentina" && "🇦🇷"}
      {country === "Australia" && "🇦🇺"}
      {country === "Brazil" && "🇧🇷"}
      {country === "Canada" && "🇨🇦"}
      {country === "China" && "🇨🇳"}
      {country === "Denmark" && "🇩🇰"}
      {country === "England" && "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}
      {country === "Finland" && "🇫🇮"}
      {country === "France" && "🇫🇷"}
      {country === "Germany" && "🇩🇪"}
      {country === "Greece" && "🇬🇷"}
      {country === "India" && "🇮🇳"}
      {country === "Iran" && "🇮🇷"}
      {country === "Italy" && "🇮🇹"}
      {country === "Japan" && "🇯🇵"}
      {country === "Mexico" && "🇲🇽"}
      {country === "Netherlands" && "🇳🇱"}
      {country === "Norway" && "🇳🇴"}
      {country === "Russia" && "🇷🇺"}
      {country === "Saudi Arabia" && "🇸🇦"}
      {country === "South Africa" && "🇿🇦"}
      {country === "South Korea" && "🇰🇷"}
      {country === "Spain" && "🇪🇸"}
      {country === "Sweden" && "🇸🇪"}
      {country === "Turkey" && "🇹🇷"}
      {country === "United Kingdom" && "🇬🇧"}
      {country === "United States" && "🇺🇸"}
    </div>
  );
}
