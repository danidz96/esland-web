import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "i18n/navigation";

export default createMiddleware({
  defaultLocale: "es",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(es|ca)/:path*"],
};
