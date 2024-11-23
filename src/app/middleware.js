import { NextResponse } from "next/server";

export function middleware(request) {
  const isAuthenticated = request.cookies.get("authenticated");

  if (!isAuthenticated && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/login"],
};
