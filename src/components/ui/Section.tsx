import React from 'react';
import { Container } from './Container';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'default' | 'glass' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const paddingClasses = {
  sm: 'py-12',
  md: 'py-16', 
  lg: 'py-24',
  xl: 'py-32'
};

const backgroundClasses = {
  default: '',
  glass: 'glass',
  gradient: 'bg-gradient-to-br from-brand/5 to-background'
};

const containerVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.07,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerSize = 'lg',
  background = 'default',
  padding = 'lg',
  id
}) => {
  return (
    <section
      id={id}
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <Container size={containerSize}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? <motion.div variants={childVariants}>{child}</motion.div>
              : child
          )}
        </motion.div>
      </Container>
    </section>
  );
};