import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Annual Leadership Meeting 2026/2027 | Sekolah Dian Harapan",
  description: "Annual Leadership Meeting Information Center",
  keywords: ["Annual Leadership Meeting", "SDH", "True Knowledge", "Faith in Christ", "Godly Character", "Sekolah Diah Harapan"],
  authors: [{ name: "Edutech SDH SLH" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#F8F8F6] text-[#15396B] font-sans overflow-x-hidden selection:bg-[#F3D54E]/30 selection:text-[#0B2C67]">
        {children}
      </body>
    </html>
  );
}
