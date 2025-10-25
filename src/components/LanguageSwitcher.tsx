"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Save the user's language preference
    localStorage.setItem('preferred-locale', newLocale);

    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to the new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
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
