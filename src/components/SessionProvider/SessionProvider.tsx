"use client";
import { SessionProvider as NextSessionProvider } from "next-auth/react";
import withLogger from "../WithNameLogging/WithNameLogging";
import TSession from "@/types/session";

const SessionProvider = ({
  children,
  session,
}: {
  children: React.ReactNode | React.ReactNode[];
  session: TSession;
}) => {
  return (
    <NextSessionProvider session={session}>{children}</NextSessionProvider>
  );
};

export default withLogger(SessionProvider);
