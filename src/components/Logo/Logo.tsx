"use client";
import Link from "next/link";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import Svg from "@/components/Svg/Svg";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Svg icon="logo" classNames={`h-10 w-10 block fill-white`} />
      </Link>
    </div>
  );
};

export default withLogger(Logo);
