import React from "react";
import Image from "next/image";

function Separator({ bg = "white" }) {
  const imgSrc =
    bg === "white"
      ? "/assets/separator-white.svg"
      : "/assets/separator-accent.svg";

  return (
    <div className="relative w-[168px] h-[26px] mx-auto">
      <Image src={imgSrc} alt="Separator" fill className="object-contain" />
    </div>
  );
}

export default Separator;
