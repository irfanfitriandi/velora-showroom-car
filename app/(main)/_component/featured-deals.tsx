'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { HOT_DEALS_CARS, HOT_DEALS_FILTERS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const FeaturedDeals = () => {
  const [activeFilter, setActiveFilter] = useState('All Car');

  const filteredCars =
    activeFilter === 'All Car'
      ? HOT_DEALS_CARS
      : HOT_DEALS_CARS.filter((car) => car.brand === activeFilter);

  return (
    <section className="text-vl-neutral-9 bg-white py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[40px] font-semibold">Hot Deals on Used Cars</h2>
          <p className="text-vl-neutral-5 mt-5 text-xl">
            Get the best prices on high-quality, certified used cars carefully inspected,
            well-maintained, and ready to drive.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mt-12 mb-10 flex flex-wrap justify-center gap-3">
          {HOT_DEALS_FILTERS.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? 'vl-primary' : 'vl-default'}
              className={cn(
                'hover:bg-vl-primary/80 border',
                activeFilter === filter && 'border-0 font-bold',
              )}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Car grid with animation */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden rounded-lg border shadow-md transition ${
                  car.highlight ? 'border-vl-primary' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    {car.brand} {car.model} ({car.year})
                  </h3>
                  <div className="my-2 flex gap-4 text-sm text-gray-600">
                    <span>{car.specs.year}</span>
                    <span>{car.specs.transmission}</span>
                    <span>{car.specs.fuel}</span>
                    <span>{car.specs.mileage}</span>
                  </div>
                  <p className="text-xl font-bold">{car.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-28 flex justify-center pb-4">
          <button className="bg-vl-primary hover:bg-vl-primary/80 flex items-center gap-2 rounded-md px-6 py-3 font-semibold transition">
            Explore Cars →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
