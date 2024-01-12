import { useTranslations } from "next-intl";
import Button from "@/ui/Button";
import Logo from "@/ui/Logo";
import LanguageSelector from "@/ui/LanguageSelector";
import { Link } from "i18n/navigation";

export default function Header() {
  const t = useTranslations("");
  return (
    <header id="header-nav" className="fixed top-0 z-50 w-full px-6 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex flex-grow basis-0">
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

        {/* <!-- Botón de menú para pantallas pequeñas --> */}
        <button
          id="menu-toggle"
          className="flex flex-grow basis-0 justify-end text-2xl md:hidden z-50"
        >
          <span id="menu-icon">☰</span>
        </button>

        <div className="hidden md:flex-grow md:basis-0 justify-end whitespace-nowrap md:flex md:text-base">
          <Button
            className="md:text-sm lg:text-base md:py-2"
            url="https://www.youtube.com/watch?v=O43x26hiolw"
          >
            {t("HEADER_BUTTON")}
          </Button>
        </div>
      </div>

      {/* <!-- Menú de navegación móvil para pantallas pequeñas --> */}
      <nav
        id="mobile-menu"
        className="bg-black/80 backdrop-blur-3xl hidden w-full flex-col items-center text-center text-2xl fixed top-0 left-0 right-0 h-dvh place-content-center"
      >
        <Link className="my-4 hover:underline" href="/info" prefetch={false}>
          {t("HEADER_INFO")}
        </Link>
        <Link className="my-4 hover:underline" href="/archivo" prefetch={false}>
          {t("HEADER_ARCHIVE")}
        </Link>
        <LanguageSelector />
        <Button
          className="my-4 whitespace-nowrap text-center lg:hidden lg:text-base"
          url="https://www.youtube.com/watch?v=O43x26hiolw"
        >
          {t("HEADER_BUTTON")}
        </Button>
      </nav>
    </header>
  );
}
