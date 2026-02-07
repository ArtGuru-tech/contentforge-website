"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const categories = [
  {
    key: "ebooks",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    glowClass: "bg-yellow-500/20",
    rotation: "rotate-[-6deg]",
  },
  {
    key: "masterclass",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    glowClass: "bg-blue-500/20",
    rotation: "",
  },
  {
    key: "templates",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    glowClass: "bg-purple-500/20",
    rotation: "",
  },
];

export default function ProductCategories() {
  const t = useTranslations("productCategories");

  return (
    <section id="product-categories" className="py-32 md:py-48 px-6 md:px-12 blueprint-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 text-white leading-none tracking-tighter">
              {t("headline")} <span className="text-blue-300">{t("headlineHighlight")}</span>
            </h2>
            <p className="text-blue-100/60 text-xl md:text-2xl">
              {t("subheadline")}
            </p>
          </div>
          <div className="hidden lg:block">
            <Link
              href="/#pricing"
              className="text-[#ffd700] border-b-2 border-[#ffd700] font-black uppercase tracking-widest text-sm hover:pb-2 transition-all"
            >
              {t("viewCatalog")}
            </Link>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {categories.map((category, index) => (
            <Link
              key={category.key}
              href="/#pricing"
              className="group/card snap-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0e27] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 flex flex-col items-center text-center shadow-3xl border border-white/10 hover:border-[#ffd700]/30 transition-all duration-500"
            >
              <span className="text-[#ffd700] text-xs uppercase font-black tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8 bg-[#ffd700]/5 px-4 py-1 rounded-full">
                {t(`${category.key}.tag`)}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-8 md:mb-10">
                {t(`${category.key}.title`)}
              </h3>
              <div className={`relative mb-8 md:mb-12 transform group-hover/card:scale-110 ${index === 2 ? 'group-hover/card:-rotate-2' : index === 0 ? 'group-hover/card:rotate-2' : ''} transition-all duration-700`}>
                <div className={`absolute -inset-4 ${category.glowClass} blur-2xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative w-48 h-64 md:w-56 md:h-72">
                  <Image
                    src={category.image}
                    alt={t(`${category.key}.title`)}
                    fill
                    unoptimized
                    className={`object-cover rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] ${category.rotation} relative z-10`}
                  />
                </div>
              </div>
              <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">
                {t(`${category.key}.description`)}
              </p>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden text-center mt-12">
          <Link
            href="/#pricing"
            className="text-[#ffd700] border-b-2 border-[#ffd700] font-black uppercase tracking-widest text-sm hover:pb-2 transition-all"
          >
            {t("viewCatalog")}
          </Link>
        </div>
      </div>
    </section>
  );
}
