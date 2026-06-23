import { motion } from 'framer-motion';

const CREAM = '#DEDBC8';

const reasons = [
  '14-Day Deployment',
  '100% Explainable Decisions',
  'Human-In-The-Loop Controls',
  'Enterprise Security',
  'Transparent Pricing',
  'Zero Vendor Lock-In',
  'Production Ready',
  'Full Documentation',
];

export const WhyUs = () => {
  return (
    <section style={{ backgroundColor: '#000', padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '40rem' }}>
          <motion.p
            style={{ color: CREAM, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.25rem', opacity: 0.6 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.6, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            The standard
          </motion.p>
          <motion.h2
            style={{ color: CREAM, fontSize: 'clamp(1.8rem, 4.5vw, 3.6rem)', fontWeight: 400, margin: 0, lineHeight: 1.05, letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            Why AI2Easy4U
          </motion.h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', backgroundColor: 'rgba(222,219,200,0.1)', border: '1px solid rgba(222,219,200,0.1)', borderRadius: '1rem', overflow: 'hidden' }}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ backgroundColor: '#101010' }}
              style={{ backgroundColor: '#000', padding: 'clamp(2rem, 3vw, 2.75rem) 1.75rem', minHeight: '9rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <span style={{ color: 'rgba(222,219,200,0.35)', fontSize: '0.75rem', fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ color: CREAM, fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
