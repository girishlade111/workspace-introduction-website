import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductPreview } from "@/components/ProductPreview";
import { AIFeatures } from "@/components/AIFeatures";
import { Projects } from "@/components/Projects";
import { TrustAndIntegrations } from "@/components/TrustAndIntegrations";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProductPreview />
      <AIFeatures />
      <Projects />
      <TrustAndIntegrations />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
