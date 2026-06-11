import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Home");
  return (
    <footer className="py-8 text-center bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <p className="text-[#a0a0a0] text-sm">
          &copy; {new Date().getFullYear()} Lucas Mol. {t('footer_rights')}
        </p>
      </div>
    </footer>
  );
}
