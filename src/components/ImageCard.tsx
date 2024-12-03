import { motion } from 'framer-motion';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageCard = ({ src, alt, className = '' }: ImageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
      />
    </motion.div>
  );
};