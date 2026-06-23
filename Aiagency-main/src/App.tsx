import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Transformation } from './components/Transformation';
import { Industries } from './components/Industries';
import { CaseStudies } from './components/CaseStudies';
import { WhyUs } from './components/WhyUs';
import { FinalCTA } from './components/FinalCTA';
import { CalendlyPreloader } from './components/CalendlyPreloader';

export default function App() {
  return (
    <CalendlyPreloader>
      <div style={{ backgroundColor: '#000000' }}>
        <Hero />
        <About />
        <Features />
        <Process />
        <Transformation />
        <Industries />
        <CaseStudies />
        <WhyUs />
        <FinalCTA />
      </div>
    </CalendlyPreloader>
  );
}
