import { motion, useInView, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

const CREAM = '#DEDBC8';

const segments = [
  { text: 'Your Team Was Hired To Think.', italic: false },
  { text: 'Not To Move Data Between Tools.', italic: true },
];

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bodyText =
    "Most companies don't have an AI problem. They have an operations problem. Leads go unanswered. Data lives in spreadsheets. Reports are built manually. Teams waste hours moving information between systems. We build production-ready AI systems that remove those bottlenecks.";

  const isHeadingInView = useInView(headingRef, { once: true, margin: '0px 0px -80px 0px' });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.85', 'end 0.35'] });
  const [prog, setProg] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', setProg);

  const allWords = segments.flatMap((seg, si) =>
    seg.text.split(' ').map((w) => ({ word: w, italic: seg.italic, line: si }))
  );

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#000', padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', backgroundColor: '#0c0c0c', borderRadius: '1.5rem', padding: 'clamp(2.5rem, 5vw, 5rem)', textAlign: 'center', border: '1px solid rgba(222,219,200,0.06)' }}>

        {/* Label */}
        <motion.p
          style={{ color: CREAM, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '2.5rem', opacity: 0.7 }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          The real problem
        </motion.p>

        {/* Massive editorial heading */}
        <div ref={headingRef} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em 0.45em', fontSize: 'clamp(1.7rem, 5vw, 4.5rem)', lineHeight: 1.05, fontWeight: 400, color: CREAM }}>
            {allWords.map(({ word, italic }, i) => (
              <motion.span
                key={i}
                animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ delay: i * 0.035, duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                style={{ display: 'inline-block', fontStyle: italic ? 'italic' : 'normal', fontFamily: italic ? 'Georgia, serif' : 'inherit', color: italic ? 'rgba(222,219,200,0.55)' : CREAM }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Body text with scroll-driven reveal */}
        <p style={{ color: CREAM, fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)', lineHeight: 1.85, maxWidth: '44rem', margin: '0 auto' }}>
          {bodyText.split('').map((char, i) => {
            const threshold = i / bodyText.length;
            const opacity = Math.max(0.12, Math.min(1, (prog - threshold + 0.18) / 0.18));
            return (
              <span key={i} style={{ opacity, color: CREAM }}>
                {char}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};
