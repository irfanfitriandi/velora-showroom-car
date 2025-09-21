'use client';

import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrolledUp(false); // scroll down
      } else {
        setIsScrolledUp(true); // scroll up
      }
      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY; // for safety
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={cn(
        `fixed top-0 left-0 z-10 w-full px-5 transition-all duration-300`,
        isScrolledUp ? 'translate-y-0 transform' : '-translate-y-full transform',
      )}
    >
      <div className="container mt-3 overflow-clip rounded-[12px] bg-white/80 p-5 px-5 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex text-2xl font-bold text-black md:text-[28px]">
            <Image
              src={
                'https://blast-dew-99513560.figma.site/_assets/v11/6444feed97223b4673093780abc23fc85b9b2af4.svg'
              }
              alt="logo"
              width={40}
              height={40}
              className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
            />
            Velora
          </Link>
          <ul className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="relative">
                <Link
                  href={link.path}
                  className={cn(
                    'pb-2 text-sm text-gray-600 transition-colors hover:text-black',
                    pathname === link.path && 'font-bold text-black',
                  )}
                >
                  {link.label}
                </Link>
                {pathname === link.path && (
                  <div className="bg-vl-primary absolute -bottom-8 h-1.5 w-full"></div>
                )}
              </li>
            ))}
          </ul>
          <Button className="hidden md:flex">
            <span className="text-vl-primary">Contact</span>
            <MoveRight className="fill-vl-primary" color="#FFB300" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
