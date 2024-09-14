import React from "react";
import HeroTitle from "../../utils/hero-title/HeroTitle";
import Button from "../../utils/button/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="px-20 py-10 xs:px-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between xs:flex-col xs:gap-4">
          <HeroTitle prefix>Recipes</HeroTitle>
          <Button
            type="outlined"
            className="hover:bg-extra hover:text-black duration-300"
          >
            View more
          </Button>
        </div>
        <div className="flex items-center">
          <div className="basis-[70%] flex items-center gap-10">
            <Image
              src="/images/image_1.png"
              quality={100}
              width={200}
              height={400}
              className="object-cover rounded-[50px] h-96 w-72"
              alt="image"
            />
            <div className="flex flex-col gap-4 items-start">
              <h2 className="text-2xl text-white font-bold">
                Protein-packed power bowl
              </h2>
              <p className="text-base font-semibold text-white w-1/2">
                A colorful protein-packed power bowl filled with flavorful,
                meaty grilled satay tofu and an array of vibrant veggies on a
                bed of fluffy quinoa. Completed with a healthy and delicious
                satay dipping sauce and crushed roasted peanuts. Delicious!
              </p>
              <Button
                type="outlined"
                className="hover:bg-extra hover:text-black duration-300"
              >
                View full recipe
              </Button>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
