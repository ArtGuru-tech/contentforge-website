'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has a saved language preference
    const savedLocale = localStorage.getItem('preferred-locale');

    if (savedLocale && (locales as readonly string[]).includes(savedLocale)) {
      // Use saved preference
      router.push(`/${savedLocale}`);
      return;
    }

    // Detect browser language
    const browserLanguage = navigator.language.toLowerCase();

    // Extract the language code (e.g., 'fr-FR' -> 'fr')
    const browserLang = browserLanguage.split('-')[0];

    // Check if we support this language
    const detectedLocale = (locales as readonly string[]).includes(browserLang) ? browserLang : defaultLocale;

    // Save the detected language
    localStorage.setItem('preferred-locale', detectedLocale);

    // Redirect to the detected or default locale
    router.push(`/${detectedLocale}`);
  }, [router]);

  // Show loading state while detecting/redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#003399]"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
