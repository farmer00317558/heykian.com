import Hero from "@/components/Hero";
import { getLatestDownloads } from "@/lib/releases";

export default async function Home() {
  const downloads = await getLatestDownloads();

  return (
    <main className="relative min-h-[100svh] overflow-clip">
      <Hero downloads={downloads} />
    </main>
  );
}
