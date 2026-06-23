import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useCalendly } from './CalendlyPreloader';

const CREAM = '#DEDBC8';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal = ({ isOpen, onClose }: AuditModalProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { containerRef, isReady } = useCalendly();

  // When modal opens, move the pre-loaded Calendly widget into the modal
  useEffect(() => {
    const preloadWrapper = document.getElementById('calendly-preload');
    if (!preloadWrapper || !containerRef.current) return;

    if (isOpen && mountRef.current) {
      // Move the pre-loaded widget into the modal
      mountRef.current.appendChild(containerRef.current);
      preloadWrapper.style.visibility = 'hidden';
      preloadWrapper.style.left = '-9999px';
      preloadWrapper.style.top = '-9999px';

      // Make it visible and interactive
      containerRef.current.style.pointerEvents = 'auto';
    } else if (!isOpen) {
      // Move it back to the hidden preload container
      if (containerRef.current.parentElement !== preloadWrapper) {
        preloadWrapper.appendChild(containerRef.current);
      }
    }
  }, [isOpen, containerRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              zIndex: 40,
              backdropFilter: 'blur(6px)',
            }}
          />

          {/* Centering Wrapper */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50,
              pointerEvents: 'none',
            }}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{
                pointerEvents: 'auto',
                width: '90%',
                maxWidth: '900px',
                height: 'auto',
                maxHeight: '85vh',
                backgroundColor: '#000',
                borderRadius: '1.5rem',
                border: `1px solid rgba(222,219,200,0.15)`,
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '2rem 2.5rem',
                  borderBottom: `1px solid rgba(222,219,200,0.1)`,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h2 style={{ color: CREAM, fontSize: '1.75rem', fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
                    Free AI Workflow Audit
                  </h2>
                  <p style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.95rem', marginTop: '0.4rem', margin: 0 }}>
                    30-minute personalized assessment with our AI systems expert
                  </p>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    border: `1px solid rgba(222,219,200,0.2)`,
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                >
                  <X size={20} color={CREAM} />
                </motion.button>
              </div>

              {/* Calendly Embed Content */}
              <div
                style={{
                  flex: 1,
                  padding: '1.5rem',
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  overflowY: 'auto',
                  position: 'relative',
                }}
              >
                {/* Loading spinner — only shows if widget isn't pre-loaded yet */}
                <AnimatePresence>
                  {!isReady && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        gap: '1.5rem',
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          border: `2px solid rgba(222,219,200,0.15)`,
                          borderTopColor: CREAM,
                          borderRadius: '50%',
                        }}
                      />
                      <span style={{ color: 'rgba(222,219,200,0.5)', fontSize: '0.85rem', letterSpacing: '0.04em' }}>
                        Loading calendar...
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mount point for the pre-loaded Calendly widget */}
                <div
                  ref={mountRef}
                  style={{
                    width: '100%',
                    maxWidth: '800px',
                    height: '600px',
                    backgroundColor: 'transparent',
                    overflow: 'hidden',
                  }}
                />
              </div>

              {/* Footer Info */}
              <div
                style={{
                  padding: '1.5rem 2.5rem',
                  borderTop: `1px solid rgba(222,219,200,0.1)`,
                  backgroundColor: 'rgba(222,219,200,0.02)',
                  fontSize: '0.85rem',
                  color: 'rgba(222,219,200,0.4)',
                  textAlign: 'center',
                }}
              >
                During this call, we'll analyze your team's workflow, identify automation opportunities, and provide a custom implementation roadmap.
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
