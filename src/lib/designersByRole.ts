import type { RoleKey } from "@/lib/roles";

export interface RecommendedDesigner {
  name: string;
  slug: string;
}

export const designersByRole: Record<RoleKey, RecommendedDesigner[]> = {
  product: [
    { name: "Martin Agubata", slug: "martin-agubata" },
    { name: "Elena Molinari", slug: "elena-molinari" },
    { name: "Meghan Martin", slug: "meghan-martin" },
    { name: "Raphael Diftopoulos", slug: "raphael-diftopoulos" },
  ],
  ux: [
    { name: "Elisa Paduraru", slug: "elisa-paduraru" },
    { name: "Sofia Joelson", slug: "sofia-joelson" },
    { name: "Victor Skold", slug: "victor-skold" },
  ],
  ui: [
    { name: "Elisa Paduraru", slug: "elisa-paduraru" },
    { name: "Sofia Joelson", slug: "sofia-joelson" },
    { name: "Owen Hudock", slug: "owen-hudock" },
  ],
  research: [{ name: "Eriol Fox", slug: "eriol-fox" }],
  motion: [{ name: "Xinyue Gu", slug: "xinyue-gu" }],
  brand: [{ name: "Shahid Khan", slug: "shahid-khan" }],
  engineer: [{ name: "Linus Rogge", slug: "linus-rogge" }],
};
