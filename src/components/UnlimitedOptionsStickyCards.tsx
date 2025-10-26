"use client"

import { MotionValue, useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { IconType } from "react-icons";
import { FiArrowRight, FiBriefcase, FiGift, FiBookOpen } from "react-icons/fi";
import { useTranslations } from 'next-intl';

export const UnlimitedOptionsStickyCards = () => {
  const t = useTranslations('unlimitedOptions');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cards: CardType[] = [
    {
      id: 1,
      Icon: FiBriefcase,
      title: t('option1'),
      description: "Build a comprehensive product catalog with our ready-to-use digital products. Expand your offerings instantly and provide more value to your customers.",
      ctaClasses: "bg-[#003399]",
      routeTo: "#pricing",
    },
    {
      id: 2,
      Icon: FiGift,
      title: t('option2'),
      description: "Convert visitors into subscribers by offering our high-quality digital products as free lead magnets. Build your email list with valuable content.",
      ctaClasses: "bg-[#00CED1]",
      routeTo: "#pricing",
    },
    {
      id: 3,
      Icon: FiBookOpen,
      title: t('option3'),
      description: "Share knowledge and establish authority in your niche. Use our expertly crafted content to educate and engage your audience effectively.",
      ctaClasses: "bg-[#FFD700]",
      routeTo: "#pricing",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-full inline-block text-sm mb-8">
            {t('badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t('headline').split('\n')[0]}<br />
            {t('headline').split('\n')[1]}
          </h2>
        </div>
      </div>

      <div ref={ref} className="relative">
        {cards.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
            totalCards={cards.length}
          />
        ))}
      </div>
      <div className="h-40 bg-gray-50" />
    </div>
  );
};

interface CardProps {
  position: number;
  card: CardType;
  scrollYProgress: MotionValue;
  totalCards: number;
}

const Card = ({ position, card, scrollYProgress, totalCards }: CardProps) => {
  const scaleFromPct = (position - 1) / totalCards;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === totalCards ? undefined : y,
        background: isOddCard ? "black" : "white",
        color: isOddCard ? "white" : "black",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      <card.Icon className="mb-4 text-4xl" />
      <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
        {card.title}
      </h3>
      <p className="mb-8 max-w-lg text-center text-sm md:text-base">
        {card.description}
      </p>
      <a
        href={card.routeTo}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-white transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          isOddCard
            ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
            : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
        }`}
      >
        <span>Explore Library</span>
        <FiArrowRight />
      </a>
    </motion.div>
  );
};

const CARD_HEIGHT = 500;

type CardType = {
  id: number;
  Icon: IconType;
  title: string;
  description: string;
  ctaClasses: string;
  routeTo: string;
};

export default UnlimitedOptionsStickyCards;
