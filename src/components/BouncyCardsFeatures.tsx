"use client"

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export const BouncyCardsFeatures = () => {
  const t = useTranslations('sellDigitalProducts');

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-20 text-gray-900">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <div>
          <h2 className="max-w-lg text-4xl md:text-5xl font-bold">
            {t('headline').split('\n')[0]}
            <span className="text-gray-500"> {t('headline').split('\n')[1]}</span>
          </h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-full bg-[#003399] px-6 py-3 font-semibold text-white shadow-xl transition-colors hover:bg-[#002266]"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('ctaButton')}
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>{t('demandedContentTitle')}</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#003399] to-[#0066CC] p-4 transition-transform duration-300 group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <p className="text-center font-semibold text-white">
              {t('demandedContentDesc')}
            </p>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>{t('plrTitle')}</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-4 transition-transform duration-300 group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <p className="text-center font-semibold text-white">
              {t('plrDesc')}
            </p>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>{t('constantlyUpdatedTitle')}</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#00CED1] to-[#40E0D0] p-4 transition-transform duration-300 group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <p className="text-center font-semibold text-white">
              {t('constantlyUpdatedDesc')}
            </p>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>{t('premiumQualityTitle')}</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] p-4 transition-transform duration-300 group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <p className="text-center font-semibold text-white">
              {t('premiumQualityDesc')}
            </p>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-gray-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-2xl sm:text-3xl font-semibold">{children}</h3>
  );
};

export default BouncyCardsFeatures;
