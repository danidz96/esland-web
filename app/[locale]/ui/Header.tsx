import { useTranslations } from "next-intl";
import Logo from "@/ui/Logo";
import LanguageSelector from "@/ui/LanguageSelector";
import { Link } from "i18n/navigation";
import MobileMenu from "@/ui/MobileMenu";
import Button from "@/ui/Button";

export default function Header() {
  const t = useTranslations("");

  return (
    <header id="header-nav" className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex flex-grow basis-0 z-50">
          <Link href="/">
            <Logo className="h-auto w-10" />
          </Link>
        </div>

        {/* <!-- Menú de navegación para pantallas grandes --> */}
        <nav className="hidden md:flex flex-grow basis-0 w-full gap-x-6 text-lg md:justify-center font-medium">
          <Link className="hover:underline" href="/info" prefetch={false}>
            {t("HEADER_INFO")}
          </Link>
          <Link className="hover:underline" href="/archivo" prefetch={false}>
            {t("HEADER_ARCHIVE")}
          </Link>
          <LanguageSelector />
        </nav>

        <div className="hidden md:flex-grow md:basis-0 justify-end whitespace-nowrap md:flex md:text-base">
          <Button
            className="md:text-sm lg:text-base md:py-2"
            url="https://drive.google.com/file/d/1D7IvIqMyqAoG58fuk8bc0JvhAmrWBbOK/view"
          >
            {t("HEADER_BUTTON")}
          </Button>
        </div>

        <MobileMenu
          headerInfoText={t("HEADER_INFO")}
          headerArchiveText={t("HEADER_ARCHIVE")}
          headerButtonText={t("HEADER_BUTTON")}
        />
      </div>
    </header>
  );
}
