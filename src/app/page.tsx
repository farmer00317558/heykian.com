import HomePage from "@/components/Home";
import { createHomeMetadata, DEFAULT_LOCALE } from "@/lib/i18n";
import { getLatestDownloads } from "@/lib/releases";

export const metadata = createHomeMetadata(DEFAULT_LOCALE);

export default async function Home() {
  const downloads = await getLatestDownloads();

  return <HomePage locale={DEFAULT_LOCALE} downloads={downloads} />;
}
