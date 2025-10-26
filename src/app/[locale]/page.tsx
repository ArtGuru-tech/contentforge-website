"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import TrustpilotWidget from "@/components/TrustpilotWidget"
import { useTranslations } from 'next-intl'
import LanguageSwitcher from "@/components/LanguageSwitcher"
import ProductShowcaseSection from "@/components/ProductShowcaseSection"
import BouncyCardsFeatures from "@/components/BouncyCardsFeatures"
import CardCarousel from "@/components/CardCarousel"
import FreeResourcesWobble from "@/components/FreeResourcesWobble"
import UnlimitedOptionsStickyCards from "@/components/UnlimitedOptionsStickyCards"
import StackedCardTestimonials from "@/components/TestimonialsStacked"
import CustomProductBento from "@/components/CustomProductBento"
import { StaggerTestimonials } from "@/components/StaggerTestimonials"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto bg-white border-b border-gray-100">
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
            <img
              src="/logo.svg"
              alt={t('hero.logoAlt')}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#003399] font-bold text-base sm:text-lg">CONTENTFORGE</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{t('nav.home')}</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{t('nav.resources')}</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{t('nav.freeResources')}</a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-[#003399] transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('nav.pricing')}
          </a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{t('nav.blog')}</a>
          <Link href="/contact" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{t('nav.contact')}</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <LanguageSwitcher />
          <Button
            className="bg-[#003399] hover:bg-[#002266] text-white border-0 text-sm sm:text-base px-3 sm:px-4"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('nav.subscribe')}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003399] to-[#001155] text-white overflow-hidden">
        <BackgroundRippleEffect cellSize={50} />
        <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            {t('hero.headline1')}<br />
            <span className="text-[#FFD700]">{t('hero.headline2')}</span>
          </h1>

          <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
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

      {/* Testimonials Section */}
      <StackedCardTestimonials />

      {/* Custom Digital Product Section */}
      <CustomProductBento />

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

      {/* Footer */}
      <footer className="px-6 py-16 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 relative">
                  <img
                    src="/logo.svg"
                    alt={t('hero.logoAlt')}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white font-bold text-lg">CONTENTFORGE</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{t('footer.pagesTitle')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.home')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.resources')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.freeResources')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.toolsRepository')}</a></li>
                <li><Link href="/contact" className="hover:text-[#FFD700] transition-colors">{t('footer.contact')}</Link></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.blog')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{t('footer.productsTitle')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.masterLibrary')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.customBookService')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.customDigitalProduct')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.plrProducts')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{t('footer.legalTitle')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms" className="hover:text-[#FFD700] transition-colors">{t('footer.terms')}</Link></li>
                <li><Link href="/privacy" className="hover:text-[#FFD700] transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link href="/refund" className="hover:text-[#FFD700] transition-colors">{t('footer.refund')}</Link></li>
                <li><Link href="/plr" className="hover:text-[#FFD700] transition-colors">{t('footer.plr')}</Link></li>
                <li><Link href="/earnings-disclaimer" className="hover:text-[#FFD700] transition-colors">Earnings Disclaimer</Link></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{t('footer.partnerTerms')}</a></li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-gray-400 text-xs text-center mb-4 uppercase tracking-wide">{t('footer.paymentMethods')}</p>
            <div className="flex justify-center items-center gap-4 flex-wrap mb-8">
              {/* Stripe */}
              <div className="bg-white px-4 py-2 rounded shadow-sm">
                <span className="text-[#635BFF] font-bold text-sm">stripe</span>
              </div>

              {/* PayPal */}
              <div className="bg-white px-4 py-2 rounded shadow-sm">
                <span className="text-[#0070BA] font-bold text-sm">Pay</span>
                <span className="text-[#003087] font-bold text-sm">Pal</span>
              </div>

              {/* Visa */}
              <div className="bg-white px-4 py-2 rounded shadow-sm">
                <span className="text-[#1434CB] font-bold text-sm">VISA</span>
              </div>

              {/* Mastercard */}
              <div className="bg-white px-4 py-2 rounded shadow-sm">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-[#EB001B] rounded-full opacity-80"></div>
                  <div className="w-3 h-3 bg-[#FF5F00] rounded-full opacity-80 -ml-1.5"></div>
                  <span className="text-gray-800 font-semibold text-xs ml-1">Mastercard</span>
                </div>
              </div>

              {/* Amex */}
              <div className="bg-[#006FCF] px-4 py-2 rounded shadow-sm">
                <span className="text-white font-bold text-sm">AMEX</span>
              </div>
            </div>

            {/* Trustpilot Widget */}
            <div className="mt-8 flex justify-center">
              <div className="max-w-md w-full">
                <TrustpilotWidget height="52px" theme="dark" />
              </div>
            </div>
          </div>

          {/* Mini Disclaimer */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <p className="text-center text-gray-500 text-xs mb-4">
              Results not typical. Individual outcomes vary. Earnings depend on effort and skill.{' '}
              <Link href="/earnings-disclaimer" className="text-gray-400 hover:text-[#FFD700] underline">
                See full disclaimer
              </Link>.
            </p>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
