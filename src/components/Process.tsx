import { motion } from 'framer-motion';

const CREAM = '#DEDBC8';

const steps = [
  { n: '01', title: 'Free Audit', desc: 'We map where time, money, and leads are leaking from your operations.' },
  { n: '02', title: 'Process Mapping', desc: 'Every workflow documented end-to-end before a single line is written.' },
  { n: '03', title: 'System Architecture', desc: 'We design the connected system — agents, automations, and decision layers.' },
  { n: '04', title: 'Engineering', desc: 'Production-grade build with human-in-the-loop controls and full documentation.' },
  { n: '05', title: 'Deployment', desc: 'Rolled out in 14 days, integrated cleanly into your existing stack.' },
  { n: '06', title: 'Ownership', desc: 'You own everything. Zero vendor lock-in, full transparency, complete control.' },
];

export const Process = () => {
  return (
    <section style={{ backgroundColor: '#000', padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '4.5rem', maxWidth: '40rem' }}>
          <motion.p
            style={{ color: CREAM, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.25rem', opacity: 0.6 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.6, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            How we work
          </motion.p>
          <motion.h2
            style={{ color: CREAM, fontSize: 'clamp(1.8rem, 4.5vw, 4rem)', fontWeight: 400, margin: 0, lineHeight: 1.05, letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            Built Like Engineering.
            <br />
            <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif', color: 'rgba(222,219,200,0.55)' }}>Sold Like Consulting.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              viewport={{ once: true, margin: '-80px' }}
              style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5rem) 1fr', gap: 'clamp(1rem, 4vw, 4rem)', alignItems: 'baseline', padding: '2rem 0', borderTop: '1px solid rgba(222,219,200,0.12)' }}
            >
              <span style={{ color: 'rgba(222,219,200,0.4)', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 400, fontVariantNumeric: 'tabular-nums' }}>{step.n}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 3rem', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <h3 style={{ color: CREAM, fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.02em', flex: '1 1 12rem' }}>{step.title}</h3>
                <p style={{ color: 'rgba(222,219,200,0.55)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0, maxWidth: '24rem', flex: '1 1 18rem' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(222,219,200,0.12)' }} />
        </div>
      </div>
    </section>
  );
};
