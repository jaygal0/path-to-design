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
  id?: string;
  isPublished?: boolean | null;
  firstName: string;
  lastName: string;
  slug?: string;
  email?: string | null;
  website?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
  x?: string | null;
  dribbble?: string | null;
  country?: string;
  getStarted?: [] | null;
  responsibilities?: [] | null;
  difficulties?: [] | null;
  incorporateApps?: [] | null;
  advice?: [] | null;
  regrets?: [] | null;
  stayInspired?: [] | null;
  oneLiner?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  company?: any | null;
  companyURL?: string;
  role?: string | null;
  apps?: [];
  books?: [];
  profileImage?: string;
  coverImage?: string;
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
  profileImage?: string;
};
