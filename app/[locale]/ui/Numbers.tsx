import React from "react";
import CountUp from "@/ui/CountUp";
// import NumberItem from "@/ui/NumberItem";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
const NumberItem = dynamic(() => import("@/ui/NumberItem"), { ssr: false });

type Props = {};

export default function Numbers({}: Props) {
  const t = useTranslations("");
  return (
    <section className="max-w-6xl mx-auto py-20 px-20">
      <h2 className="text-4xl lg:text-6xl font-tomaso text-center text-balance mb-10 lg:mb-20">
        {t("ARCHIVO.COUNTER_TITLE")}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10">
        <NumberItem title={t("ARCHIVO.COUNTER_VIEWS")}>
          <CountUp initial={0} final={69.9} decimals={1} />M
        </NumberItem>
        <NumberItem title={t("ARCHIVO.COUNTER_NEWS")}>
          <CountUp initial={0} final={227} />
        </NumberItem>
        <NumberItem title={t("ARCHIVO.COUNTER_MEDIA")}>
          <CountUp initial={0} final={3.2} decimals={1} />
          M€
        </NumberItem>
      </div>
    </section>
  );
}
