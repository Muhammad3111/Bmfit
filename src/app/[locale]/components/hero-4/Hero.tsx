import React from "react";
import HeroTitle from "../../utils/hero-title/HeroTitle";
import Button from "../../utils/button/Button";
import Image from "next/image";

export default function Hero() {
  const cards = [
    { id: 1, title: "High Proteins Recipes", image: "/images/image_2.png" },
    { id: 2, title: "Low Carb Recipes", image: "/images/image_3.png" },
    { id: 3, title: "Dairy Free Recipes", image: "/images/image_4.png" },
    { id: 4, title: "Vegetarian Recipes", image: "/images/image_5.png" },
  ];
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
        <div className="flex items-center xs:flex-col xs:gap-4 sm:items-start">
          <div className="basis-[70%] xs:basis-full flex items-center gap-10 xs:flex-col sm:flex-col sm:items-start">
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
              <p className="text-base font-semibold text-white w-1/2 xs:w-full sm:w-full">
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
          <div className="basis-[30%] xs:basis-full flex flex-col gap-2">
            {cards.map((card) => (
              <div key={card.id} className="flex items-center gap-10">
                <Image
                  src={card.image}
                  quality={100}
                  width={100}
                  height={100}
                  priority
                  alt="recipe-2"
                  className="rounded-md"
                />
                <span className="text-white text-lg font-semibold">
                  {card.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
