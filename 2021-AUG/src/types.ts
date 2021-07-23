export interface Member {
  name: string;
  role?: string;
  description: string;
}

export interface Paragraph {
  title?: string;
  content: string;
  list?: string[];
}

export interface Team {
  name: string;
  logo: string;
  intro: string;
  opening: Paragraph[];
  closing: Paragraph[];
  members: Member[];
}
