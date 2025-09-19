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
import Image from 'next/image';

const FaqSection = () => {
  return (
    <section className="bg-vl-neutral-2 py-20">
      <div className="bg-vl-neutral-9 relative container mx-auto px-5 py-24 md:rounded-[12px]">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-2xl font-bold text-white md:text-[40px]">{FAQ_SECTION.HEADING}</h2>
          <p className="text-vl-neutral-3 mt-5 text-sm md:text-[20px]">{FAQ_SECTION.SUBHEADING}</p>
        </div>

        <Accordion type="single" collapsible className="mx-auto mt-20 max-w-[800px]">
          {FAQ_SECTION.FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={cn(
                'group cursor-pointer rounded-lg border border-transparent transition-colors',
                // open state -> yellow bg
                'data-[state=open]:bg-vl-primary data-[state=open]:text-black',
              )}
            >
              <AccordionTrigger
                className={cn(
                  'group-hover:text-vl-primary cursor-pointer p-6 text-left text-sm font-semibold md:text-[20px]',
                  'hover:no-underline',
                  'data-[state=open]:text-black',
                  'group-hover:[&>svg]:text-vl-primary',
                )}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="cursor-pointer px-6 pb-4 text-xs text-black data-[state=open]:text-black md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="pointer-events-none absolute bottom-0 left-0 aspect-[1162/219] w-full">
          <Image src={TextVelora} alt="text-velora" fill />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
