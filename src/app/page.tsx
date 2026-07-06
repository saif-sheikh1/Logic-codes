import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { WhyLogicCodes } from "@/components/sections/WhyLogicCodes";
import { Process } from "@/components/sections/Process";
import { Dashboard } from "@/components/sections/Dashboard";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyLogicCodes />
      <Process />
      <Dashboard />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
