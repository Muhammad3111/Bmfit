import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="px-20 py-10">
      <div className="flex items-center">
        <div className="basis-1/2 text-white flex flex-col gap-6 items-start">
          <strong className="text-7xl font-semibold">make your</strong>
          <h1 className="text-7xl uppercase font-bold">Body shape</h1>
          <p className="text-base w-[70%]">
            Being physically active can improve your brain health, help manage
            weight, reduce the risk of disease, strengthen bones and muscles,
            and improve your ability to do everyday activities. Adults who si
          </p>
          <button className="px-4 py-2 text-lg text-black bg-extra capitalize rounded-lg font-semibold">
            Get started
          </button>
        </div>
        <div className="basis-1/2">
          <div>
            <Image
              src="/images/banner.png"
              quality={100}
              width={600}
              height={400}
              alt="banner"
              className="w-full  object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
