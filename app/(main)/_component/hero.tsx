import { Search } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HERO_CONTENT } from '@/lib/constants';
import BgHero from '@/public/images/bg-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[1100px] bg-white md:min-h-[1224px]">
      <div className="relative h-[880px] md:h-[1008px]">
        <Image
          src={BgHero}
          alt="bg-hero"
          fill
          priority
          className="pointer-events-none object-cover object-center select-none"
        />

        <div className="absolute inset-0 bg-black/60" />

        {/* Featured  */}
        <div className="absolute bottom-0 w-full translate-y-1/2">
          <div className="container flex flex-col px-5 lg:flex-row">
            {HERO_CONTENT.stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-row overflow-clip first:rounded-t-[8px] last:rounded-b-[8px] odd:flex-row-reverse lg:w-1/4 lg:flex-col lg:first:rounded-l-[8px] lg:last:rounded-r-[8px] lg:odd:flex-col-reverse"
              >
                <div className="bg-vl-neutral-9 mx-auto flex h-32 w-1/2 flex-col items-center justify-center lg:h-48 lg:w-full">
                  <h3 className="text-vl-primary w-32 text-left text-[28px] font-bold lg:w-56 lg:text-[40px]">
                    {stat.value}
                  </h3>
                  <p className="w-32 text-xs text-white lg:w-56 lg:text-base">{stat.label}</p>
                </div>
                <div className="relative h-32 w-1/2 lg:h-48 lg:w-full">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-32 w-full md:top-56">
        <div className="container flex flex-col items-center justify-center gap-[60px] px-5">
          {/* Badge  */}
          <div className="bg-vl-primary flex w-fit items-center gap-2 rounded-full p-3 pr-4 text-black md:px-6 md:py-4">
            <Image
              src={HERO_CONTENT.badge.icon}
              alt="badge-icon"
              width={24}
              height={24}
              className="h-4 w-4 md:h-6 md:w-6"
            />
            <h3 className="text-xs font-medium md:text-base">{HERO_CONTENT.badge.text}</h3>
          </div>

          <div className="text-center">
            <h1 className="xs:w-[332px] text-[28px] font-bold md:w-2xl md:text-6xl">
              {HERO_CONTENT.title}
            </h1>
            <h2 className="mx-auto mt-7 w-[268px] md:w-lg md:text-[28px]">
              {HERO_CONTENT.subtitle}
            </h2>
          </div>

          <div className="xs:w-[332px] relative flex rounded-[8px] bg-white/20 backdrop-blur-[2px] md:w-[460px]">
            <Input
              className="h-14 border-0 bg-transparent placeholder:text-white"
              placeholder="Search..."
            />
            <Button
              type="submit"
              variant={'vl-primary'}
              className="absolute top-1 right-1 h-12 w-12"
            >
              <Search size={24} className="!h-6 !w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
