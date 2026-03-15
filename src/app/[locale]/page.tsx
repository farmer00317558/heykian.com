import { notFound } from "next/navigation";
import Home from "@/components/Home";
import {
  createHomeMetadata,
  isNonDefaultLocale,
  NON_DEFAULT_LOCALES,
} from "@/lib/i18n";
import { getLatestDownloads } from "@/lib/releases";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isNonDefaultLocale(locale)) {
    return {};
  }

  return createHomeMetadata(locale);
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isNonDefaultLocale(locale)) {
    notFound();
  }

  const downloads = await getLatestDownloads();

  return <Home locale={locale} downloads={downloads} />;
}
