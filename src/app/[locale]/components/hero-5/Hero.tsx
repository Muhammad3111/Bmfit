import React from "react";
import HeroTitle from "../../utils/hero-title/HeroTitle";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
    const t = useTranslations("Hero-5");

    return (
        <div className="px-20 xs:px-10">
            <HeroTitle prefix className="text-2xl">
                {t("title")}
            </HeroTitle>

            <p className="text-white max-w-[700px] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione laboriosam eaque aliquid illum provident error magni
                ducimus quia itaque perspiciatis.
            </p>

            <div className="mt-10 flex justify-between gap-20">
                <div className="w-[600px] flex flex-col justify-center gap-6">
                    <input
                        type="text"
                        placeholder={t("inputName")}
                        className="outline-none border border-extra bg-transparent text-extra indent-6 font-medium py-7 w-full rounded-[30px]"
                    />
                    <input
                        type="email"
                        placeholder={t("inputEmail")}
                        className="outline-none border border-extra bg-transparent text-extra indent-6 font-medium py-7 w-full rounded-[30px]"
                    />
                    <input
                        type="text"
                        placeholder={t("inputMessage")}
                        className="outline-none border border-extra bg-transparent text-extra indent-6 font-medium py-6 pb-20 w-full rounded-[30px]"
                    />
                </div>
                <div className="hidden xl:block">
                    <Image
                        src={"/images/contact.svg"}
                        alt="contact"
                        width={450}
                        height={450}
                        priority
                        quality={100}
                        className="rounded-[30px]"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 py-10">
                <div className="bg-white rounded-md px-2">
                    <Image
                        src="/images/logo.png"
                        quality={100}
                        width={500}
                        height={300}
                        alt="logo"
                        className="object-cover w-32 h-12"
                    />
                </div>

                <p className="text-white text-center max-w-[85%]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                    excepturi dolor necessitatibus iste nemo voluptates? Amet
                    reprehenderit, illo voluptatibus debitis, tempora ad optio,
                    eveniet corporis omnis quo atque. Animi reiciendis
                    consequuntur vero autem necessitatibus nostrum et quam sed
                    odit ad temporibus unde, sunt nisi totam, ab, ut magnam
                    minima laboriosam?
                </p>
            </div>
        </div>
    );
};

export default Hero;
