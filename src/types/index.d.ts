import { LucideIcon } from "lucide-react";
export type Icon = LucideIcon;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  keywords: string[];
  links: {
    twitter: string;
    github: string;
  };
};

export type textComponents = {
  heading: string;
  desc: string;
  ctas?: boolean;
  now?: any;
};

export type EmailData = {
  to: string;
  subject: string;
  html?: string;
  reactElm?: any;
  text?: string;
};

export type menuItem = {
  title: string;
  href: string;
  disabled?: boolean;
  authorizeOnly?: UserRole;
  icon?: string;
};

export type DesignerProps = {
  apps?: [];
  books?: [];
  company?: any | null;
  companyURL?: string;
  country?: string;
  createdAt?: Date | string;
  dribble?: string | null;
  email?: string | null;
  firstName: string;
  id?: string;
  instagram?: string | null;
  lastName: string;
  oneLiner?: string;
  published?: boolean | null;
  role?: string | null;
  answers?: any | null;
  salary?: number;
  slug?: string;
  updatedAt?: Date | string;
  url?: string | null;
  x?: string | null;
};

export type DetailQuestionsProps = {
  question: string;
  answer?: string;
  books?: any;
  apps?: any;
};

export type AvatarProps = {
  firstName?: string;
  lastName?: string;
  size?: string;
  country?: string;
  state?: boolean;
};
