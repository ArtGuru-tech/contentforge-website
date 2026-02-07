"use client";

import { useTranslations } from "next-intl";

export default function SocialProof() {
  const t = useTranslations("socialProof");

  return (
    <section className="py-16 px-6 bg-[#0a0e27]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-bold text-white">
          {t("headline")} <span className="gold-text">{t("count")}</span> {t("suffix")}
        </p>
      </div>
    </section>
  );
}
