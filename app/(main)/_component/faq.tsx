'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_SECTION } from '@/lib/constants';
import { cn } from '@/lib/utils';
import TextVelora from '@/public/images/text-velora-grad.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FaqSection = () => {
  return (
    <section className="bg-vl-neutral-2 md:py-20">
      <div className="bg-vl-neutral-9 relative container overflow-hidden px-5 py-12 md:rounded-[12px] md:py-24">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white md:text-[40px]">{FAQ_SECTION.HEADING}</h2>
          <p className="text-vl-neutral-3 mt-5 text-sm md:text-[20px]">{FAQ_SECTION.SUBHEADING}</p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="mx-auto mt-20 max-w-[800px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible>
            {FAQ_SECTION.FAQS.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={faq.id}
                  className={cn(
                    'group cursor-pointer rounded-lg border border-transparent transition-all duration-300',
                    'hover:-translate-y-1 hover:shadow-lg',
                    'data-[state=open]:bg-vl-primary data-[state=open]:text-black',
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      'group-hover:text-vl-primary cursor-pointer p-6 text-left text-sm font-semibold transition-colors md:text-[20px]',
                      'hover:no-underline',
                      'data-[state=open]:text-black',
                      'group-hover:[&>svg]:text-vl-primary',
                    )}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="data-[state=open]:animate-accordion-down cursor-pointer px-6 pb-4 text-xs text-black transition-all duration-300 md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Background Text Velora */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 aspect-[1162/219] w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image src={TextVelora} alt="text-velora" fill />
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
