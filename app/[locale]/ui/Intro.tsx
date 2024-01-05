import { useTranslations } from "next-intl";
import Logo from "./Logo";

export default function Intro() {
  const t = useTranslations("");
  return (
    <section className="mx-auto my-24 max-w-[70ch] text-pretty px-6 text-left text-xl sm:px-20">
      <Logo className="m-auto mb-10 w-16 text-white" />
      <h1 className="mx-auto mb-10 text-wrap text-center text-4xl font-semibold tracking-wide">
        {t("INTRO_TITLE")}
        <br />
        {t("INTRO_TITLE_AFTER_BR")}
      </h1>
      <p>{t.rich("INTRO_DESCRIPTION_1")}</p>
      <p>{t.rich("INTRO_DESCRIPTION_2")}</p>
      <p>{t.rich("INTRO_DESCRIPTION_3")}</p>
    </section>
  );
}
