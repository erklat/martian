"use client";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Header/components/Navigation/Navigation";
import HeaderActions from "@/components/Header/components/HeaderActions/HeaderActions";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header>
      <div className="container mx-auto">
        <div
          className={`
            py-10
            flex
            justify-between
            items-center
          `}
        >
          <Logo />

          {session && (
            <>
              <Navigation />
              <HeaderActions />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default withLogger(Header);
