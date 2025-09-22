'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Car, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { AutoJustifyScrollRow } from '@/components/shared/auto-justify-scroll-row';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HOT_DEALS_CARS, HOT_DEALS_FILTERS } from '@/lib/constants';
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

const FeaturedDeals = () => {
  const [activeFilter, setActiveFilter] = useState('All Car');

  const filteredCars =
    activeFilter === 'All Car'
      ? HOT_DEALS_CARS
      : HOT_DEALS_CARS.filter((car) => car.brand === activeFilter);

  return (
    <section className="text-vl-neutral-9 bg-white py-24">
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
                  activeFilter === filter && 'border-0 font-bold',
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
                  <Card
                    className={cn(
                      'relative border-transparent ring-1 ring-[#F3F4F6] transition-all duration-300',
                      'hover:ring-vl-primary hover:-translate-y-1 hover:shadow-[0_12px_20px_0_rgba(255,179,0,0.32)] hover:ring-2',
                    )}
                  >
                    <div className="relative h-[220px] w-full overflow-hidden">
                      <Image
                        src={car.image}
                        alt={`${car.brand} ${car.model}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <CardContent className="flex flex-col gap-4 p-5">
                      <h3 className="text-base font-semibold md:text-[20px]">
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
                              className="h-4 w-4 object-contain md:h-5 md:w-5"
                            />
                            <span className="text-xs font-medium text-black md:text-sm">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-1 h-[1px] w-full border-b border-[#F3F4F6]"></div>

                      <p className="text-base font-bold md:text-xl">{car.price}</p>
                    </CardContent>

                    <div className="bg-vl-primary absolute top-2 right-2 w-fit rounded-full p-2 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-100">
                      <MoveUpRight size={20} />
                    </div>
                  </Card>
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
          className="mt-28 flex justify-center pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/cars" prefetch={false}>
            <Button
              className={cn(
                'group relative hidden h-[48px] items-center gap-2 overflow-hidden rounded-[8px] px-4 md:flex',
                'text-vl-primary font-semibold transition-all duration-300',
              )}
            >
              {/* Background circle animation */}
              <span
                className={cn(
                  'bg-vl-primary absolute -top-22 -left-20 z-0 h-56 w-56 scale-20 rounded-full opacity-0 transition-all duration-300 ease-in-out',
                  'group-hover:scale-150 group-hover:opacity-100',
                )}
              />

              {/* Text & Icon */}
              <span className="relative z-10 text-sm transition-all duration-300 group-hover:text-black">
                Explore Cars
              </span>

              <Image
                src={
                  'https://blast-dew-99513560.figma.site/_assets/v11/2d046d4cbbaf2744e4c1686ddaed1ac7870693d5.svg'
                }
                alt="arrow"
                width={20}
                height={20}
                className="relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:brightness-0 group-hover:invert-0"
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
