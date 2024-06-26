import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SessionProvider from "@/components/SessionProvider/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" className="h-full">
      <SessionProvider session={session}>
        <body className={`${inter.className} h-full`}>
          <div
            className={`
            h-full
            flex
            flex-col
          `}
          >
            <Header consoleMessage="Hello from" />
            <main
              className={`
              flex-1
            `}
            >
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
