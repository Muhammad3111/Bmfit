"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import LocalSwitcher from "../localeswitcher/LocaleSwitcher";
import Image from "next/image";
import { useTranslations } from "next-intl";

type MenuItems = {
  id: number;
  title: string;
  path: string;
};

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = useTranslations();
  const Items = t.raw("Navbar") as Array<MenuItems>;

  return (
    <div className="px-20 xs:hidden sm:block">
      <div className="flex items-center justify-between py-10">
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
        <div className="relative flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {Items?.map((link, index) => (
              <li
                key={index}
                className="relative flex flex-col"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a href="#" className="text-white font-semibold text-base">
                  {link.title}
                </a>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 bg-white h-0.5"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <LocalSwitcher params="" />
        </div>
      </div>
    </div>
  );
}
