"use client";

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-2">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            locale === loc
              ? 'bg-[#003399] text-white'
              : 'text-gray-600 hover:text-[#003399] hover:bg-gray-100'
          }`}
          aria-label={`Switch to ${loc === 'en' ? 'English' : 'French'}`}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
