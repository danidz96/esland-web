import BentoItem from "@/ui/BentoItem";
import { useTranslations } from "next-intl";
import grefg from "../../../public/grefg.webp";
import pistas from "../../../public/pistas.webp";
import mountain from "../../../public/mountain.webp";
import laptop from "../../../public/laptop.webp";

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
        image={
          <div
            className="transition-scale absolute bottom-0 left-0 top-0
        -z-10 h-full w-full bg-blue-950
        bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: "url('/mountain.webp')" }}
          ></div>
        }
      >
        <p className="max-w-xl text-base md:text-lg">
          {t.rich("BENTO_CONTENT_1")}
        </p>
      </BentoItem>
      <BentoItem
        className="col-span-10 lg:col-span-6"
        title={t("BENTO_TITLE_2")}
        subtitle={t("BENTO_SUBTITLE_2")}
        image={
          <div
            className="transition-scale absolute bottom-0 left-0 top-0
    -z-10 h-full w-full bg-blue-800
    bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: "url('/pistas.webp')" }}
          ></div>
        }
      >
        <p className="max-w-xl text-base md:text-lg">
          {t.rich("BENTO_CONTENT_2")}
        </p>
      </BentoItem>
      <BentoItem
        className="col-span-10 lg:col-span-6"
        title={t("BENTO_TITLE_3")}
        subtitle={t("BENTO_SUBTITLE_3")}
        image={
          <div
            className="transition-scale absolute bottom-0 left-0 top-0
        -z-10 h-full w-full bg-blue-900
        bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: "url('/grefg.webp')" }}
          ></div>
        }
      >
        <p className="max-w-xl text-base md:text-lg">
          {t.rich("BENTO_CONTENT_3")}
        </p>
      </BentoItem>
      <BentoItem
        className="col-span-10 lg:col-span-4"
        title={t("BENTO_TITLE_4")}
        image={
          <div
            className="transition-scale absolute bottom-0 left-0 top-0
        -z-10 h-full w-full bg-blue-950
        bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: "url('/laptop.webp')" }}
          ></div>
        }
      >
        <p className="max-w-xl text-base md:text-lg">
          {t.rich("BENTO_CONTENT_4")}
        </p>
      </BentoItem>
    </section>
  );
}
