"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const resources = [
  {
    key: "ebooks",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    key: "courses",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
  },
  {
    key: "templates",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  },
  {
    key: "prompts",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ResourcesSection() {
  const t = useTranslations("resourcesSection");

  return (
    <section id="resources" className="py-16 md:py-24 px-6 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("headline")}{" "}
            <span className="text-gray-400">{t("subheadline")}</span>
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.key}
              resourceKey={resource.key}
              image={resource.image}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ResourceCardProps {
  resourceKey: string;
  image: string;
  t: ReturnType<typeof useTranslations>;
}

function ResourceCard({ resourceKey, image, t }: ResourceCardProps) {
  return (
    <div className="glass-card p-6 md:p-8 rounded-2xl group">
      {/* Category Tag */}
      <span className="text-[#ffd700] text-[10px] uppercase font-bold tracking-widest mb-4 block">
        {t(`categories.${resourceKey}.tag`)}
      </span>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
        {t(`categories.${resourceKey}.title`)}
      </h3>

      {/* Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={t(`categories.${resourceKey}.title`)}
          width={400}
          height={300}
          className="w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {t(`categories.${resourceKey}.desc`)}
      </p>
    </div>
  );
}
