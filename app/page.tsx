import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TrustStrip from "@/components/trust-strip"
import LearningPaths from "@/components/learning-paths"
import FeaturedContent from "@/components/featured-content"
import EducatorSection from "@/components/educator-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background dark">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <LearningPaths />
      <FeaturedContent />
      <EducatorSection />
      <CTASection />
      <Footer />
      {/* Added link to articles hub and dashboard */}
      <div className="flex justify-center space-x-4 mt-8">
        <Button asChild>
          <Link href="/articles-hub">Articles Hub</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </main>
  )
}
