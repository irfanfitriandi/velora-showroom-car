// components/FilterSidebar.tsx
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';

export const FILTER_OPTIONS = [
  {
    key: 'bodyType',
    label: 'Body Type',
    options: [
      { label: 'Sedan', value: 'sedan' },
      { label: 'SUV', value: 'suv' },
      { label: 'Pickup', value: 'pickup' },
      { label: 'Coupe', value: 'coupe' },
    ],
  },
  {
    key: 'price',
    label: 'Price (IDR)',
    options: [
      { label: 'Rp 100jt - 200jt', value: '100000000-200000000' },
      { label: 'Rp 200jt - 300jt', value: '200000000-300000000' },
      { label: 'Rp 300jt - 400jt', value: '300000000-400000000' },
      { label: 'Rp 400jt+', value: '400000000-1000000000' },
    ],
  },
  {
    key: 'year',
    label: 'Year',
    options: [
      { label: '2024', value: '2024' },
      { label: '2023', value: '2023' },
      { label: '2022', value: '2022' },
      { label: '2021', value: '2021' },
      { label: '2020 or older', value: '2020' },
    ],
  },
  {
    key: 'brand',
    label: 'Brand',
    options: [
      { label: 'Toyota', value: 'toyota' },
      { label: 'Honda', value: 'honda' },
      { label: 'BMW', value: 'bmw' },
      { label: 'Audi', value: 'audi' },
      { label: 'Mercedes', value: 'mercedes' },
      { label: 'Daihatsu', value: 'daihatsu' },
    ],
  },
  {
    key: 'kilometers',
    label: 'Kilometers Driven',
    options: [
      { label: '< 50,000 KM', value: '0-50000' },
      { label: '50,000 - 100,000 KM', value: '50000-100000' },
      { label: '100,000 - 150,000 KM', value: '100000-150000' },
      { label: '> 150,000 KM', value: '150000-999999' },
    ],
  },
  {
    key: 'fuelType',
    label: 'Fuel Type',
    options: [
      { label: 'Petrol', value: 'petrol' },
      { label: 'Diesel', value: 'diesel' },
      { label: 'Hybrid', value: 'hybrid' },
      { label: 'Electric', value: 'electric' },
    ],
  },
  {
    key: 'transmission',
    label: 'Transmission',
    options: [
      { label: 'Manual', value: 'manual' },
      { label: 'Matic', value: 'matic' },
    ],
  },
  {
    key: 'licensePlate',
    label: 'License Plate',
    options: [
      { label: 'Genap', value: 'even' },
      { label: 'Ganjil', value: 'odd' },
    ],
  },
];

const FilterSidebar = () => {
  return (
    <aside className="hidden w-full max-w-[280px] shrink-0 flex-col gap-6 md:flex">
      <h2 className="text-lg font-semibold text-gray-800">Search Filters</h2>

      <Accordion type="multiple" className="space-y-2">
        {FILTER_OPTIONS.map((section) => (
          <AccordionItem key={section.label} value={section.label}>
            <AccordionTrigger className="text-sm font-medium text-gray-700">
              {section.label}
            </AccordionTrigger>

            <AccordionContent className="space-y-2 pt-2">
              {section.options.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <Checkbox id={option.value} />
                  <label htmlFor={option.value} className="text-sm text-gray-600">
                    {option.label}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};

export default FilterSidebar;
