"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import PricingSection from "@/components/PricingSection"
import { useTranslations } from 'next-intl'
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto bg-white border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 relative">
            <img
              src="/logo.svg"
              alt={t('hero.logoAlt')}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#003399] font-bold text-lg">CONTENTFORGE</span>
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

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button
            className="bg-[#003399] hover:bg-[#002266] text-white border-0"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('nav.subscribe')}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center bg-gradient-to-br from-[#003399] to-[#001155] text-white">
        <div className="mb-6">
          <span className="text-blue-200 text-sm">{t('hero.tagline')}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t('hero.headline1')}<br />
          <span className="text-[#FFD700]">{t('hero.headline2')}</span>
        </h1>

        <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-[#003399] px-8 py-3 rounded-full text-lg font-semibold">
            {t('hero.ctaButton')}
          </Button>

          {/* 14-Day Money-Back Guarantee Badge */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-[#FFD700] rounded-full px-6 py-3">
            <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
              <span className="text-[#003399] font-bold text-lg">✓</span>
            </div>
            <span className="text-white font-semibold">{t('hero.guarantee')}</span>
          </div>
        </div>

        {/* Animated Avatars Section */}
        <div className="flex justify-center items-center space-x-4 mb-4">
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
        <p className="text-blue-200 text-sm">{t('hero.trustedBy')}</p>

        {/* Product Showcase */}
        <div className="mt-16 relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white text-gray-900 border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-[#003399] to-[#0066CC] rounded mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">{t('productShowcase.ebook')}</span>
                  </div>
                  <h3 className="text-gray-900 font-semibold">{t('productShowcase.businessGuide')}</h3>
                  <p className="text-gray-600 text-sm">{t('productShowcase.businessGuideDesc')}</p>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900 border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-[#00CED1] to-[#40E0D0] rounded mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">{t('productShowcase.course')}</span>
                  </div>
                  <h3 className="text-gray-900 font-semibold">{t('productShowcase.videoTraining')}</h3>
                  <p className="text-gray-600 text-sm">{t('productShowcase.videoTrainingDesc')}</p>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900 border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">{t('productShowcase.template')}</span>
                  </div>
                  <h3 className="text-gray-900 font-semibold">{t('productShowcase.readyTemplates')}</h3>
                  <p className="text-gray-600 text-sm">{t('productShowcase.readyTemplatesDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto text-center bg-gray-50">
        <p className="text-gray-500 text-sm mb-8 font-medium">{t('trustedBySection.title')}</p>
        <div className="flex justify-center items-center space-x-12 opacity-60">
          <div className="text-gray-600 font-semibold">CPHERE</div>
          <div className="text-gray-600 font-semibold">CEO MasterMind</div>
          <div className="text-gray-600 font-semibold">Local Pulse</div>
          <div className="text-gray-600 font-semibold">DevCo</div>
        </div>
      </section>

      {/* Sell Digital Products Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Button className="bg-[#00CED1] hover:bg-[#00B8B8] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {t('sellDigitalProducts.badge')}
            </Button>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              {t('sellDigitalProducts.headline').split('\n')[0]}<br />
              {t('sellDigitalProducts.headline').split('\n')[1]}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('sellDigitalProducts.description')} <strong className="text-[#003399]">{t('sellDigitalProducts.emphasisText')}</strong>.
            </p>
          </div>

          {/* Product Preview */}
          <div className="bg-gray-900 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-2">{t('sellDigitalProducts.demandedContentTitle')}</h3>
                    <p className="text-gray-400 text-sm">{t('sellDigitalProducts.demandedContentDesc')}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-2">{t('sellDigitalProducts.constantlyUpdatedTitle')}</h3>
                    <p className="text-gray-400 text-sm">{t('sellDigitalProducts.constantlyUpdatedDesc')}</p>
                  </div>
                </div>
              </div>
              <div>
                <Card className="bg-[#003399] text-white p-8 border-0">
                  <h3 className="text-2xl font-bold mb-4">{t('sellDigitalProducts.plrTitle')}</h3>
                  <p className="mb-6">{t('sellDigitalProducts.plrDesc')}</p>
                  <div className="bg-[#002266] rounded-lg p-4">
                    <div className="text-3xl font-bold text-[#FFD700]">📋</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 text-white p-8 border-0">
              <div className="text-4xl font-bold text-[#FFD700] mb-2">{t('sellDigitalProducts.statsDigitalProducts')}</div>
              <h3 className="text-xl font-semibold mb-4">{t('sellDigitalProducts.statsDigitalProductsTitle')}</h3>
              <p className="text-gray-400">{t('sellDigitalProducts.statsDigitalProductsDesc')}</p>
            </Card>
            <Card className="bg-gray-100 p-8 border-0">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{t('sellDigitalProducts.mediaFormatsTitle')}</h3>
              <p className="text-gray-600 mb-4">{t('sellDigitalProducts.mediaFormatsDesc')}</p>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-[#003399]">{t('sellDigitalProducts.premiumQualityTitle')}</h4>
                <p className="text-gray-600 text-sm">{t('sellDigitalProducts.premiumQualityDesc')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Unlimited Options Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-full inline-block text-sm mb-8">
            {t('unlimitedOptions.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            {t('unlimitedOptions.headline').split('\n')[0]}<br />
            {t('unlimitedOptions.headline').split('\n')[1]}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003399] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{t('unlimitedOptions.option1')}</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00CED1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧲</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{t('unlimitedOptions.option2')}</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{t('unlimitedOptions.option3')}</h3>
            </div>
          </div>

          <Button className="bg-[#003399] hover:bg-[#002266] text-white px-8 py-3 rounded-full text-lg font-semibold mt-12">
            {t('unlimitedOptions.ctaButton')}
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                <span className="text-gray-900 text-sm">★</span>
              </div>
              <span className="text-sm text-gray-400">{t('testimonials.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">{t('testimonials.headline')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-[#FFD700] text-2xl mb-2">★</div>
              <div className="text-lg font-semibold">{t('testimonials.trustpilot')}</div>
              <div className="text-[#FFD700]">★★★★★</div>
            </div>
            <div className="text-center">
              <div className="text-[#00CED1] text-2xl mb-2">f</div>
              <div className="text-lg font-semibold">{t('testimonials.facebook')}</div>
              <div className="text-[#FFD700]">★★★★★</div>
            </div>
            <div className="text-center">
              <div className="text-[#003399] text-2xl mb-2">G</div>
              <div className="text-lg font-semibold">{t('testimonials.google')}</div>
              <div className="text-[#FFD700]">★★★★★</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-6 border-0">
              <div className="text-[#FFD700] text-xl mb-4">"</div>
              <p className="text-gray-300 mb-4">{t('testimonials.testimonial1Quote')}</p>
              <p className="text-gray-400 text-sm mb-4">{t('testimonials.testimonial1Description')}</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#003399] rounded-full"></div>
                <div>
                  <div className="font-semibold">{t('testimonials.testimonial1Name')}</div>
                  <div className="text-gray-400 text-sm">{t('testimonials.testimonial1Location')}</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-6 border-0">
              <div className="text-[#FFD700] text-xl mb-4">"</div>
              <p className="text-gray-300 mb-4">{t('testimonials.testimonial2Quote')}</p>
              <p className="text-gray-400 text-sm mb-4">{t('testimonials.testimonial2Description')}</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#00CED1] rounded-full"></div>
                <div>
                  <div className="font-semibold">{t('testimonials.testimonial2Name')}</div>
                  <div className="text-gray-400 text-sm">{t('testimonials.testimonial2Location')}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Digital Product Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-[#003399] to-[#001155] text-white">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white text-gray-900 p-6 border-0">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-600 font-bold">EBOOK MOCKUP</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('customProduct.expertTitle')}</h3>
              <p className="text-gray-600 text-sm">{t('customProduct.expertDesc')}</p>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-6 border-0">
              <h3 className="text-white text-lg font-semibold mb-4">{t('customProduct.designTitle')}</h3>
              <p className="text-gray-400 text-sm mb-6">{t('customProduct.designDesc')}</p>
              <div className="w-full h-32 bg-[#003399] rounded-lg flex items-center justify-center">
                <span className="text-[#FFD700]">3D MOCKUP</span>
              </div>
            </Card>

            <div className="space-y-4">
              <Card className="bg-white text-gray-900 p-6 border-0">
                <h3 className="font-semibold mb-2">{t('customProduct.contentTitle')}</h3>
                <p className="text-gray-600 text-sm">{t('customProduct.contentDesc')}</p>
              </Card>
              <Card className="bg-[#00CED1] text-white p-6 border-0">
                <h3 className="font-semibold mb-2">{t('customProduct.ownershipTitle')}</h3>
                <p className="text-sm">{t('customProduct.ownershipDesc')}</p>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-[#003399] px-8 py-3 rounded-full text-lg font-semibold mb-8">
              {t('customProduct.ctaButton')}
            </Button>
            <Button className="bg-[#00CED1] hover:bg-[#00B8B8] text-white px-6 py-2 rounded-full text-sm font-semibold ml-4">
              {t('customProduct.formatsBadge')}
            </Button>
          </div>
        </div>
      </section>

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

          {/* Ebooks Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-900 text-white px-4 py-2 rounded-full inline-block text-sm mb-6 font-semibold">
                  {t('productCategories.ebooksBadge')}
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">{t('productCategories.ebooksTitle')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('productCategories.ebooksDesc')}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#003399] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('productCategories.ebooksFeature1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#003399] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('productCategories.ebooksFeature2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#003399] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('productCategories.ebooksFeature3')}</span>
                  </div>
                </div>

                <Button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800">
                  {t('productCategories.ebooksButton')}
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-32 bg-gradient-to-br from-[#003399] to-[#0066CC] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">AI FOR PRODUCTIVITY</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#00CED1] to-[#40E0D0] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">FUNNEL STRATEGIES</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">MONEY PSYCHOLOGY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Courses Section */}
          <div className="bg-gray-900 text-white rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-32 bg-gradient-to-br from-[#8A2BE2] to-[#9370DB] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">PODCAST LAUNCH</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#00CED1] to-[#4169E1] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">META ADS</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#FF4500] to-[#FF6347] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">AI FOR PRODUCTIVITY</span>
                </div>
              </div>

              <div>
                <div className="bg-white text-gray-900 px-4 py-2 rounded-full inline-block text-sm mb-6 font-semibold">
                  {t('productCategories.videoBadge')}
                </div>
                <h3 className="text-3xl font-bold mb-6">{t('productCategories.videoTitle')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('productCategories.videoDesc')}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <span className="text-gray-900 text-xs">✓</span>
                    </div>
                    <span className="text-sm">{t('productCategories.videoFeature1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <span className="text-gray-900 text-xs">✓</span>
                    </div>
                    <span className="text-sm">{t('productCategories.videoFeature2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <span className="text-gray-900 text-xs">✓</span>
                    </div>
                    <span className="text-sm">{t('productCategories.videoFeature3')}</span>
                  </div>
                </div>

                <Button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100">
                  {t('productCategories.videoButton')}
                </Button>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-900 text-white px-4 py-2 rounded-full inline-block text-sm mb-6 font-semibold">
                  {t('productCategories.resourcesBadge')}
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">{t('productCategories.resourcesTitle')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('productCategories.resourcesDesc')}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#00CED1] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('productCategories.resourcesFeature1')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#00CED1] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('productCategories.resourcesFeature2')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#00CED1] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('productCategories.resourcesFeature3')}</span>
                  </div>
                </div>

                <Button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800">
                  {t('productCategories.resourcesButton')}
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="w-full h-32 bg-gradient-to-br from-[#FF4500] to-[#FF6347] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">6-FIGURE BUSINESS</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#00CED1] to-[#20B2AA] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">TIME MANAGEMENT</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-[#DC143C] to-[#B22222] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">COLD CALLS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#003399] hover:bg-[#002266] text-white px-8 py-3 rounded-full text-lg font-semibold">
              {t('productCategories.ctaButton')}
            </Button>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="px-6 py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('freeResourcesSection.headline')}</h2>
            <p className="text-gray-400 text-lg">
              {t('freeResourcesSection.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-8 text-center border-0">
              <div className="w-full h-48 bg-[#003399] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white font-bold">BUSINESS PLAN</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('freeResourcesSection.masterPlanTitle')}</h3>
              <p className="text-gray-400 mb-6">
                {t('freeResourcesSection.masterPlanDesc')}
              </p>
              <Button className="bg-[#FFD700] hover:bg-[#E6C200] text-[#003399] px-6 py-2 rounded-full font-semibold">
                {t('freeResourcesSection.masterPlanButton')}
              </Button>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8 text-center border-0">
              <div className="w-full h-48 bg-gray-600 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white font-bold">TOOLS</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('freeResourcesSection.toolsTitle')}</h3>
              <p className="text-gray-400 mb-6">
                {t('freeResourcesSection.toolsDesc')}
              </p>
              <Button className="bg-[#00CED1] hover:bg-[#00B8B8] text-white px-6 py-2 rounded-full font-semibold">
                {t('freeResourcesSection.toolsButton')}
              </Button>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8 text-center border-0">
              <div className="w-full h-48 bg-[#FFD700] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white font-bold">IDEAS</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('freeResourcesSection.ideasTitle')}</h3>
              <p className="text-gray-400 mb-6">
                {t('freeResourcesSection.ideasDesc')}
              </p>
              <Button className="bg-[#003399] hover:bg-[#002266] text-white px-6 py-2 rounded-full font-semibold">
                {t('freeResourcesSection.ideasButton')}
              </Button>
            </Card>
          </div>
        </div>
      </section>

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
                <li><Link href="/plr" className="hover:text-[#FFD700] transition-colors">{t('footer.plr')}</Link></li>
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
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
