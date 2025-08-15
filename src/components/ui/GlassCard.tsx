import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className,
  hover = true,
  onClick 
}) => {
  return (
    <motion.div
      className={cn(
        'relative backdrop-blur-xl bg-white/10 border border-white/20',
        'rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]',
        'before:absolute before:inset-0 before:rounded-2xl',
        'before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50',
        hover && 'cursor-pointer',
        className
      )}
      whileHover={hover ? { 
        y: -4,
        transition: { duration: 0.2 }
      } : undefined}
      onClick={onClick}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};