"use client";

import React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiUser,
  FiUsers,
  FiBookOpen,
  FiTrendingUp,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";
import TrustpilotWidget from "@/components/TrustpilotWidget";
import { Link } from "@/i18n/routing";

type TestimonialType = {
  Icon: IconType;
  title: string;
  name: string;
  description: string;
};

const StackedCardTestimonials = () => {
  const t = useTranslations("testimonials");
  const [selected, setSelected] = useState(0);

  const testimonials: TestimonialType[] = [
    {
      Icon: FiBriefcase,
      description: t("testimonial1Quote"),
      name: t("testimonial1Name"),
      title: t("testimonial1Location"),
    },
    {
      Icon: FiTrendingUp,
      description: t("testimonial2Quote"),
      name: t("testimonial2Name"),
      title: t("testimonial2Location"),
    },
    {
      Icon: FiBookOpen,
      description:
        "The quality of these digital products is outstanding. My audience loves the value I'm providing.",
      name: "Sarah M.",
      title: "Online Educator",
    },
    {
      Icon: FiUsers,
      description:
        "Perfect for building my email list. The lead magnets convert incredibly well!",
      name: "Michael T.",
      title: "Digital Marketer",
    },
    {
      Icon: FiAward,
      description:
        "Professional, ready-to-use content that makes me look like an expert. Worth every penny.",
      name: "Lisa K.",
      title: "Entrepreneur",
    },
    {
      Icon: FiUser,
      description:
        "I can finally focus on my business instead of spending months creating content from scratch.",
      name: "David R.",
      title: "Business Owner",
    },
  ];

  const numTracks = testimonials.length;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSelected((prev) => (prev === numTracks - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [selected, numTracks]);

  return (
    <section className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden max-w-7xl mx-auto">
      <div className="p-4">
        <h3 className="text-5xl font-semibold text-gray-900">
          {t("headline")}
        </h3>
        <p className="text-slate-500 my-4">
          Join thousands of satisfied customers who have transformed their
          business with our ready-to-use digital products.
        </p>

        {/* Progress bars */}
        <div className="flex gap-1 mt-8">
          {Array.from(Array(numTracks).keys()).map((n) => (
            <button
              key={n}
              onClick={() => setSelected(n)}
              className="h-1.5 w-full bg-slate-300 relative"
              aria-label={`View testimonial ${n + 1}`}
            >
              {selected === n ? (
                <motion.span
                  className="absolute top-0 left-0 bottom-0 bg-slate-950"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5 }}
                />
              ) : (
                <span
                  className="absolute top-0 left-0 bottom-0 bg-slate-950"
                  style={{ width: selected > n ? "100%" : "0%" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Stacked Cards */}
      <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
        {testimonials.map((testimonial, i) => {
          const position = i;
          const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
          const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
          const background = position % 2 ? "black" : "white";
          const color = position % 2 ? "white" : "black";
          const TestimonialIcon = testimonial.Icon;

          return (
            <motion.div
              key={i}
              initial={false}
              style={{
                zIndex: position,
                transformOrigin: "left bottom",
                background,
                color,
              }}
              animate={{
                x: `${offset}%`,
                scale,
              }}
              whileHover={{
                translateX: position === selected ? 0 : -3,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={() => setSelected(position)}
              className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
            >
              <TestimonialIcon className="text-7xl mx-auto" />
              <p className="text-lg lg:text-xl font-light italic my-8">
                &quot;{testimonial.description}&quot;
              </p>
              <div>
                <span className="block font-semibold text-lg">{testimonial.name}</span>
                <span className="block text-sm">{testimonial.title}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trustpilot Widget */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12">
        <TrustpilotWidget height="140px" />
      </div>

      {/* Earnings Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
        <p className="text-gray-600 text-sm text-center italic">
          *Results shown are not typical. Individual outcomes vary based on effort, experience, and market conditions. ContentForge provides done-for-you products but cannot guarantee your sales, income, or business success. The average purchaser may not generate any income.{' '}
          <Link href="/earnings-disclaimer" className="text-[#003399] hover:underline">
            See full earnings disclaimer
          </Link>.
        </p>
      </div>
    </section>
  );
};

export default StackedCardTestimonials;
