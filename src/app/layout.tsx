import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "New Era Polelad | Exotic Pole Dancing Academy",
  description: "Experience the art of exotic pole dancing at New Era Polelad. Premium classes, professional instructors, and an empowering community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
        <body className={inter.className}>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>

          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
