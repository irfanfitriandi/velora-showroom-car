'use client';

import TestimonialCard from '@/components/card/testimonial-card';
import { TESTIMONIALS_SECTION } from '@/lib/constants';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const half = Math.ceil(TESTIMONIALS_SECTION.TESTIMONIALS.length / 2);
  const firstRow = TESTIMONIALS_SECTION.TESTIMONIALS.slice(0, half);
  const secondRow = TESTIMONIALS_SECTION.TESTIMONIALS.slice(half);

  return (
    <section className="overflow-hidden bg-white px-6 py-20 md:px-10 xl:px-20">
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl"
        >
          {TESTIMONIALS_SECTION.HEADING}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-gray-600"
        >
          {TESTIMONIALS_SECTION.SUBHEADING}
        </motion.p>
      </div>

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
    </section>
  );
};

export default Testimonials;
