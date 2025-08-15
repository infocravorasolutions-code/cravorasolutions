import React from 'react';
import { Container } from './Container';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  fullWidth?: boolean;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children,
  className,
  containerSize = 'lg',
  fullWidth = false,
  id
}) => {
  const content = fullWidth ? children : (
    <Container size={containerSize}>
      {children}
    </Container>
  );

  return (
    <section 
      id={id}
      className={cn('py-16 md:py-24 lg:py-32', className)}
    >
      {content}
    </section>
  );
};