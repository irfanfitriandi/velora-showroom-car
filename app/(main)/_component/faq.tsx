'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_SECTION } from '@/lib/constants';
import { cn } from '@/lib/utils';

const FaqSection = () => {
  return (
    <section className="bg-neutral-900 px-6 py-20 text-white md:px-10 xl:px-20">
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{FAQ_SECTION.HEADING}</h2>
        <p className="mt-2 text-gray-400">{FAQ_SECTION.SUBHEADING}</p>
      </div>

      <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl space-y-4">
        {FAQ_SECTION.FAQS.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className={cn(
              'rounded-lg border border-transparent transition-colors',
              // open state -> yellow bg
              'data-[state=open]:bg-vl-primary data-[state=open]:text-black',
            )}
          >
            <AccordionTrigger
              className={cn(
                'px-6 py-4 text-left text-lg font-semibold',
                'hover:no-underline',
                'data-[state=open]:text-black',
              )}
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-sm text-gray-800 data-[state=open]:text-black">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
