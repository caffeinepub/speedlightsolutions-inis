export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list' | 'emphasis' | 'link-list';
  text?: string;
  level?: 1 | 2 | 3;
  ordered?: boolean;
  items?: string[];
  style?: 'bold' | 'italic';
  links?: LinkItem[];
}

export interface LinkItem {
  label: string;
  to: string;
  description?: string;
}

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
