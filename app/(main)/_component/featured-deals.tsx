'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Car, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
      <div className="container mx-auto px-5">
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
              >
                <Link href={`/cars/${car.id}`} prefetch={false} className="group">
                  <Card
                    className={cn(
                      'relative border-transparent ring-1 ring-gray-200 transition-all duration-300',
                      'hover:ring-vl-primary hover:shadow-[0_12px_20px_0_rgba(255,179,0,0.32)] hover:ring-2',
                    )}
                  >
                    <div className="relative h-[220px] w-full">
                      <Image
                        src={car.image}
                        alt={`${car.brand} ${car.model}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <CardContent className="flex flex-col gap-4 p-5">
                      <h3 className="text-[20px] font-semibold">
                        {car.brand} {car.model} ({car.year})
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {car.specs.map((spec) => (
                          <div key={spec.label} className="flex gap-2">
                            <Image
                              src={spec.icon}
                              alt={spec.label}
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                            <span className="text-sm font-medium text-black">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-1 h-[1px] w-full border-b"></div>

                      <p className="text-xl font-bold">{car.price}</p>
                    </CardContent>

                    <div className="bg-vl-primary absolute top-2 right-2 w-fit rounded-full p-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                      <MoveUpRight size={20} />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
            {filteredCars.length === 0 && (
              <div className="col-span-full mt-10 flex flex-col items-center justify-center gap-4">
                <span className="text-vl-neutral-5 flex items-center gap-2 text-7xl font-bold">
                  <span>~</span>
                  <Car className="text-vl-neutral-5" size={72} />
                </span>
                <p className="text-vl-neutral-5 col-span-full text-center text-lg">
                  No cars available for the selected filter.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
        {/* CTA */}
        <div className="mt-28 flex justify-center pb-4">
          <Link href="/cars" prefetch={false}>
            <Button variant={'vl-primary'} className="font-semibold" size={'lg'}>
              Explore Cars
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
