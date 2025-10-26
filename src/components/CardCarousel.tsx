"use client"

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { useTranslations } from 'next-intl';

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const t = useTranslations('heroCarousel');

  const items = useMemo<ItemType[]>(() => [
    {
      id: 1,
      gradient: "from-[#003399] to-[#0066CC]",
      category: t('ebook.category'),
      title: t('ebook.title'),
      description: t('ebook.description'),
    },
    {
      id: 2,
      gradient: "from-[#00CED1] to-[#40E0D0]",
      category: t('videoCourse.category'),
      title: t('videoCourse.title'),
      description: t('videoCourse.description'),
    },
    {
      id: 3,
      gradient: "from-[#FFD700] to-[#FFA500]",
      category: t('template.category'),
      title: t('template.title'),
      description: t('template.description'),
    },
    {
      id: 4,
      gradient: "from-[#8B5CF6] to-[#A78BFA]",
      category: t('workbook.category'),
      title: t('workbook.title'),
      description: t('workbook.description'),
    },
    {
      id: 5,
      gradient: "from-[#EC4899] to-[#F472B6]",
      category: t('aiPrompts.category'),
      title: t('aiPrompts.title'),
      description: t('aiPrompts.description'),
    },
    {
      id: 6,
      gradient: "from-[#10B981] to-[#34D399]",
      category: t('miniCourse.category'),
      title: t('miniCourse.title'),
      description: t('miniCourse.description'),
    },
    {
      id: 7,
      gradient: "from-[#F59E0B] to-[#FBBF24]",
      category: t('checklist.category'),
      title: t('checklist.title'),
      description: t('checklist.description'),
    },
  ], [t]);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-transparent" ref={ref}>
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xl sm:text-2xl font-semibold text-white">
            {t('heading')} <span className="text-blue-300">{t('subheading')}</span>
          </p>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-white/20 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-white/20 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ gradient, category, title, description }: ItemType) => {
  return (
    <div
      className={`relative shrink-0 cursor-pointer rounded-2xl shadow-md transition-all hover:scale-[1.015] hover:shadow-xl bg-gradient-to-br ${gradient}`}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/70 via-black/40 to-black/10 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold uppercase text-[#FFD700]">
            {category}
          </span>
          <p className="my-2 text-3xl font-bold">{title}</p>
        </div>
        <p className="text-sm sm:text-base text-slate-200">{description}</p>
      </div>
    </div>
  );
};

export default CardCarousel;

type ItemType = {
  id: number;
  gradient: string;
  category: string;
  title: string;
  description: string;
};
