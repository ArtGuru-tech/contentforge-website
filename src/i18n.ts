import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale comes from setRequestLocale() during static generation
  // or from the URL during dynamic rendering
  const requested = await requestLocale;
  const locale = requested && locales.includes(requested as Locale)
    ? requested
    : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
