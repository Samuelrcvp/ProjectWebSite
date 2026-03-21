import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "__session";
const PROTECTED_PREFIX = "/controle";
const LOGIN_PATH = "/petten";
const DEFAULT_ADMIN_PATH = "/controle/products";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get(SESSION_COOKIE)?.value;
  const isAuthenticated = Boolean(sessionCookie);

  if (pathname === LOGIN_PATH || pathname === `${LOGIN_PATH}/`) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL(DEFAULT_ADMIN_PATH, request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith(PROTECTED_PREFIX)) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/petten", "/controle/:path*"],
};
