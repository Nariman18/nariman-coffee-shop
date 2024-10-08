import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Upright, Open_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const cormorant_upright = Cormorant_Upright({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant_upright",
});

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open_sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant_upright.variable} ${open_sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
