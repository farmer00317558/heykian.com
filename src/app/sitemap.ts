import type { MetadataRoute } from "next";
import {
  DEFAULT_LOCALE,
  getAlternateLanguageUrls,
  getLocaleUrl,
  SUPPORTED_LOCALES,
} from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const alternates = getAlternateLanguageUrls();

  return SUPPORTED_LOCALES.map((locale) => ({
    url: getLocaleUrl(locale),
    lastModified,
    changeFrequency: "weekly",
    priority: locale === DEFAULT_LOCALE ? 1 : 0.8,
    alternates: {
      languages: alternates,
    },
  }));
}
