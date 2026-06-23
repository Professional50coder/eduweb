import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { AuditModal } from './AuditModal';

const CREAM = '#DEDBC8';

const headlineLines = ['Stop Paying People', 'To Do What AI', 'Can Automate.'];

const trustItems = [
  '14-Day Deployment',
  '10–15+ Hours Saved Weekly',
  '100% Explainable Decisions',
  'Zero Vendor Lock-In',
];

const lineVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { delay: 0.1 + i * 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export const Hero = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const navItems = ['Systems', 'Process', 'Industries', 'Case Studies'];

  return (
    <div style={{ position: 'relative', height: '100vh', minHeight: '720px', backgroundColor: '#000', padding: '1rem', overflow: 'hidden' }}>
      {/* Video Background — the floating island scene */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: '1.5rem', overflow: 'hidden' }}>
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Subtle glowing workflow paths / data streams moving through the clouds */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.5, mixBlendMode: 'screen' }} preserveAspectRatio="none" viewBox="0 0 1440 900">
          <defs>
            <linearGradient id="streamGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(222,219,200,0)" />
              <stop offset="50%" stopColor="rgba(222,219,200,0.7)" />
              <stop offset="100%" stopColor="rgba(222,219,200,0)" />
            </linearGradient>
          </defs>
          {[
            'M-50,250 C300,180 600,320 1490,210',
            'M-50,470 C400,560 900,400 1490,520',
            'M-50,680 C350,640 800,720 1490,650',
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="url(#streamGrad)"
              strokeWidth="1"
              strokeDasharray="6 14"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ strokeDashoffset: [0, -200], opacity: [0, 1, 1] }}
              transition={{ strokeDashoffset: { duration: 6 + i * 2, repeat: Infinity, ease: 'linear' }, opacity: { duration: 2, delay: 1 + i * 0.4 } }}
            />
          ))}
        </svg>

        {/* Grain overlay */}
        <div style={{ position: 'absolute', inset: 0, mixBlendMode: 'overlay', opacity: 0.6,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px', pointerEvents: 'none' }} />
        {/* Cinematic gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.85) 100%)' }} />
      </div>

      {/* Navbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <nav style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', borderRadius: '0 0 1.25rem 1.25rem', padding: '0.7rem 1.75rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <motion.span
            style={{ color: CREAM, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            AI2Easy4U
          </motion.span>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            {navItems.map((item, i) => (
              <motion.a
                key={item} href="#"
                style={{ color: 'rgba(222,219,200,0.7)', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.45 }}
                onMouseEnter={e => (e.currentTarget.style.color = CREAM)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(222,219,200,0.7)')}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
      </div>

      {/* Hero Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
        {/* Giant editorial headline */}
        <div style={{ marginBottom: '2rem' }}>
          {headlineLines.map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.h1
                custom={i}
                variants={lineVariant}
                initial="hidden"
                animate="visible"
                style={{ margin: 0, lineHeight: 0.95, fontSize: 'clamp(2.4rem, 7.5vw, 7rem)', fontWeight: 500, letterSpacing: '-0.045em', color: CREAM }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subheadline + CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem' }}>
          <motion.p
            style={{ color: 'rgba(222,219,200,0.7)', fontSize: 'clamp(0.85rem, 1.1vw, 1rem)', lineHeight: 1.6, margin: 0, maxWidth: '34rem' }}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Production-ready AI systems that eliminate repetitive work, automate operations, and deliver measurable ROI in just 14 days.
          </motion.p>

          <motion.div
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <motion.button
              onClick={() => setIsAuditModalOpen(true)}
              whileHover={{ scale: 1.04 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: CREAM, color: '#000', border: 'none', borderRadius: '9999px', padding: '0.8rem 1.5rem', fontWeight: 500, fontSize: '0.875rem', cursor: 'pointer' }}
            >
              Get Free AI Workflow Audit
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1.9rem', height: '1.9rem', backgroundColor: '#000', borderRadius: '50%' }}>
                <ArrowRight size={14} color={CREAM} />
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, borderColor: CREAM }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: CREAM, border: '1px solid rgba(222,219,200,0.4)', borderRadius: '9999px', padding: '0.8rem 1.5rem', fontWeight: 500, fontSize: '0.875rem', cursor: 'pointer' }}
            >
              See Real Systems
            </motion.button>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 2.5rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(222,219,200,0.12)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {trustItems.map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: CREAM, boxShadow: `0 0 8px ${CREAM}` }} />
              <span style={{ color: 'rgba(222,219,200,0.85)', fontSize: '0.72rem', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </div>
  );
};
