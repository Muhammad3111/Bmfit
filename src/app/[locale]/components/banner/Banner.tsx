import Image from "next/image";
import React from "react";
import Button from "../../utils/button/Button";

export default function Banner() {
  return (
    <div className="px-20 py-10 xs:px-10 xs:pt-20">
      <div className="flex items-center xs:flex-col-reverse xs:gap-6">
        <div className="basis-1/2 text-white flex flex-col gap-6 items-start">
          <h1 className="text-7xl uppercase font-bold xs:text-4xl">
            <span className="font-normal lowercase">make your</span> Body shape
          </h1>
          <p className="text-base w-[70%] xs:w-full">
            Being physically active can improve your brain health, help manage
            weight, reduce the risk of disease, strengthen bones and muscles,
            and improve your ability to do everyday activities. Adults who si
          </p>
          <Button
            type="contained"
            className="hover:text-white hover:bg-transparent hover:border hover:border-extra duration-300"
          >
            Get Started
          </Button>
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
