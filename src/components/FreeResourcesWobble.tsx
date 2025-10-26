"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export default function FreeResourcesWobble() {
  const t = useTranslations('freeResourcesSection');

  return (
    <section className="px-6 py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('headline')}</h2>
          <p className="text-gray-400 text-lg">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-[#003399] to-[#001155] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {t('masterPlanTitle')}
              </h2>
              <p className="mt-4 text-left text-base/6 text-blue-100">
                {t('masterPlanDesc')}
              </p>
              <Button className="mt-6 bg-[#FFD700] hover:bg-[#E6C200] text-[#003399] px-6 py-2 rounded-full font-semibold">
                {t('masterPlanButton')}
              </Button>
            </div>
            <img
              src="/business-plan.webp"
              width={400}
              height={400}
              alt="Business Plan"
              className="absolute -right-4 lg:-right-[20%] filter -bottom-10 object-contain rounded-2xl opacity-80"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-gray-700 to-gray-800">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {t('toolsTitle')}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-300">
              {t('toolsDesc')}
            </p>
            <Button className="mt-6 bg-[#00CED1] hover:bg-[#00B8B8] text-white px-6 py-2 rounded-full font-semibold">
              {t('toolsButton')}
            </Button>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-[#FFD700] to-[#FFA500] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {t('ideasTitle')}
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-white/90">
                {t('ideasDesc')}
              </p>
              <Button className="mt-6 bg-[#003399] hover:bg-[#002266] text-white px-6 py-2 rounded-full font-semibold">
                {t('ideasButton')}
              </Button>
            </div>
            <img
              src="/ideas.webp"
              width={400}
              height={400}
              alt="Digital Product Ideas"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl opacity-80"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
