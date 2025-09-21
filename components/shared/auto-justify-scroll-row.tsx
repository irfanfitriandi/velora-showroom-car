'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface AutoJustifyScrollRowProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export const AutoJustifyScrollRow = ({
  children,
  className,
  innerClassName,
}: AutoJustifyScrollRowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const el = containerRef.current;
      if (!el) return;
      setIsOverflowing(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <div className={cn('w-full overflow-x-auto', className)}>
      <div
        ref={containerRef}
        className={cn(
          'flex w-fit min-w-full gap-3',
          isOverflowing ? 'justify-start' : 'justify-center',
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};
