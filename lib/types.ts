export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  car: string;
  message: string;
  rating: number;
  image: string; // path to avatar image
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type CarSpec = {
  label: string;
  icon: string; // path to SVG
  value: string | number;
};

export type HotDealsCar = {
  id: number;
  brand: string;
  model: string;
  year: number;
  image: string;
  specs: CarSpec[];
  price: string;
  highlight: boolean;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: {
    url: string;
    alt?: string;
  };
  date: string; // createdAt
  updatedAt?: string;
  publishedAt?: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
    slug?: string;
  };
  tags?: string[];
  categories?: string[];
  isFeatured?: boolean;
  status?: 'draft' | 'published' | 'scheduled';
};
