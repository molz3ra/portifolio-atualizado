import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { cn } from "@/lib/utils";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Lucas Mol — Full Stack Engineer & Creative Technologist",
  description: "Portfólio de Lucas Mol. Engenheiro Full Stack especializado em sistemas web de alta performance, interfaces fluidas e produtos de alta conversão.",
  authors: [{ name: "Lucas Mol", url: "https://github.com/molz3ra" }],
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html 
      lang={locale} 
      className={cn(
        "antialiased scroll-smooth dark",
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body className="bg-[#08080a] text-[#f4f4f5] font-sans min-h-screen flex flex-col selection:bg-amber-500/20 selection:text-amber-300">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
