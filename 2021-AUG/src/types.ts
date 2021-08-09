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
  project?: string;
  logo: string;
  presentation?: string;
  intro: string;
  opening: Paragraph[];
  closing: Paragraph[];
  members: Member[];
}
