import { useTranslations } from "next-intl";
import Button from "@/ui/Button";
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
      className={`${jura.className}relative h-[80vh] w-full max-w-[100vw] md:aspect-video md:h-full`}
    >
      <div className="absolute left-1/2 right-0 top-14 z-10 m-auto flex -translate-x-1/2 flex-col items-center w-full">
        <section className="animate-fade-up flex justify-center items-center gap-8 flex-col aspect-[343/350] md:aspect-[343/160] 2xl:aspect-[343/260]">
          <h1 className="flex items-center gap-5 text-4xl md:text-6xl lg:gap-20 lg:text-8xl font-tomaso">
            <span>E</span>
            <span>S</span>
            <span>L</span>
            <span className={styles.letterLogo} aria-label="A"></span>
            <span>N</span>
            <span>D</span>
          </h1>
          <p className="text-xl lg:text-2xl text-center text-pretty font-jura">
            {t("VIDEO_SUBTITLE")}
          </p>
        </section>
        <Button
          className="animate-fade-up"
          url="https://www.youtube.com/watch?v=1YmpPrqKP-g"
        >
          {t("VIDEO_BUTTON")}
        </Button>
      </div>

      <video
        className="cp-v h-full w-full animate-fade object-cover object-top animate-duration-1000 animate-ease-in-out"
        src="/video.webm"
        autoPlay
        loop
        muted
      ></video>
      <video
        className="absolute -bottom-48 -z-40 blur-3xl"
        src="/video.webm"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
