export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  year: string;
  videoUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  PORTFOLIO = 'PORTFOLIO',
  ABOUT = 'ABOUT',
  RESEARCH = 'RESEARCH',
  CONTACT = 'CONTACT'
}