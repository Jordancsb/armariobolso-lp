// app/page.js
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturesRow from "../components/Features";
import ToolsSection from "../components/EssentialTools";
import FocusSection from "../components/FocusMatters";
import TestimonialSection from "../components/SuccessStories";
import FaqSection from "../components/FAQ";
import FinalCtaSection from "../components/CTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-soft">
      <Header />
      <Hero />
      <FeaturesRow />
      <ToolsSection />
      <FocusSection />
      <TestimonialSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
