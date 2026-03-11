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

export const metadata: Metadata = {
  title: "Kian | 年轻人的第一个智能体团队",
  description: "下载 Kian，进入年轻人的第一个智能体团队。",
  icons: { icon: "/favicon.ico" },
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
