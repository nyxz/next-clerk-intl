import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
  localePrefix: "always",
});

const isProtectedRoute = createRouteMatcher(["/:locale/protected(.*)"]);

export default clerkMiddleware((auth, req) => {
  const [, locale] = req.nextUrl.pathname.split("/");
  if (isProtectedRoute(req)) {
    auth().protect({
      unauthenticatedUrl: new URL(`/${locale}/sign-in`, req.url).toString(),
    });
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
