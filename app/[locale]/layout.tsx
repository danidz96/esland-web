import type { Metadata } from "next";
import { Jura, Onest } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import { getTranslations } from "next-intl/server";
import { Locale } from "node_modules/next/dist/compiled/@vercel/og/satori";

export async function generateMetadata({
  params: { locale },
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "" });

  return {
    title: t("SEO_TITLE"),
    description: t("SEO_DESCRIPTION"),
  };
}

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

const tomaso = localFont({
  src: [
    {
      path: "../../public/fonts/tomaso.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-tomaso",
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html className={`${onest.variable} ${jura.variable} ${tomaso.variable}`}>
      <head lang={locale}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="nofollow, noindex" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
