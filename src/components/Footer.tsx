"use client"

import { useTranslations } from 'next-intl'
import { Link } from "@/i18n/routing"
import TrustpilotWidget from "@/components/TrustpilotWidget"

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="px-6 py-16 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h4 className="font-semibold mb-4 text-gray-300">{t('pagesTitle')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-[#FFD700] transition-colors">{t('home')}</Link></li>
              <li>
                <a
                  href="/#pricing"
                  className="hover:text-[#FFD700] transition-colors"
                  onClick={(e) => {
                    if (typeof window !== 'undefined') {
                      const path = window.location.pathname;
                      if (path === '/' || path === '/en' || path === '/fr' || path.match(/^\/[a-z]{2}\/?$/)) {
                        e.preventDefault();
                        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  Pricing
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-[#FFD700] transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-300">{t('legalTitle')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/terms" className="hover:text-[#FFD700] transition-colors">{t('terms')}</Link></li>
              <li><Link href="/privacy" className="hover:text-[#FFD700] transition-colors">{t('privacy')}</Link></li>
              <li><Link href="/refund" className="hover:text-[#FFD700] transition-colors">{t('refund')}</Link></li>
              <li><Link href="/plr" className="hover:text-[#FFD700] transition-colors">{t('plr')}</Link></li>
              <li><Link href="/earnings-disclaimer" className="hover:text-[#FFD700] transition-colors">Earnings Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-xs text-center mb-4 uppercase tracking-wide">{t('paymentMethods')}</p>
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
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
