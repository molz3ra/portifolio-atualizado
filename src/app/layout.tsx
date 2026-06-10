import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={cn("antialiased", "scroll-smooth", inter.variable, "font-sans", geist.variable)}>
      <body className="bg-black text-[#e3e2e2] font-sans min-h-screen flex flex-col">
        {/* Mantém o Canvas 3D vivo durante navegações de página (Não será desmontado) */}
        <ClientBackground />
        
        {/* Mantém o Header no nível raiz da aplicação */}
        <Header />
        
        {children}
      </body>
    </html>
  );
}
