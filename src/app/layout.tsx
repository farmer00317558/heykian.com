import type { Metadata } from "next";
import { headers } from "next/headers";
import { Pacifico, Manrope, Syne } from "next/font/google";
import {
  getHtmlLang,
  resolveRequestLocale,
  SITE_NAME,
  SITE_URL,
} from "@/lib/i18n";
import "./globals.css";
import AntdProvider from "@/components/AntdProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
  },
  icons: {
    shortcut: ["/favicon.ico"],
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [
      { url: "/kian-logo.png", type: "image/png", sizes: "1024x1024" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = resolveRequestLocale(requestHeaders.get("x-kian-locale"));

  return (
    <html lang={getHtmlLang(locale)}>
      <body className={`${manrope.variable} ${syne.variable} ${pacifico.variable} antialiased`}>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
