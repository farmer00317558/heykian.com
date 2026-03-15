import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  isNonDefaultLocale,
} from "./src/lib/i18n";

export function middleware(request: NextRequest) {
  const [segment] = request.nextUrl.pathname.split("/").filter(Boolean);
  const locale = segment && isNonDefaultLocale(segment) ? segment : DEFAULT_LOCALE;
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-kian-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
