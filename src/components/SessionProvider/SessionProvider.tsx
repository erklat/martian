"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  SessionProvider as NextSessionProvider,
  useSession,
} from "next-auth/react";
import withLogger from "../WithNameLogging/WithNameLogging";
import TSession from "@/types/session";

const ClientSession = () => {
  const { data: session } = useSession();

  useEffect(() => {
    window.location.reload;
  }, [session]);
  return null;
};

const SessionProvider = ({
  children,
  session,
}: {
  children: React.ReactNode | React.ReactNode[];
  session: TSession;
}) => {
  return (
    <NextSessionProvider session={session}>
      <ClientSession />
      {children}
    </NextSessionProvider>
  );
};

export default withLogger(SessionProvider);
