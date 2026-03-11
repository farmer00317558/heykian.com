import type { Metadata } from "next";
import { DynaPuff, Manrope, Syne } from "next/font/google";
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

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-dynapuff",
});

const title = "Kian | 年轻人的第一个智能体团队";
const description = "下载 Kian，进入年轻人的第一个智能体团队。年轻人的第一个智能体团队，支持多智能体协作、本地运行、定时任务、长程任务和多渠道通信。";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://heykian.com"),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "256x256" },
    ],
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Kian",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${manrope.variable} ${syne.variable} ${dynaPuff.variable} antialiased`}>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
