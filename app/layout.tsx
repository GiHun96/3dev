
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "강기훈 포트폴리오",
  description: "강기훈 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${Pretendard.className}`}>{children}</body>
    </html>
  );
}