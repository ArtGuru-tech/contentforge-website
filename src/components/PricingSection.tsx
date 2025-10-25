"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PricingConfig {
  lite_price: number
  pro_price: number
  lite_renewal: boolean
  pro_renewal: boolean
  show_badge: boolean
  badge_text: string
  urgency_text: string
  cta_text: string
}

export default function PricingSection() {
  const [config, setConfig] = useState<PricingConfig | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/pricing-config.json')
      .then(res => res.json())
      .then(data => {
        setConfig(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load pricing config:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section id="pricing" className="px-6 py-20 bg-gradient-to-br from-[#003399] to-[#001155] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-200">Loading pricing...</p>
        </div>
      </section>
    )
  }

  if (!config) {
    return null
  }

  return (
    <section id="pricing" className="px-6 py-20 bg-gradient-to-br from-[#003399] to-[#001155] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {config.show_badge && (
            <div className="bg-[#FFD700] text-[#003399] px-4 py-2 rounded-full inline-block text-sm mb-8 font-semibold">
              {config.badge_text}
            </div>
          )}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Plan
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-4">
            Get instant access to 1000+ done-for-you digital products
          </p>
          {config.urgency_text && (
            <p className="text-[#FFD700] text-sm font-semibold">
              {config.urgency_text}
            </p>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lite Plan */}
          <Card className="bg-white text-gray-900 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Lite Plan</h3>
                <p className="text-gray-600 mb-6">Perfect for getting started</p>

                <div className="mb-6">
                  <div className="text-5xl font-bold text-[#003399] mb-2">
                    ${config.lite_price}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {config.lite_renewal ? 'per month' : 'one-time payment'}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Access to 500+ digital products</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Ebooks, templates, and guides</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Private Label Rights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Lifetime access</p>
                </div>
              </div>

              <Button className="w-full bg-[#003399] hover:bg-[#002266] text-white py-6 text-lg font-semibold">
                {config.cta_text}
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-gray-900 border-0 shadow-xl relative overflow-hidden">
            {/* Most Popular Badge */}
            <div className="absolute top-4 right-4 bg-[#003399] text-white px-3 py-1 rounded-full text-xs font-semibold">
              MOST POPULAR
            </div>

            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                <p className="text-gray-800 mb-6">Everything you need to succeed</p>

                <div className="mb-6">
                  <div className="text-5xl font-bold text-[#003399] mb-2">
                    ${config.pro_price}
                  </div>
                  <p className="text-gray-800 text-sm">
                    {config.pro_renewal ? 'per month' : 'one-time payment'}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-900 font-semibold">Everything in Lite, plus:</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-900">Access to 1000+ digital products</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-900">Video & audio courses</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-900">Premium templates & resources</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-900">Monthly new content additions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#003399] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-900">Priority support</p>
                </div>
              </div>

              <Button className="w-full bg-[#003399] hover:bg-[#002266] text-white py-6 text-lg font-semibold">
                {config.cta_text}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust Elements */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                <span className="text-[#003399] font-bold text-lg">✓</span>
              </div>
              <span className="text-white font-semibold">14-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                <span className="text-[#003399] font-bold text-lg">🔒</span>
              </div>
              <span className="text-white font-semibold">Secure Payment</span>
            </div>
          </div>

          {/* Payment Processors */}
          <div className="mb-8">
            <p className="text-blue-200 text-xs mb-4 uppercase tracking-wide">Secure Payment Methods</p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {/* Stripe */}
              <div className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-[#635BFF] font-bold text-xl">stripe</span>
              </div>

              {/* PayPal */}
              <div className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-[#0070BA] font-bold text-xl">Pay</span>
                <span className="text-[#003087] font-bold text-xl">Pal</span>
              </div>

              {/* Visa */}
              <div className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-[#1434CB] font-bold text-xl">VISA</span>
              </div>

              {/* Mastercard */}
              <div className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-[#EB001B] rounded-full opacity-80"></div>
                  <div className="w-4 h-4 bg-[#FF5F00] rounded-full opacity-80 -ml-2"></div>
                  <span className="text-gray-800 font-semibold text-sm ml-1">Mastercard</span>
                </div>
              </div>

              {/* Amex */}
              <div className="bg-[#006FCF] px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">AMEX</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4">
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
          <p className="text-blue-200 text-sm mt-4">Trusted by early adopters</p>
        </div>
      </div>
    </section>
  )
}
