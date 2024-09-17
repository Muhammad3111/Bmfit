"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function LocaleSwitcher({ params }: { params?: string }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const onLocaleChange = (locale: string) => {
        startTransition(() => {
            router.replace(`/${locale}${params}`);
        });
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left z-20">
            <button
                type="button"
                className="bg-transparent flex items-center focus:outline-none sm:text-white xs:text-black"
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
            >
                <span>
                    {localActive === "uz" && (
                        <div className="flex items-center gap-2">
                            <span className="fi fi-uz fis"></span>
                            <span>Uz</span>
                        </div>
                    )}
                    {localActive === "en" && (
                        <div className="flex items-center gap-2">
                            <span className="fi fi-gb fis"></span>
                            <span>En</span>
                        </div>
                    )}{" "}
                    {localActive === "ru" && (
                        <div className="flex items-center gap-2">
                            <span className="fi fi-ru fis"></span>
                            <span>Ру</span>
                        </div>
                    )}
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div role="menu">
                        <button
                            onClick={() => onLocaleChange("uz")}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-black w-full text-left hover:bg-gray-300 duration-300"
                            disabled={isPending}
                        >
                            <span className="fi fi-uz fis"></span> Uz
                        </button>
                        <button
                            onClick={() => onLocaleChange("en")}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-black w-full text-left hover:bg-gray-300 duration-300"
                            disabled={isPending}
                        >
                            <span className="fi fi-gb fis"></span> En
                        </button>
                        <button
                            onClick={() => onLocaleChange("ru")}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-black w-full text-left hover:bg-gray-300 duration-300"
                            disabled={isPending}
                        >
                            <span className="fi fi-ru fis"></span> Ру
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
