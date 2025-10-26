"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/i18n/routing"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TrustpilotWidget from "@/components/TrustpilotWidget"
import { Check } from "lucide-react"

export default function PricingPage() {
  const t = useTranslations('pricingPage')

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

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

      <Footer />
    </div>
  )
}
