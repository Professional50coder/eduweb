import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface WordsPullUpProps {
  words: string;
  className?: string;
  showAsterisk?: boolean;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({ words, className, showAsterisk }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const wordArray = words.split(' ');

  return (
    <div ref={ref} className={`flex flex-wrap justify-center ${className || ''}`}>
      {wordArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="inline-block mx-1"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            delay: idx * 0.08,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
        >
          {showAsterisk && idx === wordArray.length - 1 ? (
            <span className="relative">
              {word}
              <sup className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</sup>
            </span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </div>
  );
};
