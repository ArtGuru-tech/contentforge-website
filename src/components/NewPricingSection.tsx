"use client";

import { useTranslations } from "next-intl";

export default function NewPricingSection() {
  const t = useTranslations("newPricing");

  const scrollToPurchase = () => {
    // Placeholder for Paddle checkout
    window.open("https://app.contentforge.cc", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tighter">
            {t("headline")}<br />
            <span className="text-[#ffd700]">{t("headlineHighlight")}</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {t("limitedStart")} <span className="text-white font-black underline decoration-[#ffd700]">{t("limitedHighlight")}</span> {t("limitedEnd")}
            <span className="relative group cursor-help">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-4 md:mb-6 w-72 md:w-80 p-6 md:p-8 glass-card rounded-2xl md:rounded-3xl text-sm text-gray-300 leading-relaxed shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-50 pointer-events-none transition-all">
                {t("tooltip")}
              </span>
            </span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto items-center">
          {/* Pack Lite */}
          <div className="glass-card p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-[0.15em] md:tracking-[0.2em]">
                {t("lite.name")}
              </h3>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-6xl md:text-8xl font-black leading-none">{t("lite.price")}</span>
                <span className="text-xl md:text-2xl text-gray-600 line-through font-bold mb-2">{t("lite.originalPrice")}</span>
              </div>
              <p className="text-[#ffd700] text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-10 md:mb-12 italic">
                {t("lite.access")}
              </p>

              <ul className="space-y-4 md:space-y-6 mb-12 md:mb-16">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 text-base md:text-lg font-medium text-gray-300">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {t(`lite.feature${i}`)}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToPurchase}
                className="block w-full py-5 md:py-6 rounded-xl md:rounded-2xl border-2 border-white/10 text-center text-lg md:text-xl font-black uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                {t("lite.cta")}
              </button>
            </div>
          </div>

          {/* Pack Pro */}
          <div className="glass-card p-12 md:p-20 rounded-[3rem] md:rounded-[4.5rem] relative border-[#ffd700]/40 blue-glow lg:scale-110 shadow-3xl bg-gradient-to-br from-[#0a0e27] to-[#1a1a1a] z-20 group">
            {/* Floating Badge */}
            <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 bg-[#ffd700] text-black text-xs font-black px-6 md:px-8 py-2 rounded-full uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-xl shadow-[#ffd700]/20 animate-pulse">
              {t("pro.badge")}
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-[0.15em] md:tracking-[0.2em] text-white">
                {t("pro.name")}
              </h3>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-7xl md:text-9xl font-black leading-none text-[#ffd700]">{t("pro.price")}</span>
                <span className="text-2xl md:text-3xl text-gray-600 line-through font-bold mb-3">{t("pro.originalPrice")}</span>
              </div>
              <p className="text-white/40 text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-10 md:mb-12 italic">
                {t("pro.access")}
              </p>

              <ul className="space-y-6 md:space-y-8 mb-16 md:mb-20">
                <li className="flex items-center gap-4 md:gap-6 text-lg md:text-xl font-black text-white">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700] animate-pulse flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {t("pro.feature1")}
                </li>
                {[2, 3, 4].map((i) => (
                  <li key={i} className="flex items-center gap-4 md:gap-6 text-lg md:text-xl font-medium text-gray-200">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t(`pro.feature${i}`)}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToPurchase}
                className="block w-full py-6 md:py-8 gold-gradient text-black text-center text-xl md:text-2xl font-black uppercase tracking-widest rounded-2xl md:rounded-3xl shadow-2xl shadow-[#ffd700]/30 hover:scale-105 active:scale-95 transition-all italic"
              >
                {t("pro.cta")}
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-24 md:mt-40 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 px-8 md:px-12 py-5 md:py-6 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-2 md:gap-3">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm md:text-lg font-bold uppercase tracking-widest">{t("guarantee")}</span>
            </div>
            <div className="h-6 md:h-8 w-px bg-white/10"></div>
            <div className="flex items-center gap-2 md:gap-3">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm md:text-lg font-bold uppercase tracking-widest">{t("secure")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
