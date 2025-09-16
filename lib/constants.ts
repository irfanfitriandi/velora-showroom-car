import { FaqItem, Feature, Testimonial } from './types';

export const NAV_LINKS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Cars for Sale',
    path: '/cars',
  },
  {
    label: 'About Us',
    path: '/about',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
] as const;

export const HERO_CONTENT = {
  badge: {
    text: 'Trusted by 500+ used car buyers',
  },
  title: 'Find Your Trusted Used Car, Ready to Drive',
  subtitle: 'Certified condition, honest pricing, and hassle-free financing.',
  search: {
    placeholder: 'Search...',
    buttonLabel: 'Search',
  },
  stats: [
    {
      value: '29+',
      label: 'Years of Automotive Experience',
      image:
        'https://blast-dew-99513560.figma.site/_assets/v11/a6d0bf412cfa51a9be9d78bbb1f0f3942841b9ea.png',
    },
    {
      value: '500+',
      label: 'Verified & Certified Cars Successfully Sold',
      image:
        'https://blast-dew-99513560.figma.site/_assets/v11/a6d0bf412cfa51a9be9d78bbb1f0f3942841b9ea.png',
    },
    {
      value: '100+',
      label: 'Actively Listed Cars Updated Monthly',
      image:
        'https://blast-dew-99513560.figma.site/_assets/v11/a6d0bf412cfa51a9be9d78bbb1f0f3942841b9ea.png',
    },
    {
      value: '150+',
      label: 'Happy Buyers Across Indonesia',
      image:
        'https://blast-dew-99513560.figma.site/_assets/v11/a6d0bf412cfa51a9be9d78bbb1f0f3942841b9ea.png',
    },
  ],
};

// HOT DEALS SECTION
export const HOT_DEALS_FILTERS = [
  'All Car',
  'Toyota',
  'Suzuki',
  'Audi',
  'BMW',
  'Daihatsu',
  'Wuling',
  'Honda',
  'Hyundai',
  'Nissan',
];

export const HOT_DEALS_CARS = [
  {
    id: 1,
    brand: 'BMW',
    model: '520d',
    year: 2014,
    image:
      'https://blast-dew-99513560.figma.site/_assets/v11/05719a3fc9f44854eb4eeee38dac3f4138f5d34a.png',
    specs: {
      year: 2018,
      transmission: 'Matic',
      fuel: 'Diesel',
      mileage: '82,000 KM',
    },
    price: 'Rp 297.000.000',
    highlight: false,
  },
  {
    id: 2,
    brand: 'Audi',
    model: 'A4',
    year: 2015,
    image:
      'https://blast-dew-99513560.figma.site/_assets/v11/05719a3fc9f44854eb4eeee38dac3f4138f5d34a.png',
    specs: {
      year: 2018,
      transmission: 'Matic',
      fuel: 'Diesel',
      mileage: '82,000 KM',
    },
    price: 'Rp 285.000.000',
    highlight: false,
  },
  {
    id: 3,
    brand: 'Toyota',
    model: 'Camry',
    year: 2018,
    image:
      'https://blast-dew-99513560.figma.site/_assets/v11/05719a3fc9f44854eb4eeee38dac3f4138f5d34a.png',
    specs: {
      year: 2018,
      transmission: 'Matic',
      fuel: 'Diesel',
      mileage: '82,000 KM',
    },
    price: 'Rp 285.000.000',
    highlight: true, // misalnya yang dikasih border kuning
  },
  {
    id: 4,
    brand: 'Audi',
    model: 'A4',
    year: 2015,
    image:
      'https://blast-dew-99513560.figma.site/_assets/v11/05719a3fc9f44854eb4eeee38dac3f4138f5d34a.png',
    specs: {
      year: 2018,
      transmission: 'Matic',
      fuel: 'Diesel',
      mileage: '82,000 KM',
    },
    price: 'Rp 285.000.000',
    highlight: false,
  },
  {
    id: 5,
    brand: 'Toyota',
    model: 'Camry',
    year: 2018,
    image:
      'https://blast-dew-99513560.figma.site/_assets/v11/05719a3fc9f44854eb4eeee38dac3f4138f5d34a.png',
    specs: {
      year: 2018,
      transmission: 'Matic',
      fuel: 'Diesel',
      mileage: '82,000 KM',
    },
    price: 'Rp 285.000.000',
    highlight: false,
  },
  {
    id: 6,
    brand: 'BMW',
    model: '520d',
    year: 2014,
    image:
      'https://blast-dew-99513560.figma.site/_assets/v11/05719a3fc9f44854eb4eeee38dac3f4138f5d34a.png',
    specs: {
      year: 2018,
      transmission: 'Matic',
      fuel: 'Diesel',
      mileage: '82,000 KM',
    },
    price: 'Rp 297.000.000',
    highlight: false,
  },
];

export const WHY_CHOOSE_US = {
  heading: 'Why Choose Velora?',
  subheading:
    'At Velora, every car is inspected, verified, and backed by our commitment to quality, transparency, and support. No guesswork. Just trusted cars and trusted service.',
  badge: {
    banner:
      'https://blast-dew-99513560.figma.site/_assets/v11/492271a9f739c95257ca52bc27fcef1df06dd6b5.png',
    label: '100+ Exclusive Cars',
    description: 'Handpicked for quality, style, and performance.',
    image: '/images/exclusive-cars.jpg', // Adjust based on your public folder
  },
  features: [
    {
      id: 1,
      icon: 'verified',
      title: 'Certified Used Cars',
      description:
        'Every car is professionally inspected and certified to meet high standards of safety and performance.',
    },
    {
      id: 2,
      icon: 'badge-dollar-sign',
      title: 'Transparent Pricing',
      description:
        'No hidden fees or gimmicks. What you see is what you pay. Honest pricing every step of the way.',
    },
    {
      id: 3,
      icon: 'users',
      title: 'Real Human Support',
      description:
        'Got questions? Our team is ready to assist you directly via WhatsApp — no bots, no delays.',
    },
    {
      id: 4,
      icon: 'credit-card',
      title: 'Flexible Installment Options',
      description:
        'Custom financing options made for you. Experience peace of mind while driving your certified dream car today.',
    },
  ] as Feature[],
};

// TESTIMONIALS_SECTION
const MALE_AVATAR =
  'https://blast-dew-99513560.figma.site/_assets/v11/6391f38f820d9b2e129fccdf8492ee5ca505437f.png';
const FEMALE_AVATAR =
  'https://blast-dew-99513560.figma.site/_assets/v11/73d1a6b1534be99d272e40b4eeaa05062da7ebe7.png';

export const TESTIMONIALS_SECTION = {
  HEADING: 'What Our Customers Say',
  SUBHEADING:
    'See why hundreds of car buyers trust Velora — real feedback from satisfied customers across Indonesia.',
  TESTIMONIALS: [
    {
      id: '1',
      name: 'Jacob Edwin',
      car: 'Toyota Avanza 2019',
      message:
        'Velora really made buying my first car easy. The team was helpful, and the installment simulation was super clear!',
      rating: 5,
      image: MALE_AVATAR,
    },
    {
      id: '2',
      name: 'Maya Kartika',
      car: 'Toyota Avanza 2019',
      message:
        'I traded in my old car and got a great deal. The WhatsApp support team was quick to respond and very friendly.',
      rating: 5,
      image: FEMALE_AVATAR,
    },
    {
      id: '3',
      name: 'Ahmad Syahputra',
      car: 'Toyota Avanza 2019',
      message:
        'I traded in my old car and got a great deal. The WhatsApp support team was quick to respond and very friendly.',
      rating: 4,
      image: MALE_AVATAR,
    },
    {
      id: '4',
      name: 'Jordi Sebastian',
      car: 'Toyota Avanza 2019',
      message:
        'I traded in my old car and got a great deal. The WhatsApp support team was quick to respond and very friendly.',
      rating: 4,
      image: MALE_AVATAR,
    },
    {
      id: '5',
      name: 'Sarah Andini',
      car: 'Honda Brio 2020',
      message:
        'Buying my first car was smooth and transparent. The Velora team guided me all the way.',
      rating: 5,
      image: FEMALE_AVATAR,
    },
    {
      id: '6',
      name: 'Daniel Pratama',
      car: 'Toyota Fortuner 2021',
      message: 'Got my dream SUV here. Transparent pricing and no hidden fees. Highly recommended!',
      rating: 5,
      image: MALE_AVATAR,
    },
    {
      id: '7',
      name: 'Nadia Salsabila',
      car: 'Honda HR-V 2020',
      message: 'The WhatsApp support was super fast and friendly. Loved the whole experience.',
      rating: 5,
      image: FEMALE_AVATAR,
    },
    {
      id: '8',
      name: 'Rizky Aditya',
      car: 'Mitsubishi Pajero 2019',
      message: 'I was able to trade in my old car easily and get a great deal on the new one.',
      rating: 4,
      image: MALE_AVATAR,
    },
    {
      id: '9',
      name: 'Putri Ayu',
      car: 'Toyota Yaris 2022',
      message:
        'Velora made it possible for me to finance my car with flexible installments. Love it!',
      rating: 5,
      image: FEMALE_AVATAR,
    },
    {
      id: '10',
      name: 'Arief Nugraha',
      car: 'Honda Civic 2021',
      message:
        'Professional team and very transparent process. I felt confident buying from Velora.',
      rating: 5,
      image: MALE_AVATAR,
    },
    {
      id: '11',
      name: 'Sinta Lestari',
      car: 'Suzuki Ertiga 2020',
      message:
        'The installment options gave me peace of mind. The team was very helpful throughout.',
      rating: 5,
      image: FEMALE_AVATAR,
    },
    {
      id: '12',
      name: 'Bagus Setiawan',
      car: 'Toyota Innova 2021',
      message:
        'Easy, transparent, and supportive. I recommend Velora to anyone buying their next car.',
      rating: 5,
      image: MALE_AVATAR,
    },
  ] satisfies Testimonial[],
};

export const FAQ_SECTION = {
  HEADING: 'Frequently Asked Questions',
  SUBHEADING:
    'Get answers to common questions about buying, payments, listings, and how Velora makes car shopping easier.',
  FAQS: [
    {
      id: '1',
      question: 'How do I purchase a car from Velora?',
      answer:
        'You can browse available listings, explore details, and directly contact our team via WhatsApp for further assistance. All transactions are handled securely offline with support from our team.',
    },
    {
      id: '2',
      question: 'Are all cars inspected or certified?',
      answer:
        'You can browse available listings, explore details, and directly contact our team via WhatsApp for further assistance. All transactions are handled securely offline with support from our team.',
    },
    {
      id: '3',
      question: 'Can I trade in my old car?',
      answer:
        'Yes, Velora provides trade-in options. Our team will assist you in evaluating your car and applying it as part of your purchase.',
    },
    {
      id: '4',
      question: 'Can I book a test drive online?',
      answer:
        'Yes, you can schedule a test drive through our listings or by contacting our support team via WhatsApp.',
    },
    {
      id: '5',
      question: 'Is installment or financing available?',
      answer:
        'Yes, flexible financing and installment options are available. Contact our team to find the best plan for you.',
    },
    {
      id: '6',
      question: 'Where is Velora located?',
      answer:
        'Velora operates across multiple cities in Indonesia. Check our website or contact our team for the nearest branch.',
    },
  ] satisfies FaqItem[],
};
