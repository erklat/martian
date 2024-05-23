"use client";
import Link from "next/link";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import Logo from "@/components/Logo/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="py-10">
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default withLogger(Footer);
