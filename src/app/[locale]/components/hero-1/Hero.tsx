"use client";

import React from "react";
import HeroTitle from "../../utils/hero-title/HeroTitle";
import Image from "next/image";
import Button from "../../utils/button/Button";
import { useTranslations } from "next-intl";

type HeroCardType = {
  title: string;
  image: string;
};

const Hero = () => {
  const t = useTranslations("Hero-1");
  const heroCardData = t.raw("programs") as Array<HeroCardType>;

  return (
    <div className="px-20 pb-10">
      <HeroTitle className="text-white mb-6">{t("title")}</HeroTitle>

      <div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,230px))] gap-6 justify-between max-[645px]:justify-center max-[645px]:grid-cols-[repeat(auto-fill,minmax(300px,300px))]">
          {heroCardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-10 group"
            >
              <div className="relative w-full h-[500px] cursor-pointer overflow-hidden max-[645px]:mt-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  quality={100}
                  priority
                  width={200}
                  height={400}
                />
                <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] text-white text-3xl whitespace-nowrap">
                  {card.title}
                </div>
              </div>

              <Button
                type="outlined"
                className="w-[85%] duration-300 group-hover:bg-extra group-hover:text-black"
              >
                {t("button")}
              </Button>

              {/* <button className="border border-extra text-white text-lg font-semibold w-[85%] py-3 rounded-[20px] duration-500 group-hover:bg-extra group-hover:text-black">
                                Start Today
                            </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
