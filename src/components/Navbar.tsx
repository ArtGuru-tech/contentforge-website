"use client"

import { useTranslations } from 'next-intl'
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Navbar() {
  const t = useTranslations('nav')
  const tFooter = useTranslations('footer')

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto bg-white border-b border-gray-100">
      <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
          <img
            src="/logo.svg"
            alt="ContentForge Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-[#003399] font-bold text-base sm:text-lg">CONTENTFORGE</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="/#pricing"
          className="text-gray-600 hover:text-[#003399] transition-colors font-medium"
          onClick={(e) => {
            const path = window.location.pathname;
            if (path === '/' || path === '/en' || path === '/fr' || path.match(/^\/[a-z]{2}\/?$/)) {
              e.preventDefault();
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {t('pricing')}
        </a>
        <Link href="/contact" className="text-gray-600 hover:text-[#003399] transition-colors font-medium">{t('contact')}</Link>

        {/* Legal Dropdown */}
        <div className="relative group">
          <button className="text-gray-600 hover:text-[#003399] transition-colors font-medium flex items-center gap-1">
            {t('legal')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <Link href="/terms" className="block px-4 py-3 text-gray-600 hover:text-[#003399] hover:bg-gray-50 transition-colors first:rounded-t-lg">
              {tFooter('terms')}
            </Link>
            <Link href="/privacy" className="block px-4 py-3 text-gray-600 hover:text-[#003399] hover:bg-gray-50 transition-colors">
              {tFooter('privacy')}
            </Link>
            <Link href="/refund" className="block px-4 py-3 text-gray-600 hover:text-[#003399] hover:bg-gray-50 transition-colors">
              {tFooter('refund')}
            </Link>
            <Link href="/plr" className="block px-4 py-3 text-gray-600 hover:text-[#003399] hover:bg-gray-50 transition-colors">
              {tFooter('plr')}
            </Link>
            <Link href="/earnings-disclaimer" className="block px-4 py-3 text-gray-600 hover:text-[#003399] hover:bg-gray-50 transition-colors last:rounded-b-lg">
              Earnings Disclaimer
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <LanguageSwitcher />
        <Button
          variant="outline"
          className="text-[#003399] border-[#003399] hover:bg-[#003399] hover:text-white text-sm sm:text-base px-3 sm:px-4"
          onClick={() => window.location.href = process.env.NEXT_PUBLIC_APP_URL || 'https://app.contentforge.cc/'}
        >
          {t('login')}
        </Button>
        <Button
          className="bg-[#003399] hover:bg-[#002266] text-white border-0 text-sm sm:text-base px-3 sm:px-4"
          onClick={() => {
            const path = window.location.pathname;
            if (path === '/' || path === '/en' || path === '/fr' || path.match(/^\/[a-z]{2}\/?$/)) {
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/#pricing';
            }
          }}
        >
          {t('subscribe')}
        </Button>
      </div>
    </header>
  )
}
