import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { CaseStudyDetail } from './CaseStudyDetail';

const CREAM = '#DEDBC8';

const metrics = [
  { value: '32 Hours', label: 'Admin Saved/Month' },
  { value: '$12,400', label: 'Monthly ROI' },
  { value: '3x Faster', label: 'Deal Velocity' },
];

export const CaseStudies = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <section style={{ backgroundColor: '#000', padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem', maxWidth: '40rem' }}>
          <motion.p
            style={{ color: CREAM, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.25rem', opacity: 0.6 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.6, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            Proof, not promises
          </motion.p>
          <motion.h2
            style={{ color: CREAM, fontSize: 'clamp(1.8rem, 4.5vw, 3.6rem)', fontWeight: 400, margin: 0, lineHeight: 1.05, letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            Case Studies
          </motion.h2>
        </div>

        {/* Large premium card */}
        <motion.button
          onClick={() => setIsDetailOpen(true)}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{ backgroundColor: 'rgba(222,219,200,0.08)' }}
          style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0c0c0c', borderRadius: '1.5rem', padding: 'clamp(2.5rem, 5vw, 4.5rem)', border: '1px solid rgba(222,219,200,0.08)', cursor: 'pointer', width: '100%', textAlign: 'left' }}
        >
          {/* subtle glow */}
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(222,219,200,0.05), transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 1rem' }}>Featured</p>
                <h3 style={{ color: CREAM, fontSize: 'clamp(1.8rem, 4.5vw, 3.4rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>Sales Team Automation</h3>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', borderRadius: '50%', border: '1px solid rgba(222,219,200,0.25)', flexShrink: 0 }}>
                <ArrowUpRight size={18} color={CREAM} />
              </span>
            </div>

            {/* Outcome metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', borderTop: '1px solid rgba(222,219,200,0.12)', paddingTop: '2.5rem' }}>
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }} viewport={{ once: true }}
                  style={{ pointerEvents: 'none' }}
                >
                  <div style={{ color: CREAM, fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.85rem', marginTop: '0.6rem' }}>{m.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Click hint */}
            <div style={{ marginTop: '2rem', color: 'rgba(222,219,200,0.4)', fontSize: '0.8rem', textAlign: 'center' }}>
              Click to view full breakdown →
            </div>
          </div>
        </motion.button>
      </div>

      {/* Case study detail modal */}
      <CaseStudyDetail isOpen={isDetailOpen} onClose={() => setIsDetailOpen(false)} />
    </section>
  );
};
