import React from "react";
import HeroTitle from "../../utils/hero-title/HeroTitle";
import Button from "../../utils/button/Button";

const Hero = () => {
    return (
        <div className="px-20 py-10 xs:px-10">
            <div className="flex items-center justify-between">
                <HeroTitle className="uppercase text-2xl" prefix>
                    get our merch
                </HeroTitle>

                <Button
                    type="outlined"
                    className="hover:bg-extra hover:text-black duration-300"
                >
                    View All Products
                </Button>
            </div>
        </div>
    );
};

export default Hero;
