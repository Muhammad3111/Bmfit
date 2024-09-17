import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

// SmileBox komponenti
const SmileBox = () => {
    const t = useTranslations("About");
    return (
        <div className="w-[270px] h-[280px] bg-[#3b3b3b] rounded-3xl flex flex-col justify-between items-center py-4 px-12 group cursor-pointer">
            <Image
                src={"/images/about-smile.svg"}
                alt="smile about"
                priority
                quality={100}
                width={70}
                height={70}
                className="group-hover:scale-105 duration-300"
            />
            <p className="text-center">{t("smile")}</p>
        </div>
    );
};

const About = () => {
    const t = useTranslations("About");

    return (
        <div className="h-[800px] mb-32">
            <div className="h-full w-full bg-[url('/images/about.svg')] bg-no-repeat bg-cover text-white relative">
                <div className="p-10">
                    <p className="text-7xl font-normal">{t("sub-title")}</p>
                    <h1 className="text-7xl font-semibold mt-6">
                        {t("title")}
                    </h1>
                    <p className="mt-6">{t("join")}</p>
                    <p className="mt-6 w-[40%]">{t("info")}</p>
                </div>

                {/* Responsive smile boxes */}
                <div className="absolute left-0 bottom-0 w-full h-auto flex flex-wrap items-center justify-evenly gap-6 px-4 md:flex-nowrap md:h-[50px]">
                    <SmileBox />
                    <SmileBox />
                    <SmileBox />
                </div>
            </div>
        </div>
    );
};

export default About;
