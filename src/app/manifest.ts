import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/i18n";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: "Your first agent team.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/favicon.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/kian-logo.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
