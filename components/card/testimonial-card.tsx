import Image from 'next/image';

import { Testimonial } from '@/lib/types';
import { cn } from '@/lib/utils';
import { StarIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

type TestimonialCardProps = Testimonial & {
  className?: string;
};

const TestimonialCard = ({
  name,
  car,
  message,
  rating,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <Card
      className={cn(
        'bg-vl-neutral-2 w-[335px] flex-shrink-0 rounded-[8px] md:w-[480px]',
        className,
      )}
    >
      <CardContent className="flex flex-col gap-8 p-5 md:p-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={image}
              alt={name}
              width={60}
              height={60}
              className="h-10 w-10 rounded-full object-cover md:h-[60px] md:w-[60px]"
            />
            <div>
              <h4 className="text-base font-semibold text-gray-900 md:text-xl">{name}</h4>
              <p className="text-xs text-gray-500 md:text-base">{car}</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <StarIcon
                key={`full-${i}`}
                className="h-4 w-4 fill-[#FF7F22] text-[#FF7F22] md:h-6 md:w-6"
              />
            ))}
            {Array.from({ length: 5 - rating }).map((_, i) => (
              <StarIcon key={`empty-${i}`} className="text-vl-neutral-3 h-4 w-4 md:h-6 md:w-6" />
            ))}
          </div>
        </div>

        <p className="text-sm md:text-base">{message}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
