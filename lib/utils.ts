import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Cars
import {
  Car,
  CarCondition,
  CarStatus,
  DrivetrainType,
  FuelType,
  LicensePlateType,
  TransmissionType,
  VehicleType,
} from './types';

const IMAGE_URL =
  'https://blast-dew-99513560.figma.site/_assets/v11/05719a3fc9f44854eb4eeee38dac3f4138f5d34a.png';
const transmissions: TransmissionType[] = ['Manual', 'Automatic', 'CVT', 'Dual Clutch'];
const drivetrains: DrivetrainType[] = ['FWD', 'RWD', 'AWD', '4WD'];
const fuels: FuelType[] = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
const conditions: CarCondition[] = ['Excellent', 'Good', 'Fair', 'Needs Repair'];
const plates: LicensePlateType[] = ['odd', 'even', 'not-registered'];
const vehicleTypes: VehicleType[] = [
  'SUV',
  'MPV',
  'Sedan',
  'Hatchback',
  'Pickup',
  'Convertible',
  'Coupe',
  'Wagon',
  'Van',
  'Crossover',
  'Minivan',
  'Other',
];
const statuses: CarStatus[] = ['available', 'sold'];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateCars(count: number): Car[] {
  return Array.from({ length: count }).map((_, i) => {
    const transmission = randomItem(transmissions);
    const drivetrain = randomItem(drivetrains);
    const fuelType = randomItem(fuels);
    const condition = randomItem(conditions);
    const licensePlateType = randomItem(plates);
    const vehicleType = randomItem(vehicleTypes);
    const status = randomItem(statuses);

    return {
      id: i + 1,
      brand: [
        'Toyota',
        'Suzuki',
        'Audi',
        'BMW',
        'Daihatsu',
        'Wuling',
        'Honda',
        'Hyundai',
        'Nissan',
      ][i % 9],
      model: `Model-${i + 1}`,
      year: 2010 + (i % 15),
      thumbnailImage: IMAGE_URL,
      images: Array.from({ length: 7 }).map(() => IMAGE_URL),
      description: `This is a ${vehicleType} ${transmission} ${fuelType} car.`,
      specs: [
        {
          label: 'Year',
          value: `${2010 + (i % 15)}`,
          icon: 'https://blast-dew-99513560.figma.site/_assets/v11/5325263adcdf9b66d84cec2217f9ff1086f23f6a.svg',
        },
        {
          label: 'Transmission',
          value: transmission,
          icon: 'https://blast-dew-99513560.figma.site/_assets/v11/4eec07c05cd54db4056cecdcb95ce341abccba61.svg',
        },
        {
          label: 'Fuel',
          value: fuelType,
          icon: 'https://blast-dew-99513560.figma.site/_assets/v11/1e8115e8f7986e3c0f714370eaa4d9b69f8b61c1.svg',
        },
        {
          label: 'Mileage',
          value: `${(50_000 + i * 100).toLocaleString()} KM`,
          icon: 'https://blast-dew-99513560.figma.site/_assets/v11/ea3c54e07791213ad4c4eedfc246af07fd2ec11d.svg',
        },
      ],
      price: 200_000_000 + i * 1_000_000,
      negotiable: i % 2 === 0,
      highlight: i % 10 === 0,
      status,
      transmission,
      engineCC: 1000 + (i % 5) * 500,
      drivetrain,
      fuelType,
      exteriorColor: ['Black', 'White', 'Silver', 'Blue', 'Red'][i % 5],
      interiorColor: ['Beige', 'Black', 'Gray'][i % 3],
      kilometersDriven: 50_000 + i * 500,
      ownershipCount: (i % 3) + 1,
      licensePlateType,
      stnkExpiryDate: `202${i % 5}-12-31`,
      condition,
      accidentRecord: i % 4 === 0,
      warrantyAvailable: i % 3 === 0,
      serviceRecordAvailable: i % 2 === 0,
      vehicleType,
      vinNumber: `VIN${100000 + i}`,
      tags: ['Tangan Pertama', 'Full Original'].slice(0, (i % 2) + 1),
      seoSlug: `car-${i + 1}`,
      location: ['Jakarta', 'Bandung', 'Surabaya', 'Medan'][i % 4],
      showroomId: (i % 5) + 1,
      author: {
        name: `Author ${i + 1}`,
        contact: `08123${i.toString().padStart(6, '0')}`,
      },
      viewsCount: Math.floor(Math.random() * 5000),
      favoriteCount: Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  });
}

let cachedCars: Car[] | null = null;

export const getCarsFromSession = (): Car[] => {
  if (!cachedCars) {
    cachedCars = generateCars(110); // generate 1x per server start or restart
  }
  return cachedCars;
};
