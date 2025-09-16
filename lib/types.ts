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
