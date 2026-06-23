import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CREAM = '#DEDBC8';

const caseStudyData = {
  title: 'Sales Team Automation Case Study',
  company: 'Mid-Market Tech Services Firm',
  industry: 'B2B Services',
  teamSize: '8 Sales Reps',
  timeline: '14 days to first ROI',
  
  challenge: 'Sales team spent 15+ hours weekly on administrative work: qualifying leads, scheduling demos, sending follow-ups, and updating CRM. Despite strong product-market fit, pipeline growth stalled and deal velocity slowed. Sales reps complained about tool fatigue and manual busywork.',

  objectives: [
    { title: 'Reduce Admin Work', desc: 'Eliminate 70% of manual lead qualification and follow-ups', result: 'Achieved 75% automation' },
    { title: 'Accelerate Pipeline', desc: 'Decrease sales cycle from 45 to 30 days', result: '33% improvement' },
    { title: 'Increase Touchpoints', desc: 'Enable consistent follow-up cadence at scale', result: 'Consistent 3-touch minimum' },
    { title: 'Improve Conversion', desc: 'Higher quality leads reach sales reps', result: '+22% conversion rate' },
  ],

  workflow: [
    {
      phase: 'Discovery',
      title: 'Inbound Lead Assessment',
      steps: [
        'Incoming demo requests flow into AI qualification system',
        'AI analyzes company size, industry, use case fit against ICP',
        'Scores assigned 0-100 based on 12 behavioral signals',
        'Only leads scoring 65+ route to sales immediately',
      ],
    },
    {
      phase: 'Engagement',
      title: 'Automated Nurture Sequences',
      steps: [
        'Lower-scoring leads (40-64) enter 5-email nurture sequence',
        'Personalized based on captured intent signals (pages visited, emails opened)',
        'Triggered milestones: industry updates, feature releases, case studies',
        'Leads automatically upgrade to sales when engagement threshold hit',
      ],
    },
    {
      phase: 'Handoff',
      title: 'Sales Prep & Context',
      steps: [
        'Sales rep receives lead with pre-assembled buyer intelligence',
        'AI generates talking points based on company research and pain points',
        'Suggested demo agenda, competitor intel, negotiation guidelines included',
        'Calendar integrations auto-schedule demos (no back-and-forth)',
      ],
    },
    {
      phase: 'Execution',
      title: 'Meeting Facilitation',
      steps: [
        'AI records and transcribes demo, extracts action items',
        'Automatic follow-up email sent 2 hours post-demo',
        'If no response in 3 days, automated nudge sequence begins',
        'Deal stage advanced only when clear buying signals detected',
      ],
    },
  ],

  metrics: [
    { category: 'Time Savings', metric: 'Admin Hours', before: '65 hrs/week', after: '16 hrs/week', unit: 'Hours/week', improvement: '75% reduction' },
    { category: 'Pipeline', metric: 'Sales Cycle', before: '45 days', after: '30 days', unit: 'Days', improvement: '33% faster' },
    { category: 'Conversion', metric: 'Conversion Rate', before: '18%', after: '22%', unit: '%', improvement: '+4 points' },
    { category: 'Revenue', metric: 'Pipeline Growth', before: '$0', after: '+$180K', unit: '$ Additional', improvement: 'New capacity' },
  ],

  financials: {
    implementation: '$8,000',
    monthlyROI: '$12,400',
    paybackPeriod: '0.6 months (18 days)',
    annualSavings: '$148,800',
    description: '8 sales reps × $1,550/month per rep savings = $12,400 monthly ROI. Implementation cost recovered in less than 3 weeks.',
  },

  implementation: [
    {
      week: 'Week 1',
      title: 'Setup & Integration',
      tasks: [
        'Deploy AI qualification model (pre-trained on SaaS conversion data)',
        'Connect CRM, email, calendar, phone systems',
        'Configure ICP rules and lead scoring criteria',
        'Create initial nurture sequences (5-10 emails)',
      ],
    },
    {
      week: 'Week 2',
      title: 'Pilot & Optimization',
      tasks: [
        'Enable for 20% of incoming leads first',
        'Team reviews AI recommendations, provides feedback',
        'Adjust lead scoring thresholds based on sales team feedback',
        'A/B test email subject lines and sequences',
      ],
    },
    {
      week: 'Week 3+',
      title: 'Full Deployment & Scaling',
      tasks: [
        'Scale AI to 100% of inbound after pilot validation',
        'Expand automation to outbound lead prioritization',
        'Train team on AI system, build custom playbooks',
        'Monitor conversion, iterate sequences continuously',
      ],
    },
  ],

  results: [
    {
      metric: '75%',
      desc: 'of admin work eliminated',
      detail: 'Reps now spend 80% time on selling instead of admin',
    },
    {
      metric: '33%',
      desc: 'sales cycle reduction',
      detail: 'Consistent follow-ups accelerate buying process',
    },
    {
      metric: '+$12.4K',
      desc: 'monthly ROI achieved',
      detail: 'Paid for itself in 18 days at $8K implementation cost',
    },
    {
      metric: '+28%',
      desc: 'productivity lift',
      detail: 'Same 8 reps now handle pipeline growth that required 11 before',
    },
  ],

  testimonial: 'We were losing deals to slower competitors because our reps were drowning in admin work. The AI qualification system changed everything. Our best rep can now manage twice the pipeline, and our average rep is performing like our top 20%. This is the most impactful tool we\'ve ever implemented.',
  testimonialAuthor: 'VP Sales, B2B SaaS Company',
};

export const CaseStudyDetail = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
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
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>
                  {caseStudyData.company} • {caseStudyData.industry}
                </div>
                <h2 style={{ color: CREAM, fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.03em' }}>
                  {caseStudyData.title}
                </h2>
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

            {/* Quick stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
              {[
                { label: 'Team Size', value: caseStudyData.teamSize },
                { label: 'Industry', value: caseStudyData.industry },
                { label: 'Timeline', value: caseStudyData.timeline },
              ].map((s) => (
                <div key={s.label} style={{ padding: '1rem', backgroundColor: 'rgba(222,219,200,0.03)', borderRadius: '0.75rem', border: '1px solid rgba(222,219,200,0.08)' }}>
                  <div style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{s.label}</div>
                  <div style={{ color: CREAM, fontSize: '1.1rem', fontWeight: 500 }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Challenge */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
                The Challenge
              </h3>
              <p style={{ color: CREAM, fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{caseStudyData.challenge}</p>
            </div>

            {/* Objectives */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
                Objectives & Results
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {caseStudyData.objectives.map((obj) => (
                  <div key={obj.title} style={{ padding: '1.5rem', backgroundColor: 'rgba(222,219,200,0.03)', borderRadius: '0.75rem', border: '1px solid rgba(222,219,200,0.08)' }}>
                    <div style={{ color: CREAM, fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.5rem' }}>{obj.title}</div>
                    <div style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>{obj.desc}</div>
                    <div style={{ color: '#b8d4a8', fontSize: '1rem', fontWeight: 500 }}>✓ {obj.result}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow phases */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
                Implementation Workflow
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {caseStudyData.workflow.map((phase) => (
                  <div key={phase.phase}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem' }}>
                      <span style={{ color: 'rgba(222,219,200,0.3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', minWidth: '60px' }}>{phase.phase}</span>
                      <span style={{ color: CREAM, fontSize: '1.1rem', fontWeight: 500 }}>{phase.title}</span>
                    </div>
                    <div style={{ display: 'grid', gap: '0.75rem', marginLeft: '0' }}>
                      {phase.steps.map((step, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.75rem', backgroundColor: 'rgba(222,219,200,0.02)', borderRadius: '0.5rem', border: '1px solid rgba(222,219,200,0.06)' }}>
                          <span style={{ color: 'rgba(222,219,200,0.2)', fontSize: '0.8rem', minWidth: '20px' }}>•</span>
                          <span style={{ color: 'rgba(222,219,200,0.6)', fontSize: '0.85rem' }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics table */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
                Key Metrics
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(222,219,200,0.12)' }}>
                      <th style={{ textAlign: 'left', padding: '0.75rem', color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', fontWeight: 400, textTransform: 'uppercase' }}>
                        Metric
                      </th>
                      <th style={{ textAlign: 'left', padding: '0.75rem', color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', fontWeight: 400, textTransform: 'uppercase' }}>
                        Before
                      </th>
                      <th style={{ textAlign: 'left', padding: '0.75rem', color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', fontWeight: 400, textTransform: 'uppercase' }}>
                        After
                      </th>
                      <th style={{ textAlign: 'left', padding: '0.75rem', color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', fontWeight: 400, textTransform: 'uppercase' }}>
                        Improvement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {caseStudyData.metrics.map((m) => (
                      <tr key={m.metric} style={{ borderBottom: '1px solid rgba(222,219,200,0.06)' }}>
                        <td style={{ padding: '1rem 0.75rem', color: CREAM, fontSize: '0.9rem' }}>{m.metric}</td>
                        <td style={{ padding: '1rem 0.75rem', color: 'rgba(222,219,200,0.5)', fontSize: '0.9rem' }}>{m.before}</td>
                        <td style={{ padding: '1rem 0.75rem', color: CREAM, fontSize: '0.9rem', fontWeight: 500 }}>{m.after}</td>
                        <td style={{ padding: '1rem 0.75rem', color: '#b8d4a8', fontSize: '0.9rem', fontWeight: 500 }}>{m.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Financial impact */}
            <div style={{ padding: '1.5rem', backgroundColor: 'rgba(222,219,200,0.06)', borderRadius: '1rem', border: '1px solid rgba(222,219,200,0.15)', marginBottom: '3rem' }}>
              <h3 style={{ color: CREAM, fontSize: '1.2rem', fontWeight: 500, margin: '0 0 1.5rem' }}>Financial Impact</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                {[
                  { label: 'Implementation', value: caseStudyData.financials.implementation },
                  { label: 'Monthly ROI', value: caseStudyData.financials.monthlyROI },
                  { label: 'Payback Period', value: caseStudyData.financials.paybackPeriod },
                  { label: 'Annual Savings', value: caseStudyData.financials.annualSavings },
                ].map((f) => (
                  <div key={f.label}>
                    <div style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      {f.label}
                    </div>
                    <div style={{ color: '#b8d4a8', fontSize: '1.3rem', fontWeight: 500 }}>{f.value}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.8rem', marginTop: '1rem', marginBottom: 0 }}>
                {caseStudyData.financials.description}
              </p>
            </div>

            {/* Results highlights */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
                Results
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                {caseStudyData.results.map((r) => (
                  <div key={r.metric} style={{ padding: '1.5rem', backgroundColor: 'rgba(222,219,200,0.03)', borderRadius: '0.75rem', border: '1px solid rgba(222,219,200,0.08)', textAlign: 'center' }}>
                    <div style={{ color: '#b8d4a8', fontSize: '2rem', fontWeight: 500, marginBottom: '0.5rem' }}>{r.metric}</div>
                    <div style={{ color: CREAM, fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>{r.desc}</div>
                    <div style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.75rem' }}>{r.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div style={{ padding: '2rem', backgroundColor: 'rgba(222,219,200,0.06)', borderRadius: '1rem', border: '1px solid rgba(222,219,200,0.15)', marginBottom: '2rem', borderLeft: `4px solid ${CREAM}` }}>
              <p style={{ color: CREAM, fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 1rem' }}>
                "{caseStudyData.testimonial}"
              </p>
              <div style={{ color: 'rgba(222,219,200,0.6)', fontSize: '0.85rem', fontWeight: 500 }}>{caseStudyData.testimonialAuthor}</div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ backgroundColor: CREAM, color: '#000' }}
              style={{
                width: '100%',
                padding: '1rem',
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
              Replicate These Results →
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
