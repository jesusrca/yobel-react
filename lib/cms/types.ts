export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  seo: SEO;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  content: string;
  seo: SEO;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  seo: SEO;
  date: string;
  author: string;
}