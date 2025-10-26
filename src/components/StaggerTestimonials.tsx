"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 600;

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-neutral-200"
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      {testimonials.map((t, idx) => {
        let position = 0;

        if (testimonials.length % 2) {
          position = idx - (testimonials.length + 1) / 2;
        } else {
          position = idx - testimonials.length / 2;
        }

        return (
          <TestimonialCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
        <button
          onClick={() => handleMove(-1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

interface TestimonialProps {
  position: number;
  testimonial: TestimonialType;
  handleMove: (position: number) => void;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      absolute left-1/2 top-1/2 cursor-pointer border-black p-8 text-black transition-colors duration-500 ${
        isActive ? "z-10 bg-indigo-600" : "z-0 bg-white"
      }
      `}
      style={{
        borderWidth: BORDER_SIZE,
        clipPath: `polygon(${CORNER_CLIP}px 0%, calc(100% - ${CORNER_CLIP}px) 0%, 100% ${CORNER_CLIP}px, 100% 100%, calc(100% - ${CORNER_CLIP}px) 100%, ${CORNER_CLIP}px 100%, 0 100%, 0 0)`,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
        boxShadow: isActive ? "0px 8px 0px 4px black" : "0px 0px 0px 0px black",
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-black object-cover"
        style={{
          right: -BORDER_SIZE,
          top: CORNER_CLIP - BORDER_SIZE,
          width: CORNER_LINE_LEN,
          height: BORDER_SIZE,
        }}
      />
      <div
        className="mb-4 h-14 w-12 flex items-center justify-center text-2xl font-bold text-white"
        style={{
          backgroundColor: testimonial.avatarColor,
          boxShadow: "3px 3px 0px white",
        }}
      >
        {testimonial.initials}
      </div>
      <h3
        className={`text-base sm:text-xl ${
          isActive ? "text-white" : "text-black"
        }`}
      >
        &quot;{testimonial.testimonial}&quot;
      </h3>
      <p
        className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
          isActive ? "text-indigo-200" : "text-neutral-700"
        }`}
      >
        - {testimonial.by}
      </p>
    </motion.div>
  );
};

type TestimonialType = {
  tempId: number;
  testimonial: string;
  by: string;
  initials: string;
  avatarColor: string;
};

const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    tempId: 0,
    testimonial:
      "ContentForge has completely transformed my business. I can launch new products 10x faster now!",
    by: "Alex K., Digital Entrepreneur",
    initials: "AK",
    avatarColor: "#003399",
  },
  {
    tempId: 1,
    testimonial:
      "The quality of the PLR content is outstanding. My customers love the value I'm providing.",
    by: "Sarah M., Course Creator",
    initials: "SM",
    avatarColor: "#6366f1",
  },
  {
    tempId: 2,
    testimonial:
      "I was skeptical at first, but ContentForge delivers exactly what it promises. Worth every penny!",
    by: "Michael T., Online Marketer",
    initials: "MT",
    avatarColor: "#8b5cf6",
  },
  {
    tempId: 3,
    testimonial:
      "The ready-to-use ebooks and templates have saved me hundreds of hours. This is a game-changer!",
    by: "Jennifer L., Blogger",
    initials: "JL",
    avatarColor: "#ec4899",
  },
  {
    tempId: 4,
    testimonial: "If I could give 10 stars, I would. Simply the best digital product library out there.",
    by: "David R., Affiliate Marketer",
    initials: "DR",
    avatarColor: "#f59e0b",
  },
  {
    tempId: 5,
    testimonial:
      "Finally found a reliable source for high-quality PLR content. My income has doubled since joining!",
    by: "Lisa W., Content Creator",
    initials: "LW",
    avatarColor: "#10b981",
  },
  {
    tempId: 6,
    testimonial:
      "The variety of products is incredible. I always find exactly what I need for my audience.",
    by: "Robert P., Digital Product Seller",
    initials: "RP",
    avatarColor: "#06b6d4",
  },
  {
    tempId: 7,
    testimonial:
      "ContentForge's products are professional and ready to sell. The ROI is absolutely massive for me.",
    by: "Emily S., Online Business Owner",
    initials: "ES",
    avatarColor: "#3b82f6",
  },
  {
    tempId: 8,
    testimonial: "Best investment I've made in my business. Period.",
    by: "James H., Entrepreneur",
    initials: "JH",
    avatarColor: "#a855f7",
  },
  {
    tempId: 9,
    testimonial: "I joined 3 years ago and have never looked back. ContentForge is my secret weapon!",
    by: "Maria G., Digital Marketer",
    initials: "MG",
    avatarColor: "#ef4444",
  },
  {
    tempId: 10,
    testimonial:
      "I've been searching for quality PLR products for years. So glad I finally found ContentForge!",
    by: "Chris B., Info Product Creator",
    initials: "CB",
    avatarColor: "#14b8a6",
  },
  {
    tempId: 11,
    testimonial:
      "The content is so well-designed and easy to customize. My team got up to speed in minutes.",
    by: "Amanda T., Marketing Director",
    initials: "AT",
    avatarColor: "#f97316",
  },
];

export default StaggerTestimonials;
