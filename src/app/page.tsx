import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBanner from "@/components/sections/TrustBanner";
import Features from "@/components/sections/Features";
import BentoGrid from "@/components/sections/BentoGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBanner />
      <Features />
      <BentoGrid />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
