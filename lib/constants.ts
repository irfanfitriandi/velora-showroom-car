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

export const FOOTER_CONTENT = {
  brand: {
    icon: 'https://blast-dew-99513560.figma.site/_assets/v11/6444feed97223b4673093780abc23fc85b9b2af4.svg',
    name: 'Velora',
    description: 'Discover verified used cars, with full confidence and zero guesswork.',
    copyright: '© 2025 Velora',
  },
  menus: {
    title: 'MENUS',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Cars for Sale', href: '/cars' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  social: {
    title: 'SOCIAL MEDIA',
    items: [
      { label: 'LinkedIn', href: 'https://linkedin.com/company/velora' },
      { label: 'Instagram', href: 'https://instagram.com/velora' },
      { label: 'X', href: 'https://x.com/velora' },
    ],
  },
  contact: {
    title: 'CONTACT',
    items: [
      { label: 'Phone', value: '(021) 130 7591', href: 'tel:0211307591' },
      { label: 'WhatsApp', value: '0857 8930 0028', href: 'https://wa.me/6285789300028' },
      { label: 'Email', value: 'velora@gmail.com', href: 'mailto:velora@gmail.com' },
      {
        label: 'Address',
        value:
          'Jl. K.H. Mas Mansyur No.121 Level 2, RT.10/RW.11, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220',
        href: 'https://maps.google.com/?q=Jl.+K.H.+Mas+Mansyur+No.121+Jakarta',
      },
    ],
  },
};

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
    specs: [
      {
        label: 'Year',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/5325263adcdf9b66d84cec2217f9ff1086f23f6a.svg',
        value: 2018,
      },
      {
        label: 'Transmission',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/4eec07c05cd54db4056cecdcb95ce341abccba61.svg',
        value: 'Matic',
      },
      {
        label: 'Fuel',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/1e8115e8f7986e3c0f714370eaa4d9b69f8b61c1.svg',
        value: 'Diesel',
      },
      {
        label: 'Mileage',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/ea3c54e07791213ad4c4eedfc246af07fd2ec11d.svg',
        value: '82,000 KM',
      },
    ],
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
    specs: [
      {
        label: 'Year',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/5325263adcdf9b66d84cec2217f9ff1086f23f6a.svg',
        value: 2018,
      },
      {
        label: 'Transmission',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/4eec07c05cd54db4056cecdcb95ce341abccba61.svg',
        value: 'Matic',
      },
      {
        label: 'Fuel',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/1e8115e8f7986e3c0f714370eaa4d9b69f8b61c1.svg',
        value: 'Diesel',
      },
      {
        label: 'Mileage',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/ea3c54e07791213ad4c4eedfc246af07fd2ec11d.svg',
        value: '82,000 KM',
      },
    ],
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
    specs: [
      {
        label: 'Year',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/5325263adcdf9b66d84cec2217f9ff1086f23f6a.svg',
        value: 2018,
      },
      {
        label: 'Transmission',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/4eec07c05cd54db4056cecdcb95ce341abccba61.svg',
        value: 'Matic',
      },
      {
        label: 'Fuel',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/1e8115e8f7986e3c0f714370eaa4d9b69f8b61c1.svg',
        value: 'Diesel',
      },
      {
        label: 'Mileage',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/ea3c54e07791213ad4c4eedfc246af07fd2ec11d.svg',
        value: '82,000 KM',
      },
    ],
    price: 'Rp 285.000.000',
    highlight: true,
  },
  {
    id: 4,
    brand: 'Audi',
    model: 'A4',
    year: 2015,
    image:
      'https://blast-dew-99513560.figma.site/_assets/v11/05719a3fc9f44854eb4eeee38dac3f4138f5d34a.png',
    specs: [
      {
        label: 'Year',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/5325263adcdf9b66d84cec2217f9ff1086f23f6a.svg',
        value: 2018,
      },
      {
        label: 'Transmission',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/4eec07c05cd54db4056cecdcb95ce341abccba61.svg',
        value: 'Matic',
      },
      {
        label: 'Fuel',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/1e8115e8f7986e3c0f714370eaa4d9b69f8b61c1.svg',
        value: 'Diesel',
      },
      {
        label: 'Mileage',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/ea3c54e07791213ad4c4eedfc246af07fd2ec11d.svg',
        value: '82,000 KM',
      },
    ],
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
    specs: [
      {
        label: 'Year',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/5325263adcdf9b66d84cec2217f9ff1086f23f6a.svg',
        value: 2018,
      },
      {
        label: 'Transmission',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/4eec07c05cd54db4056cecdcb95ce341abccba61.svg',
        value: 'Matic',
      },
      {
        label: 'Fuel',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/1e8115e8f7986e3c0f714370eaa4d9b69f8b61c1.svg',
        value: 'Diesel',
      },
      {
        label: 'Mileage',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/ea3c54e07791213ad4c4eedfc246af07fd2ec11d.svg',
        value: '82,000 KM',
      },
    ],
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
    specs: [
      {
        label: 'Year',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/5325263adcdf9b66d84cec2217f9ff1086f23f6a.svg',
        value: 2018,
      },
      {
        label: 'Transmission',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/4eec07c05cd54db4056cecdcb95ce341abccba61.svg',
        value: 'Matic',
      },
      {
        label: 'Fuel',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/1e8115e8f7986e3c0f714370eaa4d9b69f8b61c1.svg',
        value: 'Diesel',
      },
      {
        label: 'Mileage',
        icon: 'https://blast-dew-99513560.figma.site/_assets/v11/ea3c54e07791213ad4c4eedfc246af07fd2ec11d.svg',
        value: '82,000 KM',
      },
    ],
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

// BLOG_SECTION
export const BLOG_SECTION = {
  HEADING: 'Insights & Tips for Smarter Car Buying',
  SUBHEADING:
    'Explore expert advice, market updates, and tips to help you buy and own a used car with confidence.',
  POSTS: [
    {
      id: '1',
      title: '5 Signs a Used Car is Still in Excellent Condition',
      excerpt:
        'Learn how to spot a high-quality used car before buying. From mileage to service records, here’s what smart buyers always check before closing the deal.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Buying a used car can be intimidating, but knowing what to look for makes it easier.
Here are five signs a used car is still in excellent condition:

1. Complete service records available.
2. No unusual sounds when driving.
3. Minimal wear on the interior.
4. No rust or major repaint jobs.
5. Passed a professional inspection.

These indicators will help you choose a reliable car and avoid costly mistakes.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '28 July 2025',
      author: 'Velora Team',
    },
    {
      id: '2',
      title: 'Top 4 Used Cars with the Best Resale Value in 2025',
      excerpt:
        'Discover which used cars hold their value the best this year. We cover SUVs, sedans, and family cars that are smart investments.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Buying a used car with a high resale value is a smart move for anyone looking to make a solid investment.
Here’s our top 4 picks for 2025:

1. Toyota Fortuner — durable diesel engine, strong resale at 80–85%.
2. Honda CR-V — spacious, fuel efficient, resale at 78–82%.
3. Toyota Hilux — tough double-cabin pickup, resale at 82–84%.
4. Daihatsu Terios — affordable SUV, resale at 75–80%.

These cars give buyers confidence when it comes time to resell.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '20 July 2025',
      author: 'Velora Team',
    },
    {
      id: '3',
      title: 'Common Mistakes to Avoid When Buying a Used Car',
      excerpt:
        'Many first-time buyers overlook critical details when purchasing a used car. Avoid these mistakes to save time and money.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

When buying a used car, avoid these mistakes:

1. Skipping a professional inspection.
2. Ignoring the car’s accident history.
3. Not checking financing options.
4. Overlooking running costs like fuel and maintenance.

Avoiding these pitfalls ensures a smarter, safer purchase.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '15 July 2025',
      author: 'Velora Team',
    },
    {
      id: '4',
      title: 'How to Negotiate the Best Price for a Used Car',
      excerpt:
        'Negotiating a used car price can save you a lot. Learn the strategies professionals use to get the best deal.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Negotiating tips:

- Do your research on market prices.
- Get multiple options before committing.
- Always be ready to walk away.
- Use car history and inspection reports to strengthen your case.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '10 July 2025',
      author: 'Velora Team',
    },
    {
      id: '5',
      title: 'Why Certified Used Cars Are Worth It',
      excerpt:
        'Certified used cars often cost more, but they come with peace of mind. Here’s why certification matters.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Certified used cars are worth considering because:

- Thoroughly inspected by professionals.
- Usually come with limited warranties.
- Provide more trust for the buyer.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '05 July 2025',
      author: 'Velora Team',
    },
    {
      id: '6',
      title: 'Best Financing Options for Used Cars in 2025',
      excerpt:
        'Explore the latest financing and installment options available for used car buyers this year.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Financing tips:

- Compare multiple banks and finance companies.
- Look for low-interest plans.
- Ask about flexible early repayment.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '01 July 2025',
      author: 'Velora Team',
    },
    {
      id: '7',
      title: 'How to Trade In Your Car for Maximum Value',
      excerpt:
        'Trading in your old car can reduce the cost of your new purchase. Learn how to maximize your trade-in value.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Trade-in tips:

- Clean and detail your car before appraisal.
- Repair minor issues.
- Gather service records.
- Time your trade-in when demand is high.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '28 June 2025',
      author: 'Velora Team',
    },
    {
      id: '8',
      title: 'Used Car Maintenance Tips for Longevity',
      excerpt:
        'Maintaining your used car well ensures it stays reliable. Follow these essential maintenance practices.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Maintenance checklist:

- Regular oil changes.
- Rotate tires.
- Replace filters on schedule.
- Keep up with servicing.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '25 June 2025',
      author: 'Velora Team',
    },
    {
      id: '9',
      title: 'Should You Buy or Lease a Used Car?',
      excerpt:
        'Understand the pros and cons of leasing versus buying a used car to make the right decision for your budget.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Buying vs Leasing:

- Buying: Ownership, long-term savings.
- Leasing: Lower upfront cost, but no ownership.
- Consider your usage and finances before deciding.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '20 June 2025',
      author: 'Velora Team',
    },
    {
      id: '10',
      title: 'Top Family-Friendly Used Cars in 2025',
      excerpt:
        'Looking for a reliable family car? These used cars combine comfort, safety, and value.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Family-friendly picks:

1. Toyota Avanza
2. Honda BR-V
3. Suzuki Ertiga
4. Mitsubishi Xpander`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '15 June 2025',
      author: 'Velora Team',
    },
    {
      id: '11',
      title: 'How to Check a Used Car’s History Before Buying',
      excerpt: 'Car history reports are critical. Learn how to use them to avoid hidden issues.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Check history:

- Look for accident records.
- Verify odometer readings.
- Ensure no outstanding loans.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '10 June 2025',
      author: 'Velora Team',
    },
    {
      id: '12',
      title: 'Best SUVs for Used Car Buyers in 2025',
      excerpt: 'SUVs dominate the market. Here are the best used SUVs to buy this year.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Top SUVs:

1. Toyota Fortuner
2. Honda CR-V
3. Mitsubishi Pajero Sport
4. Nissan X-Trail`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '05 June 2025',
      author: 'Velora Team',
    },
    {
      id: '13',
      title: 'Signs of a Flood-Damaged Car (and How to Spot Them)',
      excerpt: 'Flood-damaged cars can be risky. Learn the warning signs and how to avoid them.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Flood damage signs:

- Musty smell.
- Water stains under seats.
- Corroded wiring.
- Foggy headlights.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '01 June 2025',
      author: 'Velora Team',
    },
    {
      id: '14',
      title: 'Top 5 Affordable Sedans in 2025',
      excerpt: 'Sedans are still popular for budget-conscious buyers. Here are 5 affordable picks.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Affordable sedans:

1. Toyota Vios
2. Honda City
3. Nissan Almera
4. Suzuki Ciaz
5. Hyundai Accent`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '28 May 2025',
      author: 'Velora Team',
    },
    {
      id: '15',
      title: 'Why Mileage Matters When Buying a Used Car',
      excerpt:
        'Mileage is one of the biggest indicators of a car’s value. Here’s what to know before buying.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Mileage guide:

- Below 20,000 km/year = excellent.
- 20,000–30,000 km/year = average.
- Above 30,000 km/year = high usage.`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '20 May 2025',
      author: 'Velora Team',
    },
    {
      id: '16',
      title: 'Best Hatchbacks for City Driving in 2025',
      excerpt: 'Hatchbacks are perfect for urban mobility. Here are the top picks for 2025.',
      content: `
lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.

Top hatchbacks:

1. Honda Jazz
2. Toyota Yaris
3. Suzuki Swift
4. Hyundai i20`,
      image: 'https://images.unsplash.com/photo-1550955295-77d6e18a24da',
      date: '15 May 2025',
      author: 'Velora Team',
    },
  ],
  //  satisfies BlogPost[],
};
