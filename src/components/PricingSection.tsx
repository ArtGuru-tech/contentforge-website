"use client"

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function PricingSection() {
  const t = useTranslations('pricing');

  return (
    <section id="pricing" className="w-full text-white bg-gradient-to-br from-[#003399] to-[#001155] px-4 lg:px-8 py-12 lg:py-24 relative overflow-hidden">
      <Heading t={t} />
      <PriceCards t={t} />
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
      <p className="text-center mx-auto max-w-lg mb-8 text-blue-100">
        {t('description')}
      </p>
    </div>
  );
};

interface PriceCardsProps {
  t: (key: string) => string;
}

const PriceCards = ({ t }: PriceCardsProps) => (
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
        className="w-full py-4 mt-8 font-semibold bg-[#003399] hover:bg-[#002266] text-white rounded-lg uppercase transition-colors"
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
        className="w-full py-4 mt-8 font-semibold bg-[#003399] hover:bg-[#002266] text-white rounded-lg uppercase transition-colors"
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
    <div className="flex justify-center items-center gap-8 mb-6 flex-wrap">
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

    {/* Payment Processors */}
    <div className="mb-8">
      <p className="text-blue-200 text-xs mb-4 uppercase tracking-wide">{t('paymentMethods')}</p>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {/* Stripe */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" className="h-6">
            <path fill="#635BFF" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"/>
          </svg>
        </motion.div>

        {/* PayPal */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <svg viewBox="0 0 100 32" xmlns="http://www.w3.org/2000/svg" className="h-6">
            <path fill="#003087" d="M12 4.917h-8.87a.933.933 0 0 0-.92.788L.004 25.805a.56.56 0 0 0 .554.648h4.03a.933.933 0 0 0 .92-.788l.626-3.97a.933.933 0 0 1 .92-.788h2.123c4.414 0 6.963-2.136 7.63-6.37.3-1.855.013-3.312-.853-4.33-.952-1.118-2.644-1.71-4.891-1.71zm.787 6.254c-.373 2.454-2.248 2.454-4.062 2.454h-1.03l.724-4.583a.56.56 0 0 1 .552-.473h.464c1.213 0 2.36 0 2.95.69.353.415.447 1.029.402 1.912z"/>
            <path fill="#0070ba" d="M35.04 11.079h-4.038a.56.56 0 0 0-.552.473l-.142.899-.225-.325c-.698-1.013-2.253-1.351-3.806-1.351-3.559 0-6.596 2.696-7.185 6.476-.308 1.887.132 3.692 1.208 4.95.987 1.155 2.4 1.634 4.08 1.634 2.885 0 4.486-1.85 4.486-1.85l-.143.898a.56.56 0 0 0 .553.647h3.637a.933.933 0 0 0 .92-.788l1.734-10.98a.56.56 0 0 0-.553-.648zm-5.638 6.219c-.313 1.855-1.802 3.1-3.708 3.1-.952 0-1.714-.305-2.202-.883-.486-.574-.668-1.39-.514-2.3.298-1.84 1.81-3.123 3.68-3.123.93 0 1.686.309 2.185.893.502.588.696 1.413.559 2.313z"/>
            <path fill="#003087" d="M55.923 11.079h-4.053a.933.933 0 0 0-.773.412l-4.463 6.556-1.891-6.296a.933.933 0 0 0-.893-.672h-3.982a.56.56 0 0 0-.53.743l3.564 10.461-3.35 4.728a.56.56 0 0 0 .457.884h4.05a.933.933 0 0 0 .769-.405l10.762-15.526a.56.56 0 0 0-.46-.885z"/>
            <path fill="#0070ba" d="M67.764 4.917h-8.87a.933.933 0 0 0-.92.788l-2.207 14.001a.56.56 0 0 0 .553.648h4.03a.933.933 0 0 0 .92-.788l.627-3.97a.933.933 0 0 1 .92-.788h2.122c4.414 0 6.963-2.136 7.63-6.37.3-1.855.013-3.312-.853-4.33-.952-1.118-2.644-1.71-4.891-1.71zm.787 6.254c-.373 2.454-2.248 2.454-4.062 2.454h-1.03l.724-4.583a.56.56 0 0 1 .552-.473h.464c1.213 0 2.36 0 2.95.69.353.415.447 1.029.402 1.912z"/>
            <path fill="#003087" d="M90.805 11.079h-4.038a.56.56 0 0 0-.552.473l-.142.899-.225-.325c-.698-1.013-2.253-1.351-3.806-1.351-3.559 0-6.596 2.696-7.185 6.476-.308 1.887.132 3.692 1.208 4.95.987 1.155 2.4 1.634 4.08 1.634 2.885 0 4.486-1.85 4.486-1.85l-.143.898a.56.56 0 0 0 .553.647h3.637a.933.933 0 0 0 .92-.788l1.734-10.98a.56.56 0 0 0-.553-.648zm-5.638 6.219c-.313 1.855-1.802 3.1-3.708 3.1-.952 0-1.714-.305-2.202-.883-.486-.574-.668-1.39-.514-2.3.298-1.84 1.81-3.123 3.68-3.123.93 0 1.686.309 2.185.893.502.588.696 1.413.559 2.313z"/>
            <path fill="#0070ba" d="M95.088 5.092l-2.24 14.23a.56.56 0 0 0 .554.647h3.473a.933.933 0 0 0 .92-.788l2.207-14.001a.56.56 0 0 0-.553-.648h-3.808a.56.56 0 0 0-.553.56z"/>
          </svg>
        </motion.div>

        {/* Visa */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <svg viewBox="0 0 50 16" xmlns="http://www.w3.org/2000/svg" className="h-5">
            <path fill="#1434CB" d="M18.26 7.278l-2.545 6.225h-2.88l-1.255-4.866c-.076-.296-.142-.405-.373-.53-.378-.204-.999-.395-1.546-.514l.037-.175h2.667c.34 0 .645.227.723.62l.66 3.51 1.63-4.13h2.882zm4.295 4.184c.012-1.642-2.27-1.733-2.254-2.466.005-.223.217-.46.681-.52.23-.03.865-.053 1.584.278l.282-1.318a4.32 4.32 0 0 0-1.502-.275c-2.713 0-4.623 1.443-4.637 3.51-.015 1.527 1.364 2.38 2.405 2.888 1.07.52 1.43.854 1.426 1.319-.007.711-.853 1.027-1.641 1.04-.138 0-1.495-.033-1.99-.36l-.29 1.355c.454.208 1.292.39 2.16.398 2.885 0 4.771-1.425 4.776-3.632zm6.636 2.041h2.536l-2.213-6.225h-2.342c-.3 0-.552.174-.664.442l-3.338 5.783h2.883l.573-1.587h3.52l.333 1.587zm-3.059-3.763l1.442 3.97h-2.282l1.116-3.085.724-1.885zm-7.396-2.462l-2.27 6.225h-2.746l2.267-6.225h2.749z"/>
          </svg>
        </motion.div>

        {/* Mastercard */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
        >
          <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" className="h-6">
            <circle cx="15" cy="16" r="12" fill="#EB001B" opacity="0.9"/>
            <circle cx="33" cy="16" r="12" fill="#F79E1B" opacity="0.9"/>
            <path d="M24 8c-2.21 2.078-3.6 5.02-3.6 8.32 0 3.3 1.39 6.242 3.6 8.32 2.21-2.078 3.6-5.02 3.6-8.32 0-3.3-1.39-6.242-3.6-8.32z" fill="#FF5F00"/>
          </svg>
        </motion.div>

        {/* Amex */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#006FCF] px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <svg viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg" className="h-5">
            <path fill="#FFFFFF" d="M4.92 10.14l.84-2.02.84 2.02h-1.68zm13.42-2.7h-3.36v1.18h3.3v1.54h-3.3v1.22h3.36v1.61h-5.28V5.83h5.28v1.61zM8.28 5.83L5.7 12h2.1l.44-1.08h2.52L11.2 12h2.18L10.8 5.83H8.28zm5.94 0v6.16h1.92V5.83h-1.92zm13.44 0l-2.04 3.36-2.04-3.36h-2.34V12h1.9V8.06L25.48 12h1.26l2.34-3.94V12h1.92V5.83h-2.34zm-9.24 0L16.38 12h2.1l.44-1.08h2.52L21.88 12H24l-2.58-6.16h-2.52zm-6.68 8.14l.84-2.02.84 2.02h-1.68zm8.28-8.14h-3.36v1.18h3.3v1.54h-3.3v1.22h3.36v1.61h-5.28V5.83h5.28v1.61z"/>
          </svg>
        </motion.div>
      </div>
    </div>

    {/* User Reviews */}
    <div className="flex justify-center items-center space-x-4">
      <div className="flex -space-x-2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00CED1] to-[#40E0D0] border-2 border-white"></div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] border-2 border-white"></div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#003399] to-[#0066CC] border-2 border-white"></div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] border-2 border-white"></div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#A8E6CF] to-[#DCEDC1] border-2 border-white"></div>
      </div>
      <div className="flex items-center space-x-1 text-[#FFD700]">
        <span>★★★★★</span>
      </div>
    </div>
    <p className="text-blue-200 text-sm mt-4">{t('trustedBy')}</p>
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
