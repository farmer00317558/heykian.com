import type { LatestDownloads } from "@/lib/releases";
import {
  createHomeStructuredData,
  type SupportedLocale,
} from "@/lib/i18n";
import DocumentLanguage from "./DocumentLanguage";
import Hero from "./Hero";

type HomeProps = {
  locale: SupportedLocale;
  downloads: LatestDownloads;
};

export default function Home({ locale, downloads }: HomeProps) {
  const structuredData = createHomeStructuredData(locale, downloads.version);

  return (
    <>
      <DocumentLanguage locale={locale} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative h-svh overflow-clip">
        <Hero locale={locale} downloads={downloads} />
      </main>
    </>
  );
}
