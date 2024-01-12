"use client";
import { useEffect, useState } from "react";
import MenuIcon from "@/ui/icons/Menu";
import CloseIcon from "@/ui/icons/Close";
import Button from "@/ui/Button";
import { Link } from "i18n/navigation";
import LanguageSelector from "./LanguageSelector";

type Props = {
  headerInfoText: string;
  headerArchiveText: string;
  headerButtonText: string;
};

export default function MobileMenu({
  headerInfoText,
  headerArchiveText,
  headerButtonText,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* <!-- Botón de menú para pantallas pequeñas --> */}
      <button
        id="menu-toggle"
        className="relative flex flex-grow basis-0 justify-end text-2xl md:hidden z-50"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <span id="menu-icon">
          <span className={`${isMenuOpen ? "hidden" : ""}`}>
            <MenuIcon />
          </span>
          <span className={`${isMenuOpen ? "" : "hidden"}`}>
            <CloseIcon />
          </span>
        </span>
      </button>
      {/* <!-- Menú de navegación móvil para pantallas pequeñas --> */}
      <nav
        id="mobile-menu"
        className={`${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } -translate-y-full bg-[#151a36]/90 transition-transform md:hidden w-full flex flex-col items-center text-center text-2xl fixed top-0 left-0 right-0 h-dvh place-content-center`}
      >
        <Link
          className="my-4 hover:underline"
          href="/info"
          prefetch={false}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {headerInfoText}
        </Link>
        <Link
          className="my-4 hover:underline"
          href="/archivo"
          prefetch={false}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {headerArchiveText}
        </Link>
        <Button
          className="my-4 whitespace-nowrap text-center lg:hidden lg:text-base bg-black"
          url="https://drive.google.com/file/d/1D7IvIqMyqAoG58fuk8bc0JvhAmrWBbOK/view"
        >
          {headerButtonText}
        </Button>
        <LanguageSelector />
      </nav>
    </>
  );
}
