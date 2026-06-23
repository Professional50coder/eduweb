import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  containerClassName,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Flatten all words with their classes
  const allWords: Array<{ word: string; className?: string }> = [];
  let wordIndex = 0;

  segments.forEach((segment) => {
    const words = segment.text.split(' ');
    words.forEach((word) => {
      allWords.push({ word, className: segment.className });
      wordIndex++;
    });
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${containerClassName || ''}`}
    >
      {allWords.map((item, idx) => (
        <motion.span
          key={`${item.word}-${idx}`}
          className={`inline-block mx-1 ${item.className || ''}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            delay: idx * 0.08,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
};
