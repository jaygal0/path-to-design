export const roleOrder = [
  "product",
  "ux",
  "ui",
  "research",
  "motion",
  "brand",
  "engineer",
] as const;

export type RoleKey = (typeof roleOrder)[number];

export interface RoleDefinition {
  key: RoleKey;
  name: string;
  description: string;
  directoryRole: string;
}

export const roles: Record<RoleKey, RoleDefinition> = {
  product: {
    key: "product",
    name: "Product Designer",
    description:
      "You enjoy solving problems and shaping digital products from idea to launch.",
    directoryRole: "Product Designer",
  },
  ux: {
    key: "ux",
    name: "UX Designer",
    description: "You enjoy improving usability and making products intuitive.",
    directoryRole: "UI/UX Designer",
  },
  ui: {
    key: "ui",
    name: "UI Designer",
    description: "You enjoy crafting visually beautiful interfaces.",
    directoryRole: "UI/UX Designer",
  },
  research: {
    key: "research",
    name: "UX Researcher",
    description:
      "You enjoy understanding human behaviour and discovering insights.",
    directoryRole: "UX Researcher",
  },
  motion: {
    key: "motion",
    name: "Motion Designer",
    description: "You enjoy bringing interfaces to life with animation.",
    directoryRole: "Motion Designer",
  },
  brand: {
    key: "brand",
    name: "Brand Designer",
    description: "You enjoy designing visual identities and brand systems.",
    directoryRole: "Brand Designer",
  },
  engineer: {
    key: "engineer",
    name: "Design Engineer",
    description: "You enjoy combining design and code to build interfaces.",
    directoryRole: "Design Engineer",
  },
};

// Add new quiz roles here, then update the quiz questions, scoring defaults,
// and any role-specific recommendations to keep the funnel in sync.
export function getDirectoryRoleLabel(role: RoleKey) {
  return roles[role].directoryRole;
}

export function isRoleKey(value: string | null | undefined): value is RoleKey {
  return Boolean(value && roleOrder.includes(value as RoleKey));
}
