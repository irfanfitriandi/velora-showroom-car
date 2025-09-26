'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { useCountUp } from '@/lib/hooks';
import TextAbout from '@/public/images/text-about.png';

import Testimonials from '../../_component/testimonials';
import {
  ABOUT_SERVICE_SECTION,
  ABOUT_US_SECTION,
  COMPANY_VALUES,
  MILESTONES_SECTION,
  WHY_VELORA_SECTION,
} from './data';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
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
          // eslint-disable-next-line react-hooks/rules-of-hooks
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

export const CompanyValuesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-neutral-900 px-6 py-12 md:px-10 md:py-20 xl:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
        {COMPANY_VALUES.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="px-4 py-6 md:px-6 md:py-0"
          >
            <h3 className="text-base font-semibold text-white md:text-lg">{item.title}</h3>
            <p className="mt-3 text-sm text-neutral-400 md:text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const MilestonesSection = () => {
  const { heading, image, timeline } = MILESTONES_SECTION;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-white px-6 py-16 md:px-10 xl:px-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-2xl font-bold text-gray-900 md:text-4xl"
        >
          {heading}
        </motion.h2>

        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full overflow-hidden rounded-lg md:w-[40%]"
          >
            <div className="aspect-[4/3] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative flex-1 border-l border-gray-200 pl-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                className="relative mb-10"
              >
                <div className="absolute top-1.5 left-[-11px] h-3 w-3 rounded-full bg-gray-300" />

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.year} – {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyVeloraSection = () => {
  const { heading, description, features } = WHY_VELORA_SECTION;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="rounded-xl bg-neutral-950 px-6 py-20 md:px-10 xl:px-20">
      <div className="mx-auto max-w-7xl space-y-12 text-center text-white">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-3xl font-bold md:text-4xl"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl text-sm text-neutral-300 md:text-lg"
        >
          {description}
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((item, idx) => (
            <motion.div
              key={item.id}
              custom={idx}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="relative overflow-hidden rounded-lg bg-neutral-900 p-6 transition duration-300 hover:bg-neutral-800"
            >
              {/* Icon */}
              <div className="bg-vl-primary mb-4 flex h-10 w-10 items-center justify-center rounded p-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-300 md:text-base">{item.description}</p>

              {/* Background Number */}
              <span className="pointer-events-none absolute right-4 bottom-2 text-[100px] font-black text-white/5 select-none">
                {item.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection = () => <Testimonials />;

export const AboutServiceSection = () => {
  const { heading, description, cta, images } = ABOUT_SERVICE_SECTION;
  const marqueeImages = [...images, ...images];

  const COLUMN_COUNT = 3;

  return (
    <section className="relative h-[600px] overflow-hidden rounded-2xl bg-neutral-900 text-white">
      {/* Multiple Vertical Marquee Columns */}
      {Array.from({ length: COLUMN_COUNT }).map((_, colIdx) => (
        <div
          key={colIdx}
          className={`animate-marquee-vertical absolute top-0 flex h-fit w-[33.33%] flex-col items-center gap-4 opacity-30`}
          style={{ left: `${colIdx * 33.33}%`, animationDelay: `${2 * colIdx}s` }}
        >
          {marqueeImages.map((src, idx) => (
            <div
              key={`${colIdx}-${idx}`}
              className="relative h-96 w-[90%] overflow-hidden rounded-lg"
            >
              <Image src={src} alt="marquee" fill className="object-cover" />
            </div>
          ))}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold md:text-4xl"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-xl text-sm whitespace-pre-line text-neutral-300 md:text-base"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6"
        >
          <Link
            href={cta.href}
            className="bg-vl-primary rounded px-6 py-2 text-sm font-medium text-black transition hover:brightness-90"
          >
            {cta.label} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
