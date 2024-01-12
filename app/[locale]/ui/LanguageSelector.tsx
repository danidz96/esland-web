"use client";
import SpainFlag from "@/ui/flags/Spain";
import AndorraFlag from "@/ui/flags/Andorra";
import ChevronIcon from "@/ui/icons/Chevron";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "i18n/navigation";

export default function LanguageSelector() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const LOCALES: Record<
    string,
    { code: string; name: string; flag: typeof SpainFlag }
  > = {
    ca: {
      code: "ca",
      name: "Català",
      flag: AndorraFlag,
    },
    es: {
      code: "es",
      name: "Español",
      flag: SpainFlag,
    },
  };

  const currentLocaleData = LOCALES[currentLocale];
  const otherLocales = Object.values(LOCALES).filter(
    (locale) => locale.code !== currentLocale
  );

  return (
    <div className="relative inline-block text-left">
      <div className="group text-white rounded-md text-xs font-semibold bg-black/30 hover:bg-black/70 transition-all">
        <button
          type="button"
          className="inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <currentLocaleData.flag />
          {currentLocaleData.name}
          <ChevronIcon />
        </button>
        <ul className="group-hover:block group-hover:animate-fade-down group-hover:animate-duration-200 hidden pt-0.5 absolute w-full">
          {otherLocales.map((locale) => (
            <li className="cursor-pointer" key={locale.code}>
              <a
                className="rounded-md bg-black/30 hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
                onClick={() =>
                  router.replace(pathname, { locale: locale.code })
                }
              >
                <locale.flag />
                {locale.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
