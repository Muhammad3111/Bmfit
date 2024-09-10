import React from "react";
import HeroTitle from "../../utils/hero-title/HeroTitle";
import Image from "next/image";

export default function Hero() {
  const gallery = [
    "/images/image-1.png",
    "/images/image-2.png",
    "/images/image-1.png",
    "/images/image-2.png",
    "/images/image-3.png",
    "/images/image-4.png",
    "/images/image-3.png",
    "/images/image-4.png",
  ];
  return (
    <div className="px-20 py-10 xs:px-10">
      <div className="flex flex-col gap-4">
        <HeroTitle>Gallery</HeroTitle>
        <div className="grid lg:grid-cols-6 gap-10 xs:grid-cols-2 sm:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={index}
              className={`${
                index <= 3
                  ? index % 2 === 0
                    ? "col-span-2"
                    : "col-span-1 xs:col-span-2"
                  : index % 2 === 0
                  ? "col-span-1 xs:col-span-2"
                  : "col-span-2"
              } rounded-[50px] overflow-hidden h-80`}
            >
              <Image
                src={image}
                quality={100}
                width={400}
                height={200}
                alt="gallery-image"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
