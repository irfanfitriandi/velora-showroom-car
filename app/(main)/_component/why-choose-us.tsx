'use client';

import { FeatureIcon } from '@/components/shared/feature-icon';
import { WHY_CHOOSE_US } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const WhyChooseUS = () => {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative bg-neutral-900 px-6 py-20 text-white md:px-10 xl:px-20">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        {/* LEFT SIDE: Sticky Heading */}
        <div className="h-fit max-w-[568px] self-start lg:sticky lg:top-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-semibold md:text-[40px]"
          >
            {WHY_CHOOSE_US.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base text-gray-300 md:text-[20px]"
          >
            {WHY_CHOOSE_US.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mt-8 overflow-hidden rounded-[8px] shadow-lg"
          >
            <Image
              src={WHY_CHOOSE_US.badge.banner}
              alt="badge-choose-us"
              width={568}
              height={280}
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE: Sticky Stacked Cards */}
        <div className="relative">
          <div className="relative flex h-[1080px] flex-col gap-6">
            {/* total tinggi untuk scroll agar semua card bisa ditampilkan */}
            {WHY_CHOOSE_US.features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-vl-neutral-8 sticky top-24 rounded-xl p-10"
                style={{
                  transform: `translateY(${index * 4}rem)`, // offset tiap card
                  zIndex: WHY_CHOOSE_US.features.length + index, // biar tumpukannya rapih
                }}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="bg-vl-primary rounded-md p-4">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <FeatureIcon name={feature.icon as any} className="h-7 w-7 text-black" />
                  </div>
                  <h4 className="text-[20px] font-semibold text-white">{feature.title}</h4>
                  <p className="text-base text-gray-300">{feature.description}</p>
                </div>

                <span className="absolute right-6 bottom-24 text-[180px] leading-0 font-bold text-neutral-100/[4%]">
                  {feature.id}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;
