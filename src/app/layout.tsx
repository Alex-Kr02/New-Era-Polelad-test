import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main style={{ flex: 1, marginTop: "80px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
