'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import InputWithLabel from '@/components/shared/input-with-label';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const CONTACT_DATA = {
  heading: 'Get in Touch',
  subheading: `Have questions about used cars or financing? Our team is ready to assist you quickly with the info you need.`,
  contact: [
    {
      label: 'Phone Number',
      icon: 'https://blast-dew-99513560.figma.site/_assets/v11/9f8046d9938b4ea0480ca5ce737f076a64cb4617.svg',
      value: '+62-815-770-8800',
    },
    {
      label: 'Email',
      icon: 'https://blast-dew-99513560.figma.site/_assets/v11/c15019a093a771b7a9bb99e68e07c8fc0bd834ce.svg',
      value: 'go@gositus.com',
    },
  ],
  address:
    'Citywalk Sudirman 2nd Floor, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220',
};

const ContactPage = () => {
  return (
    <section className="relative h-[1390px] overflow-hidden bg-white text-white">
      {/* Hero with overlay */}
      <div className="relative h-[648px] overflow-hidden md:h-[920px]">
        <Image
          src="https://blast-dew-99513560.figma.site/_assets/v11/b5c8cfe5eb2e6f0853f82a7e13d79efcfe9763b9.png"
          alt="Contact Background"
          fill
          className="animate-out repeat-infinite scale pointer-events-none object-cover object-center select-none"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container">
          <div className="flex flex-col items-center gap-12 pt-[140px] md:pt-[228px]">
            <div className="flex max-w-[313px] flex-col gap-5 md:max-w-[820px] md:gap-7">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-[28px] font-bold md:text-[60px]"
              >
                {CONTACT_DATA.heading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center text-sm md:text-[28px]"
              >
                {CONTACT_DATA.subheading}
              </motion.p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
              {CONTACT_DATA.contact.map((c) => (
                <Card
                  key={c.label}
                  className="flex w-[280px] flex-row items-center gap-4 bg-white/[12%] p-4 backdrop-blur-sm md:w-[360px] md:gap-7 md:p-8"
                >
                  <Image
                    src={c.icon}
                    alt={`icon-${c.label}`}
                    height={64}
                    width={64}
                    className="h-10 w-10 md:h-16 md:w-16"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="text-vl-neutral-3 text-xs uppercase md:text-sm">{c.label}</div>
                    <div className="text-sm font-semibold text-white md:text-[20px]">{c.value}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FORM  */}
      <div className="relative -top-28 container md:-top-52">
        <div className="flex flex-col overflow-hidden rounded-[8px] border md:flex-row">
          {/* Map */}
          <div className="h-[314px] w-full overflow-hidden bg-white md:h-[620px] md:w-[53%]">
            <iframe
              src="https://www.google.com/maps?q=Citywalk%20Sudirman%202nd%20Floor%2C%20Karet%20Tengsin%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010220&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              className="h-full w-full"
            ></iframe>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 bg-white p-5 md:w-[47%] md:p-20">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <InputWithLabel label="Name" placeholder="Name" />
              <InputWithLabel label="Email" placeholder="Email" type="email" />
            </div>
            <InputWithLabel label="Subject" placeholder="Subject" />
            <InputWithLabel label="Phone Number" placeholder="Phone Number" type="tel" />
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-black">Message</div>
              <Textarea className="text-sm" placeholder="Message" rows={5} />
            </div>

            <div className="mt-2 md:mt-3.5">
              <Button
                className={cn(
                  'group relative flex h-[40px] w-[108px] items-center gap-2 overflow-hidden rounded-[8px] pr-6 md:h-[48px]',
                  'text-vl-primary font-semibold transition-all duration-300',
                )}
                type="submit"
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
                  Submit
                </span>

                <Image
                  src={
                    'https://blast-dew-99513560.figma.site/_assets/v11/2d046d4cbbaf2744e4c1686ddaed1ac7870693d5.svg'
                  }
                  alt="arrow"
                  width={20}
                  height={20}
                  className="relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:-rotate-45 group-hover:brightness-0 group-hover:invert-0"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
