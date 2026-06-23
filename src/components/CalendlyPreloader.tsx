import { createContext, useContext, useEffect, useRef, useState } from 'react';

// Context to share the pre-loaded Calendly container across the app
const CalendlyContext = createContext<{
  containerRef: React.RefObject<HTMLDivElement | null>;
  isReady: boolean;
}>({ containerRef: { current: null }, isReady: false });

export const useCalendly = () => useContext(CalendlyContext);

const CALENDLY_URL = 'https://calendly.com/gopanihitansh5/30min?hide_event_type_details=1&hide_gdpr_block=1&primary_color=dedbc8&background_color=000000&text_color=ffffff';

export const CalendlyPreloader = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initCalendly = () => {
      if (containerRef.current && (window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
          pageSettings: {
            backgroundColor: '000000',
            primaryColor: 'dedbc8',
            textColor: 'ffffff',
          }
        });

        // Watch for iframe to finish loading
        const check = setInterval(() => {
          const iframe = containerRef.current?.querySelector('iframe');
          if (iframe) {
            clearInterval(check);
            // Give iframe content a moment to paint
            iframe.addEventListener('load', () => setIsReady(true));
            // Fallback in case load already fired
            setTimeout(() => setIsReady(true), 2000);
          }
        }, 100);
      }
    };

    // Poll until Calendly script is available (loaded via index.html)
    const poll = setInterval(() => {
      if ((window as any).Calendly) {
        clearInterval(poll);
        initCalendly();
      }
    }, 100);

    return () => clearInterval(poll);
  }, []);

  return (
    <CalendlyContext.Provider value={{ containerRef, isReady }}>
      {/* Hidden off-screen container that pre-renders the widget */}
      <div
        id="calendly-preload"
        style={{
          position: 'fixed',
          left: '-9999px',
          top: '-9999px',
          width: '800px',
          height: '600px',
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          ref={containerRef}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {children}
    </CalendlyContext.Provider>
  );
};
