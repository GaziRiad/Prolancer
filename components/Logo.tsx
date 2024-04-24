import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        height={250}
        width={500}
        alt="Prolancer Logo image"
        src="/logo.png"
        className="w-36"
      />
    </Link>
  );
}
