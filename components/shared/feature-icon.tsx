// components/icons/FeatureIcon.tsx
import { cn } from '@/lib/utils';
import { BadgeDollarSign, CreditCard, Users, Verified } from 'lucide-react';

type IconName = 'verified' | 'badge-dollar-sign' | 'users' | 'credit-card';

export const FeatureIcon = ({ name, className }: { name: IconName; className?: string }) => {
  const iconProps = { className: cn('h-6 w-6 text-white', className) };

  switch (name) {
    case 'verified':
      return <Verified {...iconProps} />;
    case 'badge-dollar-sign':
      return <BadgeDollarSign {...iconProps} />;
    case 'users':
      return <Users {...iconProps} />;
    case 'credit-card':
      return <CreditCard {...iconProps} />;
    default:
      return null;
  }
};
