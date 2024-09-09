"use client";

import Image from "next/image";
import React from "react";
import { Hamburger } from "./Hamburger";

export default function Mobilemenu() {
  return (
    <div className="sm:hidden flex items-center justify-end fixed w-full p-4 z-20 bg-black">
      <Hamburger />
      <div className="bg-white rounded-md px-2">
        <Image
          src="/images/logo.png"
          quality={100}
          width={400}
          height={200}
          alt="logo"
          className="object-cover w-20 h-10"
        />
      </div>
    </div>
  );
}
