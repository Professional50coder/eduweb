import { motion } from 'framer-motion';
import { useState } from 'react';
import { IndustryDetail } from './IndustryDetail';

const CREAM = '#DEDBC8';

const industries = [
  { n: '01', name: 'B2B SaaS' },
  { n: '02', name: 'E-Commerce' },
  { n: '03', name: 'Marketing Agencies' },
  { n: '04', name: 'Recruitment' },
  { n: '05', name: 'Real Estate' },
  { n: '06', name: 'Healthcare' },
  { n: '07', name: 'Financial Services' },
];

export const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <section style={{ backgroundColor: '#000', padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '40rem' }}>
          <motion.p
            style={{ color: CREAM, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.25rem', opacity: 0.6 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.6, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            Where we operate
          </motion.p>
          <motion.h2
            style={{ color: CREAM, fontSize: 'clamp(1.8rem, 4.5vw, 3.6rem)', fontWeight: 400, margin: 0, lineHeight: 1.05, letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            Industries We Transform
          </motion.h2>
        </div>

        {/* Magazine-style list */}
        <div style={{ borderTop: '1px solid rgba(222,219,200,0.12)' }}>
          {industries.map((item, i) => (
            <motion.button
              key={item.name}
              onClick={() => setSelectedIndustry(item.name)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ paddingLeft: '1rem', backgroundColor: 'rgba(222,219,200,0.03)' }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.5rem 0.5rem 1.5rem 0', borderBottom: '1px solid rgba(222,219,200,0.12)', textDecoration: 'none', cursor: 'pointer', border: 'none', backgroundColor: 'transparent', width: '100%' }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(1rem, 4vw, 3rem)', textAlign: 'left' }}>
                <span style={{ color: 'rgba(222,219,200,0.35)', fontSize: '0.8rem', fontVariantNumeric: 'tabular-nums' }}>{item.n}</span>
                <span style={{ color: CREAM, fontSize: 'clamp(1.4rem, 4vw, 2.8rem)', fontWeight: 400, letterSpacing: '-0.02em' }}>{item.name}</span>
              </div>
              <span style={{ color: 'rgba(222,219,200,0.4)', fontSize: '1.2rem' }}>&#8594;</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Industry detail modal */}
      <IndustryDetail industry={selectedIndustry} onClose={() => setSelectedIndustry(null)} />
    </section>
  );
};
