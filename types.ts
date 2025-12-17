export enum Screen {
  Library = 'Library',
  Detail = 'Detail',
  Chat = 'Chat',
  Stream = 'Stream'
}

export interface Artifact {
  id: string;
  title: string;
  description: string;
  type: 'PDF' | 'SHEET' | 'DOC' | 'DRAFT';
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  topic: string;
  complexity: 'High' | 'Medium' | 'Low';
  aiScore: number;
  date: string;
  author: string;
  authorAvatar: string;
  gradient: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  content: string; // HTML string for rich text
  timestamp: string;
  isThinking?: boolean;
}