import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  isActive: boolean;
  onClick: () => void;
}

const Hamburger = ({ isActive, className = '', onClick, ...props }: IProps) => {
  const layerClasss = 'h-[2px] rounded-lg bg-black transition-all duration-500 ';

  return (
    <span
      className={cn('relative flex w-[18px] flex-col gap-1', className)}
      role="button"
      onClick={onClick}
      aria-label="open menu"
      {...props}
    >
      <span className={cn(layerClasss, isActive && 'scale-x-0')} />
      <span className={cn(layerClasss, isActive && 'rotate-45')} />
      {/* Pseudo layer for close transformation */}
      <span
        className={cn(
          layerClasss,
          'absolute top-1/2 w-full -translate-y-[0.5px]',
          isActive && '-rotate-45',
        )}
      />
      <span className={cn(layerClasss, isActive && 'scale-x-0')} />
    </span>
  );
};

export default Hamburger;
