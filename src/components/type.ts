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
