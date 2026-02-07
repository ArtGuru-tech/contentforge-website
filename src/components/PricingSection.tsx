"use client"

import React from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { openCheckout } from '@/lib/paddle';

export default function PricingSection() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  return (
    <section id="pricing" className="w-full text-white bg-gradient-to-br from-[#003399] to-[#001155] px-4 lg:px-8 py-12 lg:py-24 relative overflow-hidden">
      <Heading t={t} />
      <PriceCards t={t} locale={locale} />
      <TrustElements t={t} />
      <TopLeftCircle />
      <BottomRightCircle />
    </section>
  );
}

interface HeadingProps {
  t: (key: string) => string;
}

const Heading = ({ t }: HeadingProps) => {
  return (
    <div className="mb-12 lg:mb-24 relative z-10">
      <h3 className="font-semibold text-5xl lg:text-7xl text-center mb-6">
        {t('headline')}
      </h3>
      <p className="text-center mx-auto max-w-lg mb-4 text-blue-100">
        {t('description')}
      </p>
      <div className="text-center">
        <Link href="/pricing" className="text-[#FFD700] hover:text-[#FFF] font-semibold underline transition-colors">
          View Full Pricing Details →
        </Link>
      </div>
    </div>
  );
};

interface PriceCardsProps {
  t: (key: string) => string;
  locale: string;
}

const PriceCards = ({ t, locale }: PriceCardsProps) => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 w-full max-w-5xl mx-auto relative z-10">
    {/* LITE PLAN */}
    <div className="w-full bg-white text-black p-6 border-[1px] border-slate-300 rounded-xl shadow-xl">
      <p className="text-2xl font-bold mb-2">{t('liteTitle')}</p>
      <p className="text-lg mb-6 text-gray-600">{t('liteDesc')}</p>
      <p className="text-6xl font-bold mb-2 text-[#003399]">
        $97
      </p>
      <p className="text-sm mb-8 text-gray-600">{t('oneTime')}</p>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base">{t('liteFeature1')}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base">{t('liteFeature2')}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base">{t('liteFeature3')}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base">{t('liteFeature4')}</span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        onClick={() => openCheckout('lite', locale)}
        className="w-full py-4 mt-8 font-semibold bg-[#003399] hover:bg-[#002266] text-white rounded-lg uppercase transition-colors cursor-pointer"
      >
        Get Started
      </motion.button>
    </div>

    {/* PRO PLAN */}
    <div className="w-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black p-6 border-[1px] border-slate-300 rounded-xl shadow-xl relative overflow-hidden">
      {/* Most Popular Badge */}
      <div className="absolute top-4 right-4 bg-[#003399] text-white px-3 py-1 rounded-full text-xs font-semibold">
        {t('mostPopular')}
      </div>

      <p className="text-2xl font-bold mb-2">{t('proTitle')}</p>
      <p className="text-lg mb-6 text-gray-800">{t('proDesc')}</p>
      <p className="text-6xl font-bold mb-2 text-[#003399]">
        $397
      </p>
      <p className="text-sm mb-8 text-gray-800">{t('oneTime')}</p>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base font-semibold">{t('proFeature1')}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base">{t('proFeature2')}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base">{t('proFeature3')}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base">{t('proFeature4')}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base">{t('proFeature5')}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
              fill="#003399"
            />
          </svg>
          <span className="text-base">{t('proFeature6')}</span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        onClick={() => openCheckout('pro', locale)}
        className="w-full py-4 mt-8 font-semibold bg-[#003399] hover:bg-[#002266] text-white rounded-lg uppercase transition-colors cursor-pointer"
      >
        Get Started Pro
      </motion.button>
    </div>
  </div>
);

interface TrustElementsProps {
  t: (key: string) => string;
}

const TrustElements = ({ t }: TrustElementsProps) => (
  <div className="mt-16 text-center relative z-10 max-w-6xl mx-auto">
    {/* Trust Badges */}
    <div className="flex justify-center items-center gap-8 flex-wrap">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
          <span className="text-[#003399] font-bold text-lg">✓</span>
        </div>
        <span className="text-white font-semibold">{t('guarantee')}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
          <span className="text-[#003399] font-bold text-lg">🔒</span>
        </div>
        <span className="text-white font-semibold">{t('securePayment')}</span>
      </div>
    </div>
  </div>
);

const TopLeftCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-blue-400 border-dotted absolute z-0 -left-[250px] -top-[200px] opacity-30"
    />
  );
};

const BottomRightCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "-360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-blue-400 border-dotted absolute z-0 -right-[250px] -bottom-[200px] opacity-30"
    />
  );
};
