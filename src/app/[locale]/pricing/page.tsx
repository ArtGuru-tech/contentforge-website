"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/i18n/routing"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import TrustpilotWidget from "@/components/TrustpilotWidget"
import { Check } from "lucide-react"

export default function PricingPage() {
  const t = useTranslations('pricingPage')
  const tNav = useTranslations('nav')
  const tFooter = useTranslations('footer')

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto bg-white border-b border-gray-100">
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
            <img
              src="/logo.svg"
              alt="ContentForge Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#003399] font-bold text-base sm:text-lg">CONTENTFORGE</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('home')}</Link>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('resources')}</a>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('freeResources')}</a>
          <Link href="/pricing" className="text-[#003399] font-semibold transition-colors">{tNav('pricing')}</Link>
          <a href="#" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('blog')}</a>
          <Link href="/contact" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{tNav('contact')}</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <LanguageSwitcher />
          <Link href="/pricing">
            <Button className="bg-[#003399] hover:bg-[#002266] text-white border-0 text-sm sm:text-base px-3 sm:px-4">
              {tNav('subscribe')}
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#003399] to-[#001155] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('headline')}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">{t('subheadline')}</p>
            <p className="text-lg text-blue-200">{t('description')}</p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lite Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 border-gray-200 rounded-2xl shadow-lg h-full hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('liteTitle')}</h2>
                  <p className="text-gray-600 text-lg">{t('liteDesc')}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-[#003399]">$97</span>
                  </div>
                  <p className="text-gray-600 mt-2">{t('oneTime')}</p>
                </div>

                <Button className="w-full bg-[#003399] hover:bg-[#002266] text-white py-6 text-lg font-semibold mb-8">
                  {t('getStarted')}
                </Button>

                <div className="space-y-4">
                  <p className="font-semibold text-gray-900 text-lg mb-4">{t('whatsIncluded')}</p>

                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('liteFeature1')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('liteFeature2')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('liteFeature3')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('liteFeature4')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('liteFeature5')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('liteFeature6')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-2 border-[#FFD700] rounded-2xl shadow-xl h-full relative overflow-hidden bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1]">
              {/* Most Popular Badge */}
              <div className="absolute top-6 right-6 bg-[#003399] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {t('mostPopular')}
              </div>

              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('proTitle')}</h2>
                  <p className="text-gray-700 text-lg">{t('proDesc')}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-[#003399]">$397</span>
                  </div>
                  <p className="text-gray-700 mt-2">{t('oneTime')}</p>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#003399] to-[#0055CC] hover:from-[#002266] hover:to-[#003399] text-white py-6 text-lg font-semibold mb-8 shadow-lg">
                  {t('getStartedPro')}
                </Button>

                <div className="space-y-4">
                  <p className="font-semibold text-gray-900 text-lg mb-4">{t('whatsIncluded')}</p>

                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-semibold">{t('proFeature1')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('proFeature2')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('proFeature3')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('proFeature4')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('proFeature5')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('proFeature6')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('proFeature7')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#003399] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t('proFeature8')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t('comparisonTitle')}</h2>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-gray-900 font-semibold">{t('features')}</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-semibold">
                      <div>{t('liteTitle')}</div>
                      <div className="text-2xl font-bold text-[#003399] mt-2">$97</div>
                    </th>
                    <th className="px-6 py-4 text-center bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1]">
                      <div className="flex items-center justify-center gap-2">
                        {t('proTitle')}
                        <span className="text-xs bg-[#003399] text-white px-2 py-1 rounded-full">{t('popular')}</span>
                      </div>
                      <div className="text-2xl font-bold text-[#003399] mt-2">$397</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-900">{t('comparisonFeature1')}</td>
                    <td className="px-6 py-4 text-center text-gray-700">500+</td>
                    <td className="px-6 py-4 text-center bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1] font-semibold text-gray-900">1,000+</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">{t('comparisonFeature2')}</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-[#003399] mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1]">
                      <Check className="w-6 h-6 text-[#003399] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">{t('comparisonFeature3')}</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-[#003399] mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1]">
                      <Check className="w-6 h-6 text-[#003399] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">{t('comparisonFeature4')}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1]">
                      <Check className="w-6 h-6 text-[#003399] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">{t('comparisonFeature5')}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1]">
                      <Check className="w-6 h-6 text-[#003399] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">{t('comparisonFeature6')}</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-[#003399] mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1]">
                      <Check className="w-6 h-6 text-[#003399] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">{t('comparisonFeature7')}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{t('standardSupport')}</td>
                    <td className="px-6 py-4 text-center bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1] font-semibold text-gray-900">{t('prioritySupport')}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">{t('comparisonFeature8')}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-gradient-to-br from-[#FFFBF0] to-[#FFF8E1]">
                      <Check className="w-6 h-6 text-[#003399] mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-[#003399] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('guarantee')}</h3>
              <p className="text-gray-600 text-sm">{t('guaranteeDesc')}</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#00CED1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('securePayment')}</h3>
              <p className="text-gray-600 text-sm">{t('securePaymentDesc')}</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('instantAccess')}</h3>
              <p className="text-gray-600 text-sm">{t('instantAccessDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 relative">
                  <img
                    src="/logo.svg"
                    alt="ContentForge Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white font-bold text-lg">CONTENTFORGE</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{tFooter('pagesTitle')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-[#FFD700] transition-colors">{tFooter('home')}</Link></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('resources')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('freeResources')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('toolsRepository')}</a></li>
                <li><Link href="/contact" className="hover:text-[#FFD700] transition-colors">{tFooter('contact')}</Link></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('blog')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{tFooter('productsTitle')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('masterLibrary')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('customBookService')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('customDigitalProduct')}</a></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('plrProducts')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-300">{tFooter('legalTitle')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms" className="hover:text-[#FFD700] transition-colors">{tFooter('terms')}</Link></li>
                <li><Link href="/privacy" className="hover:text-[#FFD700] transition-colors">{tFooter('privacy')}</Link></li>
                <li><Link href="/refund" className="hover:text-[#FFD700] transition-colors">{tFooter('refund')}</Link></li>
                <li><Link href="/plr" className="hover:text-[#FFD700] transition-colors">{tFooter('plr')}</Link></li>
                <li><Link href="/earnings-disclaimer" className="hover:text-[#FFD700] transition-colors">Earnings Disclaimer</Link></li>
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{tFooter('partnerTerms')}</a></li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-gray-400 text-xs text-center mb-4 uppercase tracking-wide">{tFooter('paymentMethods')}</p>
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
            <p>{tFooter('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
