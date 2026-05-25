import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Projetos from "@/components/Projetos";
import Experiencias from "@/components/Experiencias";
import Formacao from "@/components/Formacao";
import Habilidades from "@/components/Habilidades";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Sobre />
        <Projetos />
        <Experiencias />
        <Formacao />
        <Habilidades />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
