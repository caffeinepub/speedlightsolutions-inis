export type ContentBlock =
  | { type: 'heading'; level: 1 | 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'emphasis'; style: 'bold' | 'italic'; text: string };

export interface ContentSection {
  id: string;
  title?: string;
  blocks: ContentBlock[];
}

export interface PageContent {
  id: string;
  title: string;
  sections: ContentSection[];
}
