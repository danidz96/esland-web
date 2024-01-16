import Button from "@/ui/Button";
import HeroContainer from "@/ui/HeroContainer";
import Numbers from "@/ui/Numbers";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "" });

  return {
    title: t("SEO.ARCHIVO_TITLE"),
    description: t("SEO.ARCHIVO_DESCRIPTION"),
  };
}

export default function Archivo() {
  const t = useTranslations("");
  return (
    <>
      <HeroContainer img="/archivo-background.webp">
        <h1 className="lg:text-6xl text-4xl text-center uppercase mb-20 font-tomaso tracking-widest">
          {t("ARCHIVO.HERO_TITLE")}
        </h1>

        <Button
          className="animate-fade-up uppercase"
          url="https://www.youtube.com/watch?v=1YmpPrqKP-g"
        >
          {t("ARCHIVO.HERO_BUTTON")}
        </Button>
      </HeroContainer>

      <main className="pb-24">
        {/* <Palmares edicion={edicion} /> */}
        {/* <Gallery i18n={i18n} edicion="1" /> */}
        <Numbers />
      </main>
    </>
  );
}
