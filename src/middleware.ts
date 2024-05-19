import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/actions/session";
import { cookies } from "next/headers";

// 1. Specify protected and public routes
const protectedRoutes = ["/app"];
const publicRoutes = ["/login", "/signup", "/"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute =
    protectedRoutes.includes(path) || path.startsWith("/post");
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  // 5. Redirect to /login if the user is not authenticated
  console.log(session);
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (path === "/post" && !!session?.userId) {
    return NextResponse.rewrite(new URL("/app", req.url));
  }

  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith("/app")
  ) {
    // 6. Redirect to /dashboard if the user is authenticated
    return NextResponse.redirect(new URL("/app", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
