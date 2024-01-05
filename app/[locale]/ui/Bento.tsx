import BentoItem from "@/ui/BentoItem";
import { useTranslations } from "next-intl";

export default function Bento() {
  const t = useTranslations("");
  return (
    <section
      className={`
    w-full max-w-[1400px]
    grid lg:grid-cols-10 auto-rows-[30rem] gap-4
    mx-auto p-6 md:p-12 lg:p-20
  `}
    >
      <BentoItem
        className="col-span-10 lg:col-span-4"
        title={t("BENTO_TITLE_1")}
        image={"mountain"}
      >
        <p className="max-w-xl text-base md:text-lg">
          {t.rich("BENTO_CONTENT_1")}
        </p>
      </BentoItem>
      <BentoItem
        className="col-span-10 lg:col-span-6"
        title={t("BENTO_TITLE_2")}
        subtitle={t("BENTO_SUBTITLE_2")}
        image={"pistas"}
      >
        <p slot="content" className="max-w-xl text-base md:text-lg">
          {t.rich("BENTO_CONTENT_2")}
        </p>
      </BentoItem>
      <BentoItem
        className="col-span-10 lg:col-span-6"
        title={t("BENTO_TITLE_3")}
        subtitle={t("BENTO_SUBTITLE_3")}
        image={"grefg"}
      >
        <p className="max-w-xl text-base md:text-lg">
          {t.rich("BENTO_CONTENT_3")}
        </p>
      </BentoItem>
      <BentoItem
        className="col-span-10 lg:col-span-4"
        title={t("BENTO_TITLE_4")}
        image={"laptop"}
      >
        <p className="max-w-xl text-base md:text-lg">
          {t.rich("BENTO_CONTENT_4")}
        </p>
      </BentoItem>
    </section>
  );
}
