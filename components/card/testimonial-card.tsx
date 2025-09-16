import { StarIcon } from 'lucide-react';
import Image from 'next/image';

import { Testimonial } from '@/lib/types';
import { cn } from '@/lib/utils';
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
        'max-w-sm min-w-[280px] flex-shrink-0 rounded-xl border border-gray-200 bg-gray-50 shadow-sm',
        className,
      )}
    >
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="text-base font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{car}</p>
          </div>
        </div>

        <p className="mb-4 text-sm text-gray-700">{message}</p>

        <div className="flex items-center gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={`full-${i}`} className="h-4 w-4 fill-orange-400 text-orange-400" />
          ))}
          {Array.from({ length: 5 - rating }).map((_, i) => (
            <StarIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
