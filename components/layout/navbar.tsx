'use client';

import { AnimatePresence, motion } from 'framer-motion';
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

  const [isShowNav, setIsShowNav] = useState(false);
  const toggleNav = () => setIsShowNav((prev) => !prev);
  const closeNav = () => setIsShowNav(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      setIsScrolledUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  // disable scroll on body when menu is open
  useEffect(() => {
    document.body.style.overflow = isShowNav ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isShowNav]);

  // menu links (stagger)
  const linkVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div>
      <nav
        className={cn(
          'fixed top-0 left-0 z-10 w-full transition-all duration-300',
          isScrolledUp || isShowNav ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="container">
          <div
            className={cn(
              'mt-3 overflow-hidden rounded-[12px] border bg-white/80 px-4 backdrop-blur-sm',
            )}
          >
            <div className="flex h-[60px] items-center justify-between md:h-[88px]">
              {/* Logo */}
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
              <ul className="hidden items-center gap-8 md:flex">
                {NAV_LINKS.map((link) => (
                  <li key={link.path} className="group relative">
                    <Link
                      href={link.path}
                      className={cn(
                        'pb-2 text-sm transition-all duration-300 ease-in-out',
                        pathname === link.path
                          ? 'font-semibold text-black'
                          : 'text-vl-neutral-5 font-medium group-hover:text-base group-hover:font-semibold group-hover:text-black',
                      )}
                    >
                      {link.label}
                    </Link>
                    {/* underline animation */}
                    <span
                      className={cn(
                        'bg-vl-primary absolute -bottom-8 left-0 h-1 w-0 transition-all duration-300',
                        pathname === link.path ? 'w-full' : 'group-hover:w-full',
                      )}
                    />
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/contact" prefetch={false}>
                <Button
                  className={cn(
                    'group relative hidden h-[40px] w-[132px] items-center gap-2 overflow-hidden rounded-[8px] md:flex md:h-[48px]',
                    'text-vl-primary font-semibold transition-all duration-300',
                  )}
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
                    Contact
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
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <div
        className={cn(
          'fixed top-0 left-0 z-50 block w-full transition-all duration-300 md:hidden',
          isScrolledUp || isShowNav ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="container">
          <div className="mt-3 flex h-[62px] items-center justify-end pr-4">
            <button className="cursor-pointer" aria-label="Toggle mobile menu">
              <Hamburger isActive={isShowNav} onClick={toggleNav} />
            </button>
          </div>
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
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.path}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={linkVariants}
                  >
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
                  </motion.li>
                ))}
                <motion.li
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={linkVariants}
                >
                  <Link
                    href={'/contact'}
                    onClick={closeNav}
                    className={cn(
                      'uppercase transition-colors',
                      pathname === '/contact' ? 'text-vl-primary' : 'text-black',
                    )}
                  >
                    {'contact'}
                    {pathname === '/contact' && ' –'}
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
