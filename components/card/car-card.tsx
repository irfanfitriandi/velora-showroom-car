'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Car } from '@/lib/types';
import { cn } from '@/lib/utils';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';

type CarCardProps = {
  car: Car;
  className?: string;
};

export const CarCard = ({ car, className }: CarCardProps) => {
  return (
    <Card
      className={cn(
        'group relative border-transparent ring-1 ring-[#F3F4F6] transition-all duration-300',
        'hover:ring-vl-primary hover:-translate-y-1 hover:shadow-[0_12px_20px_0_rgba(255,179,0,0.32)] hover:ring-2',
        className,
      )}
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={car.thumbnailImage}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardContent className="flex flex-col gap-4 p-5">
        <h3 className="text-base font-semibold md:text-[20px]">
          {car.brand} {car.model} ({car.year})
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {car.specs.map((spec) => (
            <div key={spec.label} className="flex gap-2">
              <Image
                src={spec.icon}
                alt={spec.label}
                width={20}
                height={20}
                className="h-4 w-4 object-contain md:h-5 md:w-5"
              />
              <span className="text-xs font-medium text-black md:text-sm">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-1 h-[1px] w-full border-b border-[#F3F4F6]"></div>

        <p className="text-base font-bold md:text-xl">
          {car.price.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          })}
        </p>
      </CardContent>

      <div className="bg-vl-primary absolute top-2 right-2 w-fit rounded-full p-2 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-100">
        <MoveUpRight size={20} />
      </div>
    </Card>
  );
};
