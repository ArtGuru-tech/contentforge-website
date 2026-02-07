"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative hero-gradient py-24 md:py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 blueprint-bg opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Limited Offer Badge */}
        <div className="inline-flex items-center gap-2 gold-gradient text-[#0a0e27] px-4 py-2 rounded-full text-sm font-bold mb-8 pulse-gold">
          <span className="animate-pulse">🔥</span>
          {t("limitedOffer")}
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="gold-text">{t("headline1")}</span>
          <br />
          {t("headline2")}
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          {t("description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToPricing}
            className="gold-gradient text-[#0a0e27] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-[#ffd700]/20"
          >
            {t("ctaPrimary")}
          </button>
          <button
            onClick={scrollToPricing}
            className="glass-card text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
          >
            {t("ctaSecondary")}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-[#ffd700]">✓</span>
            {t("trust1")}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ffd700]">✓</span>
            {t("trust2")}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ffd700]">✓</span>
            {t("trust3")}
          </div>
        </div>
      </div>
    </section>
  );
}
