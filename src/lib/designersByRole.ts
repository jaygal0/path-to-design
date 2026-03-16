import type { RoleKey } from "@/lib/roles";

export interface RecommendedDesigner {
  name: string;
  slug: string;
}

export const designersByRole: Record<RoleKey, RecommendedDesigner[]> = {
  product: [
    { name: "Adham Dannaway", slug: "adham-dannaway" },
    { name: "Meghan Martin", slug: "meghan-martin" },
    { name: "Florian Bölter", slug: "florian-blter" },
    { name: "Elena Molinari", slug: "elena-molinari" },
    { name: "Martin Agubata", slug: "martin-agubata" },
    { name: "Raphael Diftopoulos", slug: "raphael-diftopoulos" },
    { name: "Kavé Smailey", slug: "kave-smailey" },
    { name: "Anna Filou", slug: "anna-filou" },
    { name: "Alex Sviryda", slug: "alex-sviryda" },
    { name: "Kamho Yung", slug: "kamho-yung" },
    { name: "Raghav Dua", slug: "raghav-dua" },
    { name: "Ayda Oz", slug: "ayda-oz" },
  ],

  "ui-ux": [
    { name: "Elisa Paduraru", slug: "elisa-paduraru" },
    { name: "Sofia Joelson", slug: "sofia-joelson" },
    { name: "Joacim Bohlander", slug: "joacim-bohlander" },
    { name: "Elpida Boulasiki", slug: "elpida-boulasiki" },
    { name: "Owen Hudock", slug: "owen-hudock" },
    { name: "Nizar Frank Talovic", slug: "nizar-frank-talovic" },
    { name: "Frank Burder", slug: "frank-burder" },
    { name: "Igor Dinuzzi", slug: "igor-dinuzzi" },
    { name: "Joshua Cohen", slug: "joshua-cohen" },
    { name: "Stefan Twerdochlib", slug: "stefan-twerdochlib" },
  ],

  research: [{ name: "Eriol Fox", slug: "eriol-fox" }],

  motion: [
    { name: "Xinyue Gu", slug: "xinyue-gu" },
    { name: "Luke Wittig", slug: "luke-wittig" },
  ],

  brand: [
    { name: "Shahid Khan", slug: "shahid-khan" },
    { name: "Shannel Wheeler", slug: "shannel-wheeler" },
    { name: "Luca Bockmann", slug: "luca-bockmann" },
    { name: "Craig Hansen", slug: "craig-hansen" },
    { name: "Krunal Moliya", slug: "krunal-moliya" },
  ],

  engineer: [{ name: "Linus Rogge", slug: "linus-rogge" }],
};
