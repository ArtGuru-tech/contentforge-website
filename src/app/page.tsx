"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en';

    // Check if browser language starts with 'fr'
    const locale = browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en';

    // Redirect to the appropriate locale
    router.replace(`/${locale}`);
  }, [router]);

  // Show nothing while redirecting
  return null;
}
