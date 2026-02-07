"use client";

import { useTranslations } from "next-intl";

export default function UseCasesGrid() {
  const t = useTranslations("useCases");

  return (
    <section id="use-cases" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tighter">
            {t("headline")}
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto">
            {t("subheadline")}
          </p>
        </div>

        {/* Top 3 Cards */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10">
          {/* Viral Strategy */}
          <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] hover:border-[#ffd700]/50 flex flex-col h-full transition-all duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500/10 text-red-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-10 shadow-lg shadow-red-500/10">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 leading-tight">
              {t("viral.title")}
            </h3>
            <p className="text-base md:text-lg text-gray-500 mb-4 md:mb-6 font-medium italic">
              {t("viral.subtitle")}
            </p>
            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {t("viral.description")}
            </p>
            <div className="mt-auto pt-8 md:pt-10 border-t border-white/5 flex items-center justify-between">
              <span className="px-4 md:px-5 py-2 bg-white/5 rounded-full text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400">
                {t("viral.badge")}
              </span>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>

          {/* Shopify Empire */}
          <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] hover:border-[#ffd700]/50 flex flex-col h-full transition-all duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 text-green-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-10 shadow-lg shadow-green-500/10">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 leading-tight">
              {t("shopify.title")}
            </h3>
            <p className="text-base md:text-lg text-gray-500 mb-4 md:mb-6 font-medium italic">
              {t("shopify.subtitle")}
            </p>
            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {t("shopify.description")}
            </p>
            <div className="mt-auto pt-8 md:pt-10 border-t border-white/5 flex items-center justify-between">
              <span className="px-4 md:px-5 py-2 bg-white/5 rounded-full text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400">
                {t("shopify.badge")}
              </span>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Lead Magnets */}
          <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] hover:border-[#ffd700]/50 flex flex-col h-full transition-all duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500/10 text-blue-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-10 shadow-lg shadow-blue-500/10">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 0112.728 0" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 leading-tight">
              {t("leads.title")}
            </h3>
            <p className="text-base md:text-lg text-gray-500 mb-4 md:mb-6 font-medium italic">
              {t("leads.subtitle")}
            </p>
            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {t("leads.description")}
            </p>
            <div className="mt-auto pt-8 md:pt-10 border-t border-white/5 flex items-center justify-between">
              <span className="px-4 md:px-5 py-2 bg-white/5 rounded-full text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400">
                {t("leads.badge")}
              </span>
              <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom 2 Horizontal Cards */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {/* Coaching High-Ticket */}
          <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] hover:border-[#ffd700]/50 flex flex-col lg:flex-row items-center gap-8 md:gap-10 transition-all duration-300">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-500/10 text-purple-500 rounded-2xl md:rounded-3xl flex-shrink-0 flex items-center justify-center">
              <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">
                {t("coaching.title")}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {t("coaching.description")}
              </p>
            </div>
          </div>

          {/* Social Content Scale */}
          <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] hover:border-[#ffd700]/50 flex flex-col lg:flex-row items-center gap-8 md:gap-10 transition-all duration-300">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-500/10 text-orange-500 rounded-2xl md:rounded-3xl flex-shrink-0 flex items-center justify-center">
              <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">
                {t("social.title")}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {t("social.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
