export default function Footer() {
  return (
    <footer className="py-8 text-center bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <p className="text-[#a0a0a0] text-sm">
          &copy; {new Date().getFullYear()} Lucas Mol. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
