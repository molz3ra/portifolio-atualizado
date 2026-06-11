import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Mol | Portfólio",
  description: "Portfólio de Lucas Mol - Desenvolvedor Web",
};

import ClientBackground from "@/components/ClientBackground";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={cn("antialiased", "scroll-smooth", inter.variable, "font-sans", geist.variable)}>
      <body className="bg-black text-[#e3e2e2] font-sans min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {/* Mantém o Canvas 3D vivo durante navegações de página (Não será desmontado) */}
          <ClientBackground />
          
          {/* Mantém o Header no nível raiz da aplicação */}
          <Header />
          
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
