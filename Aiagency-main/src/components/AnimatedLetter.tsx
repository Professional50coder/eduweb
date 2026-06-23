import { motion } from 'framer-motion';

interface AnimatedLetterProps {
  children: string;
  index: number;
  total: number;
  scrollProgress: number;
}

export const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  children,
  index,
  total,
  scrollProgress,
}) => {
  const charProgress = index / total;
  
  // Calculate opacity based on scroll progress
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  
  let opacity = 0.2;
  if (scrollProgress >= start && scrollProgress <= end) {
    opacity = 0.2 + (scrollProgress - start) / (end - start) * 0.8;
  } else if (scrollProgress > end) {
    opacity = 1;
  }

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};
