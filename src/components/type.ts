export type DesignerProps = {
  advice?: string | null;
  appExplained?: string | null;
  apps?: [];
  books?: [];
  booksExplained?: string;
  company?: any | null;
  companyURL?: string;
  country?: string;
  createdAt?: Date | string;
  dribble?: string | null;
  email?: string | null;
  firstName: string;
  gotStarted?: string | null;
  id?: string;
  instagram?: string | null;
  lastName: string;
  oneLiner?: string;
  published?: boolean | null;
  regrets?: string | null;
  responsibilites?: string | null;
  role?: string | null;
  salary?: number;
  slug?: string;
  stayInspired?: string | null;
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
