"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ValueProposition() {
  const t = useTranslations("valueProposition");

  return (
    <section id="concept" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden bg-[#0c1232]/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Column - Content */}
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 md:mb-12 leading-tight tracking-tighter">
            {t("headlineStart")} <span className="text-[#ffd700] italic">{t("headlineHighlight")}</span> {t("headlineEnd")}
          </h2>
          <div className="space-y-6 md:space-y-8 text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            <p>{t("paragraph1")}</p>
            <p>
              {t("paragraph2Start")} <span className="text-white font-black border-b-2 border-[#ffd700] pb-1">ContentForge</span>{t("paragraph2End")}
            </p>
          </div>
          <div className="mt-10 md:mt-12 flex gap-6">
            <Link
              href="/#pricing"
              className="px-8 md:px-10 py-4 md:py-5 gold-gradient text-black font-black text-lg md:text-xl rounded-2xl flex items-center gap-3 italic hover:scale-105 transition-transform"
            >
              {t("cta")}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column - Quote Card */}
        <div className="relative">
          <div className="absolute -inset-10 bg-[#ffd700]/10 blur-[100px] rounded-full"></div>
          <div className="glass-card p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border-white/20 relative z-10 shadow-3xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 md:p-8">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-[#ffd700]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="w-20 md:w-24 h-2 bg-[#ffd700] rounded-full"></div>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed italic text-white">
                &ldquo;{t("quote")}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-[#ffd700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-lg md:text-xl uppercase tracking-widest">{t("author")}</p>
                  <p className="text-gray-500">{t("role")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
