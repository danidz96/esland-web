import { useTranslations } from "next-intl";
import YtPlayer from "@/ui/YtPlayer";

export default function PreFooter() {
  const t = useTranslations("");

  return (
    <section className="mx-auto w-full max-w-[1400px] p-6 sm:p-20">
      <h3 className="mx-auto mb-10 text-balance text-center text-xl font-semibold uppercase tracking-wide md:text-4xl">
        {t("PREFOOTER_VIDEO_TITLE")}
      </h3>

      <YtPlayer />
    </section>
  );
}
