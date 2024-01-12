import { useTranslations } from "next-intl";
import Button from "@/ui/Button";
import Logo from "@/ui/Logo";
import styles from "./Video.module.css";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  display: "swap",
});

export default function Video() {
  const t = useTranslations("");

  return (
    <div
      className={`${jura.className} relative h-dvh w-full max-w-[100vw] md:aspect-video md:h-[80vh] xl:h-full`}
    >
      <div className="absolute inset-0 h-full justify-center z-10 m-auto flex flex-col items-center w-full">
        <section className="absolute z-10 animate-fade-up flex justify-center items-center gap-8 flex-col">
          <h1 className="flex items-center gap-5 text-4xl md:text-6xl lg:gap-20 lg:text-8xl font-tomaso">
            <span>E</span>
            <span>S</span>
            <span>L</span>
            <Logo
              className="h-9 w-auto md:h-[3.75rem] lg:h-24 scale-150"
              aria-label="A"
            />
            <span>N</span>
            <span>D</span>
          </h1>

          <p className="subtitle text-xl lg:text-2xl text-center text-wrap font-jura px-4">
            {t("HERO_SUBTITLE")}
          </p>

          <Button
            target="_self"
            className="text-sky-900 animate-fade-up bg-white"
            url="/vota"
          >
            {t("VIDEO_BUTTON")}
          </Button>
        </section>
        <video
          autoPlay
          loop
          muted
          playsInline
          id="main-video"
          preload="metadata"
          className="video cp-v h-full w-full object-cover object-top animate-duration-[2s] animate-ease-in-out"
        >
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <video
        className="video absolute -bottom-48 -z-40 blur-3xl animate-duration-[2s] animate-ease-in-out"
        autoPlay
        loop
        muted
        preload="metadata"
      >
        <source src="/video.webm" type="video/webm" />
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
