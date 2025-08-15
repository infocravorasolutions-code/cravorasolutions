import React from 'react';
import { cn } from '../../lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary';
}

export const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className,
  gradient = 'primary' 
}) => {
  const gradientClass = gradient === 'primary' 
    ? 'bg-gradient-to-r from-[#11C5A3] to-[#0AA0FF]'
    : 'bg-gradient-to-r from-[#0AA0FF] to-[#11C5A3]';
    
  return (
    <span className={cn(
      'bg-clip-text text-transparent',
      gradientClass,
      className
    )}>
      {children}
    </span>
  );
};