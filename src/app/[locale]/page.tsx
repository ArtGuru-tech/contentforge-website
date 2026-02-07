"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import UseCasesGrid from "@/components/UseCasesGrid";
import ComparisonTable from "@/components/ComparisonTable";
import ProductCategories from "@/components/ProductCategories";
import NewPricingSection from "@/components/NewPricingSection";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <UseCasesGrid />
      <ComparisonTable />
      <ProductCategories />
      <NewPricingSection />
      <SocialProof />
      <FAQSection />
      <Footer />
    </div>
  );
}
