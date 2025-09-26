'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Car } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { CarCard } from '@/components/card/car-card';
import { AutoJustifyScrollRow } from '@/components/shared/auto-justify-scroll-row';
import { Button } from '@/components/ui/button';
import { HOT_DEALS_FILTERS } from '@/lib/constants';
import { Car as CarType } from '@/lib/types';
import { cn } from '@/lib/utils';

// Variants for stagger
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, y: 40, transition: { duration: 0.3 } },
};

const FeaturedDeals = ({ listCars }: { listCars: CarType[] }) => {
  const [activeFilter, setActiveFilter] = useState('All Car');

  const filteredCars =
    activeFilter === 'All Car'
      ? listCars.slice(0, 6)
      : listCars.filter((car) => car.brand === activeFilter).slice(0, 6);

  return (
    <section className="text-vl-neutral-9 bg-white py-[50px] md:py-[100px]">
      <div className="container px-5">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold md:text-[40px]">Hot Deals on Used Cars</h2>
          <p className="text-vl-neutral-5 mt-5 text-sm md:text-xl">
            Get the best prices on high-quality, certified used cars carefully inspected,
            well-maintained, and ready to drive.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AutoJustifyScrollRow className="mt-10 md:mt-12">
            {HOT_DEALS_FILTERS.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'vl-primary' : 'vl-default'}
                className={cn(
                  'border text-sm transition-all duration-300 hover:brightness-90 md:text-base',
                  activeFilter === filter && 'border-0 font-bold hover:!brightness-100',
                )}
              >
                {filter}
              </Button>
            ))}
          </AutoJustifyScrollRow>
        </motion.div>

        {/* Car grid with staggered animation */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div key={car.id} layout variants={itemVariants} exit="exit">
                <Link href={`/cars/${car.id}`} prefetch={false} className="group">
                  <CarCard key={car.id} car={car} />
                </Link>
              </motion.div>
            ))}

            {/* Empty State */}
            {filteredCars.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full mt-10 flex flex-col items-center justify-center gap-4"
              >
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-vl-neutral-5 flex items-center gap-2 text-7xl font-bold"
                >
                  <span>~</span>
                  <Car className="text-vl-neutral-5" size={72} />
                </motion.span>
                <p className="text-vl-neutral-5 text-center text-lg">
                  No cars available for the selected filter.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-22 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/cars" prefetch={false}>
            {/* Button primary  */}
            <Button
              className={cn(
                'group bg-vl-primary relative h-[40px] items-center gap-2 overflow-hidden rounded-[8px] px-4 md:h-[48px]',
                'hover:shadow-vl-primary/30 font-semibold text-black transition-all duration-300 hover:shadow-lg',
              )}
            >
              <span
                className={cn(
                  'absolute -top-22 -left-20 z-0 h-56 w-56 scale-20 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out',
                  'group-hover:scale-150 group-hover:opacity-100',
                )}
              />
              <span className="group-hover:text-vl-primary relative z-10 text-sm transition-colors duration-300">
                Explore Cars
              </span>
              <Image
                src="https://blast-dew-99513560.figma.site/_assets/v11/2d046d4cbbaf2744e4c1686ddaed1ac7870693d5.svg"
                alt="arrow"
                width={20}
                height={20}
                className="relative z-10 brightness-0 invert-0 transition-all duration-300 group-hover:translate-x-2 group-hover:brightness-100"
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
