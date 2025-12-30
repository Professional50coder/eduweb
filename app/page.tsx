import AIHero from "@/eduweb/components/ai-hero"
import AITrustStrip from "@/eduweb/components/ai-trust-strip"
import AIProblems from "@/eduweb/components/ai-problems"
import AIOfferings from "@/eduweb/components/ai-offerings"
import AIIntegrations from "@/eduweb/components/ai-integrations"
import AIHowItWorks from "@/eduweb/components/ai-how-it-works"
import AIUseCases from "@/eduweb/components/ai-use-cases"
import PremiumFlashcards from "@/eduweb/components/premium-flashcards"
import AICredibility from "@/eduweb/components/ai-credibility"
import AICTA from "@/eduweb/components/ai-cta"
import ScrollCounter from "@/eduweb/components/scroll-counter"
import ComparisonTable from "@/eduweb/components/comparison-table"
import AIFooter from "@/eduweb/components/ai-footer"
import Navbar from "@/eduweb/components/navbar"

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
      <AICTA />
      <AIFooter />
    </main>
  )
}
