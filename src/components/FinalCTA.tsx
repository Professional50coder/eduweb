import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AuditModal } from './AuditModal';

const CREAM = '#DEDBC8';

const headlineWords = 'The Highest ROI Employee In Your Company Might Be An AI Workflow.'.split(' ');

export const FinalCTA = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section style={{ position: 'relative', backgroundColor: '#000', padding: '1rem 1rem 1rem', overflow: 'hidden' }}>
      <div style={{ position: 'relative', maxWidth: '100%', margin: '0 auto', borderRadius: '1.5rem', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        {/* Floating island video, reused for cinematic close */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.85))' }} />
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, mixBlendMode: 'overlay', opacity: 0.5,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='nf'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23nf)' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px', pointerEvents: 'none' }} />

        <div ref={ref} style={{ position: 'relative', width: '100%', maxWidth: '64rem', margin: '0 auto', padding: 'clamp(2.5rem, 6vw, 6rem)', textAlign: 'center' }}>
          {/* Massive headline, word-by-word reveal */}
          <h2 style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.2em 0.35em', fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.03em', color: CREAM, margin: '0 0 2rem' }}>
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                style={{ display: 'inline-block' }}
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <motion.p
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{ color: 'rgba(222,219,200,0.7)', fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)', lineHeight: 1.65, maxWidth: '40rem', margin: '0 auto 2.5rem' }}
          >
            Book a free AI Workflow Audit and discover where your business is losing time, money, and operational efficiency.
          </motion.p>

          <motion.button
            onClick={() => setIsAuditModalOpen(true)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            whileHover={{ scale: 1.04 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', backgroundColor: CREAM, color: '#000', border: 'none', borderRadius: '9999px', padding: '1rem 2rem', fontWeight: 500, fontSize: '1rem', cursor: 'pointer' }}
          >
            Book Free Audit
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.1rem', height: '2.1rem', backgroundColor: '#000', borderRadius: '50%' }}>
              <ArrowRight size={16} color={CREAM} />
            </span>
          </motion.button>
        </div>
      </div>

      {/* Footer line */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2.5rem 1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: CREAM, fontSize: '0.9rem', fontWeight: 600, letterSpacing: '-0.02em' }}>AI2Easy4U</span>
        <span style={{ color: 'rgba(222,219,200,0.4)', fontSize: '0.75rem' }}>Elite automation engineering. Operations, transformed.</span>
      </div>

      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </section>
  );
};
