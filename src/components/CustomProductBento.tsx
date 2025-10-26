import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconSparkles,
  IconPalette,
  IconPencil,
  IconCrown,
  IconFileText,
  IconVideo,
  IconTemplate,
} from "@tabler/icons-react";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

export default function CustomProductBento() {
  const t = useTranslations();

  const Skeleton = ({ gradient }: { gradient: string }) => (
    <div className={cn(
      "flex flex-1 w-full h-full min-h-[6rem] rounded-xl",
      gradient
    )}></div>
  );

  const items = [
    {
      title: t('customProduct.expertTitle'),
      description: t('customProduct.expertDesc'),
      header: <Skeleton gradient="bg-gradient-to-br from-blue-200 to-blue-400" />,
      icon: <IconSparkles className="h-4 w-4 text-[#003399]" />,
    },
    {
      title: t('customProduct.designTitle'),
      description: t('customProduct.designDesc'),
      header: <Skeleton gradient="bg-gradient-to-br from-yellow-200 to-yellow-400" />,
      icon: <IconPalette className="h-4 w-4 text-[#003399]" />,
    },
    {
      title: t('customProduct.contentTitle'),
      description: t('customProduct.contentDesc'),
      header: <Skeleton gradient="bg-gradient-to-br from-cyan-200 to-cyan-400" />,
      icon: <IconPencil className="h-4 w-4 text-[#003399]" />,
    },
    {
      title: t('customProduct.ownershipTitle'),
      description: t('customProduct.ownershipDesc'),
      header: <Skeleton gradient="bg-gradient-to-br from-purple-200 to-purple-400" />,
      icon: <IconCrown className="h-4 w-4 text-[#003399]" />,
    },
    {
      title: "Premium Ebooks",
      description: "Professionally written and designed ebooks tailored to your niche",
      header: <Skeleton gradient="bg-gradient-to-br from-green-200 to-green-400" />,
      icon: <IconFileText className="h-4 w-4 text-[#003399]" />,
    },
    {
      title: "Video Courses",
      description: "High-quality video content with professional editing and branding",
      header: <Skeleton gradient="bg-gradient-to-br from-red-200 to-red-400" />,
      icon: <IconVideo className="h-4 w-4 text-[#003399]" />,
    },
    {
      title: "Custom Templates",
      description: "Ready-to-use templates designed specifically for your business",
      header: <Skeleton gradient="bg-gradient-to-br from-indigo-200 to-indigo-400" />,
      icon: <IconTemplate className="h-4 w-4 text-[#003399]" />,
    },
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-[#003399] to-[#001155] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-[#FFD700] text-[#003399] px-4 py-2 rounded-full inline-block text-sm mb-8 font-semibold">
            {t('customProduct.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('customProduct.headline')}<br />
            <span className="text-[#FFD700]">{t('customProduct.headlineEmphasis')}</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            {t('customProduct.description')}
          </p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto mb-12">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>

        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-[#003399] px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold w-full sm:w-auto max-w-md">
            {t('customProduct.ctaButton')}
          </Button>
          <Button className="bg-[#00CED1] hover:bg-[#00B8B8] text-white px-6 py-2 rounded-full text-sm font-semibold w-full sm:w-auto max-w-xs">
            {t('customProduct.formatsBadge')}
          </Button>
        </div>
      </div>
    </section>
  );
}
