
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  dataAiHint?: string;
}

export interface VideoItem extends PortfolioItem {
  videoUrl: string; // Could be YouTube embed URL or similar
}

export interface EditingItem extends PortfolioItem {
  beforeImageUrl: string;
  afterImageUrl: string;
  beforeDataAiHint?: string;
  afterDataAiHint?: string;
}

export interface DevelopmentProject extends PortfolioItem {
  codeSnippet?: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}
