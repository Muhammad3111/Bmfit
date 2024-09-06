"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher({ params }: { params: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}${params}`);
    });
  };
  return (
    <label className="border-2 rounded-md px-2">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-1.5 focus:outline-none text-white"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="uz" className="text-black">O&apos;zbek</option>
        <option value="en" className="text-black">English</option>
        <option value="ru" className="text-black">Русский</option>
      </select>
    </label>
  );
}
