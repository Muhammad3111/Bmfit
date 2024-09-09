import React from "react";
import HeroTitle from "../../utils/hero-title/HeroTitle";
import Button from "../../utils/button/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";

type HeroProductType = {
    title: string;
    image: string;
};

const Hero = () => {
    const t = useTranslations("Hero-2");

    const heroProductData = t.raw("products") as Array<HeroProductType>;

    return (
        <div className="px-20 py-10">
            <div className="flex items-center justify-between max-[770px]:flex-col max-[770px]:gap-4 ">
                <HeroTitle className="uppercase text-2xl" prefix>
                    {t("title")}
                </HeroTitle>

                <Button
                    type="outlined"
                    className="hover:bg-extra hover:text-black duration-300"
                >
                    {t("viewAllProducts")}
                </Button>
            </div>

            <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(320px,320px))] justify-between max-[770px]:justify-center">
                {heroProductData.map((pro, index) => (
                    <div
                        key={index}
                        className="w-full h-[350px] relative cursor-pointer group max-[770px]:mt-6"
                    >
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <Image
                                src={pro.image}
                                alt={pro.title}
                                width={200}
                                height={200}
                                priority
                                quality={100}
                            />
                        </div>

                        <HeroTitle className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-[24px] font-normal z-20">
                            {pro.title}
                        </HeroTitle>

                        <div className="absolute inset-x-0 bottom-0 h-[130px] bg-[#3b3b3b] z-10 group-hover:h-full transition-all duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
