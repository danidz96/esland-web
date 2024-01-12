import { useTranslations } from "next-intl";
import HeroContainer from "@/ui/HeroContainer";
import InfoKitPrensa from "@/ui/InfoKitPrensa";
import Image from "next/image";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "" });

  return {
    title: t("SEO.INFO_TITLE"),
    description: t("SEO.INFO_DESCRIPTION"),
  };
}

export default function Info() {
  const t = useTranslations("");
  return (
    <>
      <HeroContainer img="/info-background.webp">
        <h1 className="lg:text-6xl text-5xl text-center uppercase font-tomaso tracking tracking-widest">
          {t("INFO_TITLE")}
        </h1>
      </HeroContainer>
      <main className="pb-24">
        <section className="w-full max-w-[1400px] mx-auto my-24 gap-10 text-pretty px-6 text-left text-xl sm:px-20 flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
          <div className="md:w-1/2 space-y-4">
            <h1 className="mx-auto mb-10 text-balance text-left text-3xl lg:text-5xl font-semibold tracking-wide">
              {t("INFO_TITLE_1")}
            </h1>
            <p>{t("INFO_CONTENT_1_1")}</p>
            <p>{t("INFO_CONTENT_1_2")}</p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <Image
              className="object-cover w-full h-full rounded-md"
              height={500}
              alt="theater image"
              src="/theater.webp"
              style={{
                aspectRatio: "812/556",
                objectFit: "cover",
              }}
              width={500}
            />
          </div>
        </section>

        <section className="w-full max-w-[1400px] mx-auto my-24 gap-10 text-pretty px-6 text-left text-xl sm:px-20 flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
          <div className="mt-6 md:mt-0 md:w-1/2">
            <Image
              className="object-cover w-full h-full rounded-md"
              height={556}
              alt="esland trophies"
              src="/trophies.webp"
              style={{
                aspectRatio: "812/556",
                objectFit: "cover",
              }}
              width={812}
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h1 className="mx-auto mb-10 text-balance text-left text-3xl lg:text-5xl font-semibold tracking-wide">
              {t("INFO_TITLE_2")}
            </h1>
            <p>{t.rich("INFO_CONTENT_2_1")}</p>
            <p>{t.rich("INFO_CONTENT_2_2")}</p>
          </div>
        </section>
        <InfoKitPrensa />
      </main>
    </>
  );
}
