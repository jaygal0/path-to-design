export type DesignerProp = {
  id?: string;
  firstName: string;
  lastName: string;
  slug?: string;
  email?: string | null;
  x?: string | null;
  instagram?: string | null;
  dribble?: string | null;
  url?: string | null;
  oneLiner?: string;
  role?: string | null;
  company?: any;
  responsibilites?: string | null;
  gotStarted?: string | null;
  advice?: string | null;
  regrets?: string | null;
  stayInspired?: string | null;
  apps?: [];
  appExplained?: string | null;
  books?: [];
  booksExplained?: string;
  published?: boolean | null;
  companyURL?: string;
  salary?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type DetailQuestionsProps = {
  question: string;
  answer?: string;
  books?: any;
  apps?: any;
};
