import React from "react";
import Image from "next/image";

export default function toPay() {
  return (
    <div
      className="flex flex-col items-center h-screen "
      style={{ backgroundImage: `url('/Background-Gif.gif')` }}
    >
      <h1 className="text-2xl font-bold mt-12 animate-slideInLeft">
        Tickets Holobeat 15-03 (HUM)
      </h1>

      <div className="animate-slideInLeft relative w-[200px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] mb-8 mt-8">
        <Image src="/FLYER.png" alt="flyer" layout="fill" objectFit="cover" />
      </div>

      <div>
        <p className="text-sm p-6 text-center">Anticipadas agotadas! ❌</p>
      </div>
    </div>
  );
}
