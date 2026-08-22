export type PageRoute = 'home' | 'about' | 'services' | 'products' | 'training' | 'projects' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'hydraulic' | 'maintenance' | 'oilgas' | 'manpower' | 'automation' | 'marine';
  iconName: string;
  image: string;
  features: string[];
  equipmentList?: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  brand?: string;
  iconName: string;
  image: string;
  isFeatured?: boolean;
}

export interface TrainingCourse {
  id: string;
  title: string;
  category: 'management' | 'hse' | 'technical' | 'oilgas' | 'emergency';
  isAdditional?: boolean;
  duration?: string;
  targetAudience?: string;
  description: string;
  topics?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  fallbackImage?: string;
  highlights: string[];
}

export interface ClientItem {
  id: string;
  name: string;
  fullName: string;
  category: string;
  description: string;
  scope: string;
  tag: string;
  badgeColor?: string;
}

export interface QuoteCartItem {
  id: string;
  title: string;
  type: 'product' | 'service' | 'course';
  quantity?: number;
  details?: string;
}

export interface ContactFormData {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}
