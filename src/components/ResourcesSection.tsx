"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";

const resources = [
  {
    key: "ebooks",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    rotation: "rotate-[-4deg]",
  },
  {
    key: "courses",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    rotation: "",
  },
  {
    key: "templates",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    rotation: "",
  },
  {
    key: "prompts",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    rotation: "rotate-[2deg]",
    isLast: true,
  },
];

export default function ResourcesSection() {
  const t = useTranslations("resourcesSection");
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (carouselRef.current && carouselRef.current.children.length > 1) {
      const firstChild = carouselRef.current.children[0] as HTMLElement;
      const secondChild = carouselRef.current.children[1] as HTMLElement;
      const scrollAmount = secondChild.offsetLeft - firstChild.offsetLeft;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="resources" className="py-32 px-6 blueprint-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-white drop-shadow-sm">
            {t("headline")} <span className="text-[#cfdbf0]">{t("subheadline")}</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Chevron Navigation Button */}
          <button
            onClick={scrollNext}
            aria-label="Scroll to next resources"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-xl hidden md:flex items-center justify-center text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-8 pb-12 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {resources.map((resource) => (
              <ResourceCard
                key={resource.key}
                resourceKey={resource.key}
                image={resource.image}
                rotation={resource.rotation}
                isLast={resource.isLast}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ResourceCardProps {
  resourceKey: string;
  image: string;
  rotation: string;
  isLast?: boolean;
  t: ReturnType<typeof useTranslations>;
}

function ResourceCard({ resourceKey, image, rotation, isLast, t }: ResourceCardProps) {
  return (
    <Link
      href="/#pricing"
      className={`snap-center flex-shrink-0 w-[85vw] md:w-[400px] bg-gradient-to-b from-[#2a2a2a] to-[#121212] rounded-[3rem] p-10 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group/card border border-white/5 hover:border-white/10 transition-all ${
        isLast ? "opacity-60 hover:opacity-100" : ""
      }`}
    >
      {/* Category Tag */}
      <span className="text-[#ffd700] text-[10px] uppercase font-black tracking-widest mb-6">
        {t(`categories.${resourceKey}.tag`)}
      </span>

      {/* Title */}
      <h3 className="text-3xl font-black text-white mb-10">
        {t(`categories.${resourceKey}.title`)}
      </h3>

      {/* Image Container */}
      <div className="relative mb-12 transform group-hover/card:scale-105 transition-transform duration-500">
        <Image
          src={image}
          alt={t(`categories.${resourceKey}.title`)}
          width={192}
          height={256}
          className={`w-48 h-64 object-cover rounded shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${rotation}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded" />
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm font-medium">
        {t(`categories.${resourceKey}.desc`)}
      </p>
    </Link>
  );
}
