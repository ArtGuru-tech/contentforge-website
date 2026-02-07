"use client";

import { useTranslations } from "next-intl";

export default function ComparisonTable() {
  const t = useTranslations("comparison");

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#080d21] relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-black italic mb-4 tracking-tighter">
            {t("headline")}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl">
            {t("subheadline")}
          </p>
        </div>

        {/* Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 glass-card shadow-3xl">
          {/* Classic Approach - Left */}
          <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div>
              <div className="inline-block px-4 py-1 bg-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest rounded-full mb-6 md:mb-8">
                {t("classic.badge")}
              </div>
              <div className="space-y-8 md:space-y-12">
                <div className="group">
                  <p className="text-4xl md:text-5xl font-black text-gray-500 mb-2 group-hover:text-red-400 transition-colors">
                    {t("classic.time")}
                  </p>
                  <p className="text-base md:text-lg text-gray-400">
                    {t("classic.timeDesc")}
                  </p>
                </div>
                <div className="group">
                  <p className="text-4xl md:text-5xl font-black text-gray-500 mb-2 group-hover:text-red-400 transition-colors">
                    {t("classic.cost")}
                  </p>
                  <p className="text-base md:text-lg text-gray-400">
                    {t("classic.costDesc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-20">
              <p className="text-gray-600 text-sm">
                {t("classic.risk")}
              </p>
            </div>
          </div>

          {/* ContentForge Advantage - Right */}
          <div className="p-10 md:p-16 bg-[#ffd700]/5 flex flex-col justify-between">
            <div>
              <div className="inline-block px-4 py-1 bg-[#ffd700]/20 text-[#ffd700] text-xs font-black uppercase tracking-widest rounded-full mb-6 md:mb-8">
                {t("contentforge.badge")}
              </div>
              <div className="space-y-8 md:space-y-12">
                <div className="group">
                  <p className="text-4xl md:text-6xl font-black text-[#ffd700] mb-2 group-hover:scale-105 origin-left transition-transform">
                    {t("contentforge.time")}
                  </p>
                  <p className="text-base md:text-lg text-gray-300">
                    {t("contentforge.timeDesc")}
                  </p>
                </div>
                <div className="group">
                  <p className="text-4xl md:text-6xl font-black text-[#ffd700] mb-2 group-hover:scale-105 origin-left transition-transform">
                    {t("contentforge.cost")}
                  </p>
                  <p className="text-base md:text-lg text-gray-300">
                    {t("contentforge.costDesc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-20 flex items-center gap-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-white font-bold text-base md:text-lg">
                {t("contentforge.benefit")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
