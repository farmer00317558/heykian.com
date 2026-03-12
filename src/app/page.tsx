import Hero from "@/components/Hero";
import { getLatestDownloads } from "@/lib/releases";

export default async function Home() {
  const downloads = await getLatestDownloads();

  return (
    <main className="relative h-svh overflow-clip">
      <Hero downloads={downloads} />
    </main>
  );
}
