import React from "react";
import Image from "next/image";

export default function toPay() {
  return (
    <div
      className="flex flex-col items-center h-screen "
      style={{ backgroundImage: `url('/Background-Gif.gif')` }}
    >
      <h1 className="text-2xl font-bold mt-12 animate-slideInLeft">
        No tickets available
      </h1>
    </div>
  );
}
