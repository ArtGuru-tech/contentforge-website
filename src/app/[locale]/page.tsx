"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import TrustpilotWidget from "@/components/TrustpilotWidget"
import { useTranslations } from 'next-intl'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProductShowcaseSection from "@/components/ProductShowcaseSection"
import BouncyCardsFeatures from "@/components/BouncyCardsFeatures"
import CardCarousel from "@/components/CardCarousel"
import FreeResourcesWobble from "@/components/FreeResourcesWobble"
import UnlimitedOptionsStickyCards from "@/components/UnlimitedOptionsStickyCards"
import { StaggerTestimonials } from "@/components/StaggerTestimonials"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033997a] to-[#0011557a] text-white overflow-hidden">
        <BackgroundRippleEffect cellSize={50} />
        <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            {t('hero.headline1')}<br />
            <span className="text-[#FFD700]">{t('hero.headline2')}</span>
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            {t('hero.description')}
          </p>

          <div className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Button
              className="bg-[#FFD700] hover:bg-[#E6C200] text-[#003399] px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold w-full sm:w-auto max-w-sm"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.ctaButton')}
            </Button>

            {/* Trust Bar */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-white text-xs sm:text-sm md:text-base max-w-2xl">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[#FFD700] font-bold">✓</span>
                <span className="whitespace-nowrap">{t('hero.trustBar1')}</span>
              </div>
              <div className="hidden md:block text-blue-300">|</div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[#FFD700] font-bold">✓</span>
                <span className="whitespace-nowrap">{t('hero.trustBar2')}</span>
              </div>
              <div className="hidden md:block text-blue-300">|</div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[#FFD700] font-bold">✓</span>
                <span className="whitespace-nowrap">{t('hero.trustBar3')}</span>
              </div>
              <div className="hidden md:block text-blue-300">|</div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[#FFD700] font-bold">✓</span>
                <span className="whitespace-nowrap">{t('hero.trustBar4')}</span>
              </div>
            </div>
          </div>

          {/* Product Carousel */}
          <div className="mt-16 relative">
            <CardCarousel />
          </div>
        </div>
      </section>

      {/* Sell Digital Products Section */}
      <BouncyCardsFeatures />

      {/* Unlimited Options Section */}
      <UnlimitedOptionsStickyCards />

      {/* Stagger Testimonials Section */}
      <StaggerTestimonials />

      {/* Product Categories Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-[#003399] text-white px-4 py-2 rounded-full inline-block text-sm mb-8 font-semibold">
              {t('productCategories.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('productCategories.headline').split('\n')[0]}<br />
              {t('productCategories.headline').split('\n')[1]}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('productCategories.description')}
            </p>
          </div>

          {/* Product Showcase with Scroll Animation */}
          <ProductShowcaseSection />

          <div className="text-center mt-12">
            <Button className="bg-[#003399] hover:bg-[#002266] text-white px-8 py-3 rounded-full text-lg font-semibold">
              {t('productCategories.ctaButton')}
            </Button>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <FreeResourcesWobble />

      {/* FAQ Section */}
      <FAQSection />

      {/* Pricing Section */}
      <PricingSection />

      <Footer />
    </div>
  )
}
