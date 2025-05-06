"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size: number;
}

export default function Logo({ size }: LogoProps) {
  return (
    <>
      <Link href={"/items"} className="inline-flex items-center gap-2">
        <Image
          src="/images/logo/healthdonals.png"
          alt="healthdonal"
          width={size}
          height={size}
        />
      </Link>
      <p className="text-sm font-bold">Health Donald</p>
    </>
  );
}
