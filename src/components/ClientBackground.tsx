"use client";

import dynamic from "next/dynamic";

// Carregamento dinâmico para evitar hidratar o Canvas no Servidor
const Background3D = dynamic(() => import("@/components/Background3D"), { ssr: false });

export default function ClientBackground() {
  return <Background3D />;
}
