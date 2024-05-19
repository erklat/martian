"use client";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import Logo from "@/components/Logo/Logo";

const Header = () => {
  return (
    <header>
      <Logo />
      header
    </header>
  );
};

console.log(withLogger);

export default withLogger(Header);
