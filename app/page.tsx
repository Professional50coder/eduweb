import AIHero from "@/components/ai-hero"
import AITrustStrip from "@/components/ai-trust-strip"
import AIProblems from "@/components/ai-problems"
import AIOfferings from "@/components/ai-offerings"
import AIIntegrations from "@/components/ai-integrations"
import AIHowItWorks from "@/components/ai-how-it-works"
import AIUseCases from "@/components/ai-use-cases"
import PremiumFlashcards from "@/components/premium-flashcards"
import AICredibility from "@/components/ai-credibility"
import AICTA from "@/components/ai-cta"
import ScrollCounter from "@/components/scroll-counter"
import ComparisonTable from "@/components/comparison-table"
import PricingSection from "@/components/pricing-section"
import AIFooter from "@/components/ai-footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background dark">
      <Navbar />
      <AIHero />
      <AITrustStrip />
      <AIProblems />
      <AIOfferings />
      <AIIntegrations />
      <AIHowItWorks />
      <AIUseCases />
      <PremiumFlashcards />
      <AICredibility />
      <ScrollCounter />
      <ComparisonTable />
      <PricingSection />
      <AICTA />
      <AIFooter />
    </main>
  )
}
