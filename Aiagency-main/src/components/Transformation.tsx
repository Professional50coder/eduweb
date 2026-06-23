import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CREAM = '#DEDBC8';

const before = [
  'Manual CRM updates',
  'Manual reporting',
  'Slow lead follow-up',
  'Spreadsheet tracking',
  'Disconnected systems',
];

const after = [
  'AI qualification',
  'Automated workflows',
  'Instant reporting',
  'Real-time alerts',
  'Connected operations',
];

export const Transformation = () => {
  return (
    <section style={{ position: 'relative', backgroundColor: '#000', padding: '7rem 1.5rem', overflow: 'hidden' }}>
      {/* Atmospheric glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '40vh', background: 'radial-gradient(ellipse, rgba(222,219,200,0.06), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <motion.p
            style={{ color: CREAM, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.25rem', opacity: 0.6 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.6, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            The transformation
          </motion.p>
          <motion.h2
            style={{ color: CREAM, fontSize: 'clamp(1.8rem, 4.5vw, 3.6rem)', fontWeight: 400, margin: 0, lineHeight: 1.05, letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            From operational chaos
            <br />
            <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif', color: 'rgba(222,219,200,0.55)' }}>to quiet, intelligent control.</span>
          </motion.h2>
        </div>

        {/* Before / After */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }} viewport={{ once: true, margin: '-60px' }}
            style={{ backgroundColor: '#0a0a0a', borderRadius: '1.25rem', padding: 'clamp(2rem, 3vw, 3rem)', border: '1px solid rgba(222,219,200,0.06)' }}
          >
            <p style={{ color: 'rgba(222,219,200,0.4)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 2rem' }}>Before</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {before.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }} viewport={{ once: true }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(222,219,200,0.45)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', fontWeight: 300 }}
                >
                  <span style={{ width: '14px', height: '1px', backgroundColor: 'rgba(222,219,200,0.3)', flexShrink: 0 }} />
                  <span style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(222,219,200,0.25)' }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }} viewport={{ once: true, margin: '-60px' }}
            style={{ backgroundColor: '#0f0f0d', borderRadius: '1.25rem', padding: 'clamp(2rem, 3vw, 3rem)', border: '1px solid rgba(222,219,200,0.18)', boxShadow: '0 0 60px rgba(222,219,200,0.04)' }}
          >
            <p style={{ color: CREAM, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 2rem' }}>After</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {after.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }} viewport={{ once: true }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: CREAM, fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', fontWeight: 400 }}
                >
                  <ArrowRight size={15} color={CREAM} style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
