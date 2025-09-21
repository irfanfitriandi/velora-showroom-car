'use client';

import TestimonialCard from '@/components/card/testimonial-card';
import { TESTIMONIALS_SECTION } from '@/lib/constants';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const half = Math.ceil(TESTIMONIALS_SECTION.TESTIMONIALS.length / 2);
  const firstRow = TESTIMONIALS_SECTION.TESTIMONIALS.slice(0, half);
  const secondRow = TESTIMONIALS_SECTION.TESTIMONIALS.slice(half);

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="container max-w-xl px-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-vl-neutral-9 text-2xl font-bold md:text-[40px]"
        >
          {TESTIMONIALS_SECTION.HEADING}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-vl-neutral-5 mx-auto mt-5 text-sm md:text-xl"
        >
          {TESTIMONIALS_SECTION.SUBHEADING}
        </motion.p>
      </div>

      <div className="relative container mt-20 overflow-clip px-5">
        {/* Row 1 - scroll left */}
        <motion.div
          className="mb-10 flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
        >
          {[...firstRow, ...firstRow].map((t, i) => (
            <TestimonialCard key={`${t.id}-row1-${i}`} {...t} />
          ))}
        </motion.div>
        {/* Row 2 - scroll right */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
        >
          {[...secondRow, ...secondRow].map((t, i) => (
            <TestimonialCard key={`${t.id}-row2-${i}`} {...t} />
          ))}
        </motion.div>
        {/* Horizontal gradient effect on both sides */}
        <div className="absolute top-0 left-0 hidden h-full w-24 bg-gradient-to-r from-white to-transparent md:block"></div>
        <div className="absolute top-0 right-0 hidden h-full w-24 bg-gradient-to-l from-white to-transparent md:block"></div>
      </div>
    </section>
  );
};

export default Testimonials;
