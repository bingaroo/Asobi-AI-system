import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asobi-AI Link | Global AI & Bio-Knowledge Archive",
  description: "아소비-AI 링크: 8인조 로보-아이돌 아미봇(Ami-Bots)이 큐레이션하는 글로벌 AI 및 바이오 지식 아카이브 스테이지입니다.",
  keywords: ["AI", "Bioinformatics", "ML", "Ami-Bots", "Knowledge Archive", "Asobi-AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
