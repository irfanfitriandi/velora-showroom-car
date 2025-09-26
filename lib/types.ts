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

// Car Type

export type TransmissionType = 'Manual' | 'Automatic' | 'CVT' | 'Dual Clutch';
export type DrivetrainType = 'FWD' | 'RWD' | 'AWD' | '4WD';
export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
export type CarCondition = 'Excellent' | 'Good' | 'Fair' | 'Needs Repair';
export type LicensePlateType = 'odd' | 'even' | 'not-registered';
export type VehicleType =
  | 'SUV'
  | 'MPV'
  | 'Sedan'
  | 'Hatchback'
  | 'Pickup'
  | 'Convertible'
  | 'Coupe'
  | 'Wagon'
  | 'Van'
  | 'Crossover'
  | 'Minivan'
  | 'Other';
export type CarStatus = 'available' | 'sold';

export type CarSpec = {
  label: string;
  value: string;
  icon: string;
};

export type CarAuthor = {
  name: string;
  contact: string;
};

export type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;

  // Media
  thumbnailImage: string;
  images: string[]; // Additional gallery
  videoUrl?: string;

  // Deskripsi
  description: string;
  specs: CarSpec[];

  // Pricing
  price: number;
  negotiable: boolean;
  highlight: boolean;
  status: CarStatus;

  // Core Specs
  transmission: TransmissionType;
  engineCC: number;
  drivetrain: DrivetrainType;
  fuelType: FuelType;

  // Appearance
  exteriorColor: string;
  interiorColor: string;

  // Usage Info
  kilometersDriven: number;
  ownershipCount: number;
  licensePlateType: LicensePlateType;
  stnkExpiryDate?: string;

  // Kondisi
  condition: CarCondition;
  accidentRecord: boolean;
  warrantyAvailable: boolean;
  serviceRecordAvailable: boolean;

  // Kategori & Metadata
  vehicleType: VehicleType;
  vinNumber?: string;
  tags: string[]; // e.g. ['Tangan Pertama', 'Full Original']
  seoSlug: string;

  // Lokasi & Relasi
  location: string;
  showroomId: number;
  author: CarAuthor;

  // Stats
  viewsCount: number;
  favoriteCount: number;

  // Timestamps
  createdAt: string;
  updatedAt: string;
};
