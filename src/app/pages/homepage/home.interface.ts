import { ButtonType } from '../../components/shared/button/button';

export interface HomeInterface {
  id: number;
  documentId: string;
  title: string | null;
  subtitle: string | null;
  hero: HeroInterface | undefined;
  about_preview: AboutPreviewInterface | undefined;
  featured_service: FeatureServiceSectionInterface | undefined;
  reviews_section: ReviewInterface[];
  cta_section: CtaSectionInterface | undefined;
  seo: SeoInterface | undefined;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// ---------- COMPONENTI ----------

export interface HeroInterface {
  id: number;
  title: string;
  subtitle: string | null;
  align: 'left' | 'center' | 'right';
  background?: MediaInterface | null;
  cta?: CtaInterface | null;
}

export interface AboutPreviewInterface {
  id: number;
  title: string;
  text: string[]; // Strapi restituisce array se usi richtext o blocchi
  image?: MediaInterface | null;
  image_position: 'left' | 'right';
  invert_on_mobile: boolean;
}

export interface CtaSectionInterface {
  id: number;
  text: string;
  button_label?: string | null;
  button_link?: string | null;
  type?: ButtonType;
}

// ---------- RELAZIONI ----------

export interface FeatureServiceSectionInterface {
  id: number;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  cta?: CtaInterface | null;
  featured_services: ServiceInterface[];
}

export interface ServiceInterface {
  id: number;
  title: string;
  slug: string;
  short_description?: string;
  cover_image?: MediaInterface | null;
  icon?: MediaInterface | null;
  order?: number;
}

export interface ReviewInterface {
  id: number;
  author_name: string;
  rating: number;
  content?: string;
  avatar?: MediaInterface | null;
}

// ---------- SHARED ----------

export interface CtaInterface {
  id: number;
  label: string;
  link: string;
  type: ButtonType;
}

export interface SeoInterface {
  id: number;
  metaTitle: string;
  metaDescription: string;
  ogImage?: MediaInterface | null;
  noIndex: boolean;
  canonicaUrl?: string | null;
}

export interface MediaInterface {
  id: number;
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: Record<string, any>;
}
