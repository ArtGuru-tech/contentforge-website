"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Use next-intl router which handles locale switching properly
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            locale === loc
              ? 'bg-[#003399] text-white'
              : 'text-gray-600 hover:text-[#003399] hover:bg-gray-100'
          }`}
          aria-label={`Switch to ${loc === 'en' ? 'English' : 'French'}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
