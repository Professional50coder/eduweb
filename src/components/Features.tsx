import { motion } from 'framer-motion';
import { ArrowRight, Bot, Workflow, LineChart, type LucideIcon } from 'lucide-react';

const CREAM = '#DEDBC8';

type Tile =
  | { type: 'video'; label: string; title: string; videoUrl: string }
  | { type: 'card'; number: string; title: string; Icon: LucideIcon; body: string; checklist: string[] };

const tiles: Tile[] = [
  {
    type: 'video',
    label: 'What we build',
    title: 'Systems that run the work, so your people can run the business.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
  },
  {
    type: 'card', number: '01', title: 'AI Agents', Icon: Bot,
    body: 'Internal copilots trained on SOPs, documents, and company knowledge.',
    checklist: ['Trained on your SOPs', 'Document-aware answers', 'Company knowledge base', 'Always available'],
  },
  {
    type: 'card', number: '02', title: 'Workflow Automation', Icon: Workflow,
    body: 'Cross-platform systems connecting CRM, email, Slack, databases, and operations.',
    checklist: ['CRM & email sync', 'Slack & database links', 'Operations pipelines', 'No manual handoffs'],
  },
  {
    type: 'card', number: '03', title: 'Decision Systems', Icon: LineChart,
    body: 'Transform reports and dashboards into real-time business intelligence.',
    checklist: ['Real-time reporting', 'Live dashboards', 'Automated alerts', 'Explainable insights'],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export const Features = () => {
  return (
    <section style={{ backgroundColor: '#000', padding: '7rem 1.5rem' }}>
      <div style={{ maxWidth: '88rem', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <motion.p
            style={{ color: CREAM, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.25rem', opacity: 0.6 }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.6, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          >
            Capabilities
          </motion.p>
          <motion.h2
            style={{ color: CREAM, fontSize: 'clamp(1.4rem, 3.2vw, 2.6rem)', fontWeight: 400, margin: 0, lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            Three systems. One outcome:
          </motion.h2>
          <motion.p
            style={{ color: '#555', fontSize: 'clamp(1.4rem, 3.2vw, 2.6rem)', fontWeight: 400, margin: 0, lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} viewport={{ once: true }}
          >
            operations that run themselves.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.6rem', minHeight: '460px' }}>
          {tiles.map((tile, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              style={{ borderRadius: '0.85rem', overflow: 'hidden' }}
            >
              {tile.type === 'video' ? (
                <div style={{ position: 'relative', height: '100%', minHeight: '460px', backgroundColor: '#000', borderRadius: '0.85rem', overflow: 'hidden' }}>
                  <video src={tile.videoUrl} autoPlay loop muted playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.1) 55%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.75rem' }}>
                    <p style={{ color: CREAM, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, margin: '0 0 0.75rem' }}>{tile.label}</p>
                    <p style={{ color: CREAM, fontSize: '1.05rem', lineHeight: 1.3, margin: 0, fontWeight: 400 }}>{tile.title}</p>
                  </div>
                </div>
              ) : (
                <div style={{ backgroundColor: '#0f0f0f', borderRadius: '0.85rem', padding: '1.75rem', height: '100%', minHeight: '460px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', border: '1px solid rgba(222,219,200,0.06)' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.6rem', height: '2.6rem', borderRadius: '0.6rem', backgroundColor: 'rgba(222,219,200,0.08)' }}>
                        <tile.Icon size={18} color={CREAM} strokeWidth={1.5} />
                      </span>
                      <span style={{ color: '#444', fontSize: '0.7rem', letterSpacing: '0.05em' }}>{tile.number}</span>
                    </div>
                    <h3 style={{ color: CREAM, fontSize: '1.15rem', fontWeight: 500, margin: '0 0 0.65rem', letterSpacing: '-0.01em' }}>{tile.title}</h3>
                    <p style={{ color: 'rgba(222,219,200,0.55)', fontSize: '0.82rem', lineHeight: 1.55, margin: '0 0 1.5rem' }}>{tile.body}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    {tile.checklist.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: CREAM, flexShrink: 0 }} />
                        <span style={{ color: '#888', fontSize: '0.76rem' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: CREAM, background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.78rem', padding: 0 }}
                    whileHover={{ gap: '0.75rem' } as any}
                  >
                    Learn more
                    <ArrowRight size={13} style={{ transform: 'rotate(-45deg)' }} />
                  </motion.button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
