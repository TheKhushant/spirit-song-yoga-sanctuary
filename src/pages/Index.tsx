import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import YogaTypesSection from "@/components/YogaTypesSection";
import AsanasSection from "@/components/AsanasSection";
import BodyPartsSection from "@/components/BodyPartsSection";
import SuryaNamaskarSection from "@/components/SuryaNamaskarSection";
import PranayamaSection from "@/components/PranayamaSection";
import MeditationSection from "@/components/MeditationSection";
import BeginnerGuideSection from "@/components/BeginnerGuideSection";
import DailyPlanSection from "@/components/DailyPlanSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <BenefitsSection />
    <YogaTypesSection />
    <AsanasSection />
    <BodyPartsSection />
    <SuryaNamaskarSection />
    <PranayamaSection />
    <MeditationSection />
    <BeginnerGuideSection />
    <DailyPlanSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
