import { RichTextBlockInterface } from '../about-me/about-me.interface';
import { MediaInterface } from '../homepage/home.interface';

export interface ServiceCategoryInterface {
  id: number;
  name: string;
  slug: string;
  subtitle?: string;
  description?: RichTextBlockInterface[];
  image?: MediaInterface | null;
  services?: ServiceInterface[];
}

export interface ServiceInterface {
  id: number;
  title: string;
  slug: string;
  short_description?: string;
  body?: RichTextBlockInterface[];
  cover_image?: MediaInterface | null;
  icon?: MediaInterface | null;
  order?: number;
  category?: {
    id: number;
    name: string;
    slug: string;
  };
}
