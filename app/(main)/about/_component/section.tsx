'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { useCountUp } from '@/lib/hooks';
import TextAbout from '@/public/images/text-about.png';

const ABOUT_US_SECTION = {
  heading: 'Trusted Used Cars for Every Journey with Confidence',
  description: `At Velora, we believe buying a used car should be exciting, safe, and transparent. We’re committed to offering certified, carefully inspected vehicles backed by expert guidance. With a growing network and a passion for customer satisfaction, Velora is your trusted place to buy with peace of mind.`,
  image: {
    // TODO: Image mobile
    src: 'https://blast-dew-99513560.figma.site/_assets/v11/b4a6a26fa4437a4bc6ff578122291f0964350ca1.png',
    alt: 'Velora showroom front with branding and cars',
  },
  stats: [
    {
      label: 'Customer Satisfaction',
      value: 150,
      suffix: '+',
      description: 'Satisfied Happy Buyers Across Indonesia',
    },
    {
      label: 'Proven Sales Record',
      value: 500,
      suffix: '+',
      description: 'Verified & Certified Cars Successfully Sold',
    },
    {
      label: 'Dynamic Inventory',
      value: 100,
      suffix: '+',
      description: 'Actively Listed Cars Updated Monthly',
    },
    {
      label: 'Trusted Industry Expertise',
      value: 29,
      suffix: '+',
      description: 'Years of Automotive Experience',
    },
  ],
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  const { heading, description, image, stats } = ABOUT_US_SECTION;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative flex flex-col gap-10 bg-white py-[50px] md:py-[100px]">
      {/* Text */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start justify-start gap-5 md:flex-row md:justify-between"
      >
        <h2 className="text-vl-neutral-9 text-[28px] leading-snug font-semibold md:max-w-[50%] md:text-[40px]">
          {heading}
        </h2>
        <p className="text-vl-neutral-5 text-sm md:max-w-[50%] md:text-lg">{description}</p>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative aspect-[335/292] w-full overflow-hidden rounded-[8px] md:aspect-[1240/520]"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-left"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          priority
        />
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-20"
      >
        {stats.map((stat, idx) => {
          const count = useCountUp(stat.value, 0, 1500, inView);

          return (
            <div key={idx} className="flex flex-col gap-4 md:gap-8">
              <h4 className="text-vl-neutral-9 text-xs font-semibold md:text-base">{stat.label}</h4>
              <div className="flex flex-col gap-1">
                <span className="text-vl-neutral-9 flex items-center gap-1 text-[32px] font-bold md:text-6xl">
                  <span>{count}</span>
                  <span className="text-vl-primary text-[28px] md:text-[40px]">{stat.suffix}</span>
                </span>
                <p className="text-vl-neutral-5 text-xs md:text-base">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Text Ornament */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="absolute top-4 flex w-full justify-center"
      >
        <div className="relative aspect-[868/221] w-[90%] md:w-[70%]">
          <Image src={TextAbout} alt="bg-about" fill />
        </div>
      </motion.div>
    </section>
  );
};
