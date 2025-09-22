'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Hamburger from '../ui/hamburger';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      setIsScrolledUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    }
  };

  const [isShowNav, setIsShowNav] = useState(false);
  const toggleNav = () => setIsShowNav((prev) => !prev);
  const closeNav = () => setIsShowNav(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <div>
      <nav
        className={cn(
          'fixed top-0 left-0 z-10 w-full px-5 transition-all duration-300',
          isScrolledUp || isShowNav ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className={cn('container mt-3 rounded-[12px] bg-white/80 p-4 backdrop-blur-sm')}>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-black md:text-[28px]"
            >
              <Image
                src="https://blast-dew-99513560.figma.site/_assets/v11/6444feed97223b4673093780abc23fc85b9b2af4.svg"
                alt="logo"
                width={40}
                height={40}
                className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
              />
              Velora
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden items-center space-x-8 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={cn(
                      'pb-2 text-sm text-gray-600 transition-colors hover:text-black',
                      pathname === link.path && 'font-bold text-black',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button className="hidden md:flex">
              <span className="text-vl-primary">Contact</span>
              <MoveRight className="fill-vl-primary ml-2" color="#FFB300" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <div
        className={cn(
          'fixed top-0 left-0 z-50 block w-full px-5 transition-all duration-300 md:hidden',
          isScrolledUp || isShowNav ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="container mt-3 flex h-[62px] items-center justify-end p-4">
          <button className="cursor-pointer" aria-label="Toggle mobile menu">
            <Hamburger isActive={isShowNav} onClick={toggleNav} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isShowNav && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 z-10 block min-h-screen min-w-screen bg-white/80 px-5 text-black backdrop-blur-sm md:hidden"
          >
            <div className="container">
              <ul className="mt-20 flex w-full flex-col items-end justify-end gap-5 text-[40px] font-bold">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      onClick={closeNav}
                      className={cn(
                        'uppercase transition-colors',
                        pathname === link.path ? 'text-vl-primary' : 'text-black',
                      )}
                    >
                      {link.label}
                      {pathname === link.path && ' –'}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
