export interface AboutInterface {
  id: number;
  documentId: string;
  title: string;
  bio_text_image: BioTextImageInterface | undefined;
  curriculum?: RichTextBlockInterface[];
  specializations: SpecializationInterface[];
  values: ValueItemInterface[];
  gallery: StudioImageInterface[];
  seo?: SeoInterface;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/* 🧩 COMPONENTI & RELAZIONI                     */

// --- Specializzazioni ---
export interface SpecializationInterface {
  id: number;
  title: string;
  description?: string;
  icon?: MediaInterface | null;
}

export interface BioTextImageInterface {
  id: number;
  title: string;
  text: string[]; // Strapi restituisce array se usi richtext o blocchi
  image?: MediaInterface | null;
  image_position: 'left' | 'right';
  invert_on_mobile: boolean;
}

// --- Valori (component sections.value-item) ---
export interface ValueItemInterface {
  id: number;
  title: string;
  description?: string;
  icon?: MediaInterface | null;
}

// --- Immagini della galleria (studio-image) ---
export interface StudioImageInterface {
  id: number;
  image: MediaInterface;
  alt?: string;
  span?: 'one' | 'two';
  order?: number;
}

/* 🧠 RICHTEXT (NUOVO FORMATO STRAPI 5)          */

export interface RichTextBlockInterface {
  type: string; // "paragraph", "heading", "image", "list", etc.
  children?: RichTextChildInterface[];
  level?: number; // per heading
  format?: string; // es. bold, italic
  image?: MediaInterface; // per blocchi immagine
}

export interface RichTextChildInterface {
  type: string; // "text", "link", ecc.
  text?: string;
  url?: string; // se è un link
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

/* 🔗 SEO & MEDIA SHARED                         */

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
