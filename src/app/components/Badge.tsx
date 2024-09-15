import React from "react";
import Image from "next/image";
interface Props {
  containerStyles?: string;
}

function Badge({ containerStyles }: Props) {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src="/assets/badge.svg"
        alt="Badge"
        fill
        className="object-contain"
      />
    </div>
  );
}

export default Badge;
