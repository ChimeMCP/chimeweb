import { HeroSection } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem'
import { SolutionSection } from '@/components/sections/solution'
import { FeaturesSection } from '@/components/sections/features'
import { CTASection } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
} 