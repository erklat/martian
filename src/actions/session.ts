import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { SessionPayload } from "@/actions/definitions";
import { cookies } from "next/headers";

const secretKey = "1245";
const encodedKey = new TextEncoder().encode(secretKey);

type TSessionPayload = {
  expiresAt: Date;
  email: string;
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession({ email }: { email: string }) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const sessionPayload: TSessionPayload = {
    email,
    expiresAt,
  };
  const session = await encrypt(sessionPayload);

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export function deleteSession() {
  cookies().delete("session");
}
