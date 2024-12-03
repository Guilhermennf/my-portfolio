import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradientSectionProps {
  children: ReactNode;
  className?: string;
}

export const GradientSection = ({ children, className = '' }: GradientSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};