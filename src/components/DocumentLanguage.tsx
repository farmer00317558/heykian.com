"use client";

import { useEffect } from "react";
import { getHtmlLang, type SupportedLocale } from "@/lib/i18n";

type DocumentLanguageProps = {
  locale: SupportedLocale;
};

export default function DocumentLanguage({
  locale,
}: DocumentLanguageProps) {
  useEffect(() => {
    document.documentElement.lang = getHtmlLang(locale);
  }, [locale]);

  return null;
}
