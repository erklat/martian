import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/actions/session";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const session = await decrypt(cookies().get("session")?.value);

  if (!session?.email) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return NextResponse.json({
    ...session,
  });
}
