import fr from './fr.json';
import en from './en.json';

export const locales = ['fr', 'en'] as const;
export const defaultLocale = 'fr' as const;

export type Locale = (typeof locales)[number];
export type Translations = typeof fr;

const translations: Record<Locale, Translations> = { fr, en };

export function t(locale: Locale): Translations {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const segment = url.pathname.split('/')[1];
  if (locales.includes(segment as Locale)) return segment as Locale;
  return defaultLocale;
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
