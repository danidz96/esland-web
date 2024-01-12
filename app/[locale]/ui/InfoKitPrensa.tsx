import { useTranslations } from "next-intl";
import InfoKitPrensaItem from "@/ui/InfoKitPrensaItem";

export default function InfoKitPrensa() {
  const t = useTranslations("");
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <h2 className="text-6xl font-bold mb-14 mt-4">{t("MEDIA_KIT_TITLE")}</h2>
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
        <InfoKitPrensaItem
          title={t("MEDIA_KIT_SUBTITLE_1")}
          download={t("DOWNLOAD_BUTTON")}
          image="/info-page/logo-y-trofeo.webp"
          link="https://premiosesland.com/ESLAND_MEDIA_KIT_2022.rar"
        />
        <InfoKitPrensaItem
          title={t("MEDIA_KIT_SUBTITLE_2")}
          download={t("DOWNLOAD_BUTTON")}
          image="/info-page/fondos-de-pantalla.webp"
          link="https://premiosesland.com/ESLAND_FONDOS.zip"
        />
        <InfoKitPrensaItem
          title={t("MEDIA_KIT_SUBTITLE_3")}
          download={t("DOWNLOAD_BUTTON")}
          image="/info-page/nota-de-prensa.webp"
          link="https://premiosesland.com/Nota%20Prensa-ESLAND.pdf"
        />
      </div>
    </section>
  );
}
