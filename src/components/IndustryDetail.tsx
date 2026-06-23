import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CREAM = '#DEDBC8';

const industryData: Record<string, any> = {
  'B2B SaaS': {
    title: 'B2B SaaS Sales Automation',
    description: 'Enterprise sales teams eliminate manual lead qualification and follow-ups',
    savings: '$2,400/month',
    metrics: [
      { label: 'Time Saved', value: '32 hours/month', detail: 'Lead qualification & follow-ups' },
      { label: 'Sales Cycle', value: '35% Faster', detail: 'Average deal velocity increase' },
      { label: 'Conversion Lift', value: '+18%', detail: 'Due to consistent follow-up automation' },
      { label: 'Deal Size', value: '+$12K Avg', detail: 'More time for high-value deals' },
    ],
    workflow: [
      { step: '1', title: 'Inbound Lead Capture', desc: 'AI qualifies incoming leads against ICP in real-time' },
      { step: '2', title: 'Automated Nurture', desc: 'Personalized sequences based on engagement signals' },
      { step: '3', title: 'Sales Handoff', desc: 'Hot leads flagged with context, ready for direct outreach' },
      { step: '4', title: 'Meeting Prep', desc: 'AI generates buyer intel and talking points' },
    ],
    results: 'One SaaS company (Series B, $5M ARR) automated 80% of qualification work. Sales team focused entirely on demos and negotiations. Result: 28% pipeline growth, same headcount.',
  },
  'E-Commerce': {
    title: 'E-Commerce Order Fulfillment',
    description: 'Automate customer service, returns, and upsell workflows',
    savings: '$1,800/month',
    metrics: [
      { label: 'Time Saved', value: '28 hours/month', detail: 'Customer service & returns processing' },
      { label: 'Response Time', value: '< 2 Minutes', detail: 'Instant automated responses to common queries' },
      { label: 'Upsell Rate', value: '+22%', detail: 'AI-triggered cross-sell recommendations' },
      { label: 'Support Cost', value: '-40%', detail: 'Per transaction automation' },
    ],
    workflow: [
      { step: '1', title: 'Order Monitoring', desc: 'Real-time order status updates sent automatically' },
      { step: '2', title: 'Return Processing', desc: 'AI approves/denies returns, generates labels' },
      { step: '3', title: 'Personalized Recommendations', desc: 'Post-purchase upsells based on purchase history' },
      { step: '4', title: 'Feedback Collection', desc: 'Automated review requests and sentiment analysis' },
    ],
    results: 'Mid-size e-commerce brand (500K monthly transactions) reduced support team workload by 35%. Achieved 96% automation rate on return requests. Revenue impact: +$8K monthly from upsell automation.',
  },
  'Marketing Agencies': {
    title: 'Agency Operations Automation',
    description: 'Scale delivery and client management without proportional headcount growth',
    savings: '$2,100/month',
    metrics: [
      { label: 'Time Saved', value: '40 hours/month', detail: 'Client reporting & campaign setup' },
      { label: 'Reporting', value: 'Real-time', detail: 'Automated daily/weekly dashboards' },
      { label: 'Client Satisfaction', value: '+31%', detail: 'Due to proactive reporting automation' },
      { label: 'Account Scaling', value: '4x Capacity', detail: 'Per account manager with same workload' },
    ],
    workflow: [
      { step: '1', title: 'Campaign Setup', desc: 'AI generates ad copy variations, bidding strategies' },
      { step: '2', title: 'Daily Monitoring', desc: 'Automated alerts for anomalies (CTR drop, CPA spike)' },
      { step: '3', title: 'Client Reporting', desc: 'Custom dashboards generated and emailed automatically' },
      { step: '4', title: 'Optimization', desc: 'AI recommends budget shifts and creative changes' },
    ],
    results: '12-person digital agency automated 70% of ops work across 40+ client accounts. Grew revenue 65% with only 2 new hires. Freed team for strategy and creative.',
  },
  'Recruitment': {
    title: 'Recruitment Workflow Automation',
    description: 'Automate screening, scheduling, and candidate communication',
    savings: '$1,600/month',
    metrics: [
      { label: 'Time Saved', value: '24 hours/month', detail: 'Screening & scheduling' },
      { label: 'Screening', value: '5 seconds/CV', detail: 'AI ranks candidates by fit' },
      { label: 'Interview Scheduling', value: '100% Automated', detail: 'Calendar sync, reminders, reschedules' },
      { label: 'Offer Rate', value: '+28%', detail: 'Better candidate pre-screening' },
    ],
    workflow: [
      { step: '1', title: 'CV Parsing & Scoring', desc: 'AI extracts skills, experience, culture fit score' },
      { step: '2', title: 'Candidate Outreach', desc: 'Personalized messages sent to top-ranked candidates' },
      { step: '3', title: 'Interview Scheduling', desc: 'AI coordinates calendars, sends logistics' },
      { step: '4', title: 'Feedback Aggregation', desc: 'Team feedback compiled, ranked candidates scored' },
    ],
    results: 'Mid-market recruitment firm (8 recruiters) reduced time-to-hire from 31 days to 18 days. Automated 85% of administrative work. Placement rate improved 19%.',
  },
  'Real Estate': {
    title: 'Real Estate Listing Management',
    description: 'Automate lead nurturing, showing scheduling, and client communication',
    savings: '$1,900/month',
    metrics: [
      { label: 'Time Saved', value: '30 hours/month', detail: 'Showing schedules & follow-ups' },
      { label: 'Lead Response', value: '< 5 Minutes', detail: 'Instant property alerts and details sent' },
      { label: 'Showing Rate', value: '+24%', detail: 'From automated follow-up cadence' },
      { label: 'Conversion', value: '+16%', detail: 'Due to proactive nurture sequences' },
    ],
    workflow: [
      { step: '1', title: 'Lead Capture', desc: 'Web leads auto-trigger property recommendations' },
      { step: '2', title: 'Showing Coordination', desc: 'AI schedules and confirms property viewings' },
      { step: '3', title: 'Automated Nurture', desc: 'Personalized follow-ups based on property type interest' },
      { step: '4', title: 'Offer Management', desc: 'AI monitors and alerts on competing offers' },
    ],
    results: 'Real estate team (6 agents) automated 60% of admin work. Increased showings per week from 8 to 12 per agent. Closed 18% more deals annually.',
  },
  'Healthcare': {
    title: 'Healthcare Operations Automation',
    description: 'Automate patient communication, appointment reminders, and billing',
    savings: '$1,500/month',
    metrics: [
      { label: 'Time Saved', value: '22 hours/month', detail: 'Administrative & appointment management' },
      { label: 'No-shows', value: '-45%', detail: 'From automated reminders (SMS + email)' },
      { label: 'Billing Resolution', value: '60% Faster', detail: 'Automated insurance verification' },
      { label: 'Patient Satisfaction', value: '+23%', detail: 'Faster, proactive communication' },
    ],
    workflow: [
      { step: '1', title: 'Appointment Reminders', desc: 'Automated SMS/email 24hr and 2hr before appointment' },
      { step: '2', title: 'Insurance Verification', desc: 'AI checks coverage in real-time, alerts on denials' },
      { step: '3', title: 'Follow-up Sequences', desc: 'Post-visit recovery instructions and prescription reminders' },
      { step: '4', title: 'Patient Feedback', desc: 'Automated NPS surveys and outcome tracking' },
    ],
    results: 'Medical practice (4 providers, 8 staff) reduced no-shows from 12% to 7%. Billing team handles 3x more accounts. Patient satisfaction NPS increased 18 points.',
  },
  'Financial Services': {
    title: 'Financial Services Operations',
    description: 'Automate compliance workflows, client reporting, and lead nurturing',
    savings: '$2,200/month',
    metrics: [
      { label: 'Time Saved', value: '35 hours/month', detail: 'Compliance & reporting' },
      { label: 'Compliance Audit', value: 'Real-time', detail: 'Continuous policy adherence monitoring' },
      { label: 'Client Portfolio Updates', value: 'Daily Automated', detail: 'No manual report generation' },
      { label: 'Regulation Alerts', value: 'Instant', detail: 'Policy changes flagged immediately' },
    ],
    workflow: [
      { step: '1', title: 'Compliance Monitoring', desc: 'AI monitors all communications for regulatory violations' },
      { step: '2', title: 'Portfolio Reporting', desc: 'Automated client statements and performance summaries' },
      { step: '3', title: 'Reg Updates', desc: 'Policy changes aggregated and team notified with implications' },
      { step: '4', title: 'Client Outreach', desc: 'Triggered by market events or portfolio changes' },
    ],
    results: 'Wealth management firm (12 advisors) reduced compliance review time by 70%. Automated 90% of client communication. Scaled AUM by 25% without additional staff.',
  },
};

export const IndustryDetail = ({ industry, onClose }: { industry: string | null; onClose: () => void }) => {
  const data = industry ? industryData[industry] : null;

  return (
    <AnimatePresence>
      {industry && data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxHeight: '90vh',
              backgroundColor: '#000',
              borderTop: '1px solid rgba(222,219,200,0.12)',
              borderRadius: '1.5rem 1.5rem 0 0',
              overflowY: 'auto',
              padding: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            {/* Header with close */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div>
                <h2 style={{ color: CREAM, fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
                  {data.title}
                </h2>
                <p style={{ color: 'rgba(222,219,200,0.6)', fontSize: '0.95rem', margin: 0 }}>{data.description}</p>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  color: CREAM,
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Savings highlight */}
            <div style={{ backgroundColor: 'rgba(222,219,200,0.05)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem', border: '1px solid rgba(222,219,200,0.12)' }}>
              <div style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>
                Monthly ROI
              </div>
              <div style={{ color: CREAM, fontSize: 'clamp(2rem, 6vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.03em' }}>{data.savings}</div>
            </div>

            {/* Metrics grid */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', margin: 0 }}>
                Expected Outcomes
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {data.metrics.map((m: any) => (
                  <div key={m.label} style={{ padding: '1rem', backgroundColor: 'rgba(222,219,200,0.03)', borderRadius: '0.75rem', border: '1px solid rgba(222,219,200,0.08)' }}>
                    <div style={{ color: CREAM, fontSize: '1.8rem', fontWeight: 400, marginBottom: '0.5rem' }}>{m.value}</div>
                    <div style={{ color: 'rgba(222,219,200,0.6)', fontSize: '0.85rem' }}>{m.label}</div>
                    <div style={{ color: 'rgba(222,219,200,0.4)', fontSize: '0.75rem', marginTop: '0.5rem' }}>{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow steps */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
                Implementation Workflow
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.workflow.map((w: any) => (
                  <div key={w.step} style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: 'rgba(222,219,200,0.02)', borderRadius: '0.75rem', border: '1px solid rgba(222,219,200,0.08)' }}>
                    <div style={{ color: 'rgba(222,219,200,0.3)', fontSize: '1.2rem', fontWeight: 500, minWidth: '2rem' }}>{w.step}</div>
                    <div>
                      <div style={{ color: CREAM, fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.25rem' }}>{w.title}</div>
                      <div style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.85rem' }}>{w.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-world result */}
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(222,219,200,0.06)', borderRadius: '1rem', border: '1px solid rgba(222,219,200,0.15)', borderLeft: `3px solid ${CREAM}` }}>
              <div style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>
                Real-World Result
              </div>
              <p style={{ color: CREAM, fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{data.results}</p>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ backgroundColor: CREAM, color: '#000' }}
              style={{
                width: '100%',
                padding: '1rem',
                marginTop: '2rem',
                backgroundColor: 'rgba(222,219,200,0.1)',
                border: `1px solid ${CREAM}`,
                borderRadius: '0.75rem',
                color: CREAM,
                fontSize: '0.95rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              Start Your Automation →
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
