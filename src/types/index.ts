export type PageId = 'home' | 'about-us' | 'programs' | 'insights-blog' | 'contact' | 'register-interest';

export interface Article {
  id: string;
  title: string;
  category: 'Medical Interpreting' | 'Ethics & Standards' | 'Language Proficiency' | 'Career Development' | 'Training & Drills';
  readTime: string;
  date: string;
  tagCode?: string;
  summary: string;
  author: string;
  authorTitle: string;
  isFeatured?: boolean;
  content?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProgramSpec {
  parameter: string;
  medicalInterpreter: string;
  languageProficiency: string;
  continuingEducation: string;
}
