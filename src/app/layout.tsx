import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Mol | Portfólio",
  description: "Portfólio de Lucas Mol - Desenvolvedor Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="bg-black text-[#e3e2e2] font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
