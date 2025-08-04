import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Oljebra Group - Transform Your Business with Smart Technology",
  description:
    "Oljebra Group builds cutting-edge technology solutions that streamline business processes, increase efficiency, and drive sustainable growth. Expert process automation, digital transformation, and custom software development.",
  keywords:
    "business process optimization, digital transformation, process automation, custom software development, system integration, business intelligence",
  authors: [{ name: "Oljebra Group" }],
  openGraph: {
    title: "Oljebra Group - Transform Your Business with Smart Technology",
    description: "Expert technology solutions for business process optimization and digital transformation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oljebra Group - Transform Your Business with Smart Technology",
    description: "Expert technology solutions for business process optimization and digital transformation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
