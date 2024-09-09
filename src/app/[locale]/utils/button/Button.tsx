import React from "react";

type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    type: "outlined" | "contained";
    path?: string;
};

const Button = ({ className, children, type, path }: ButtonProps) => {
    return (
        <button
            className={`px-6 py-3 ${
                type === "outlined"
                    ? "border border-extra text-white"
                    : " bg-extra text-black border border-transparent"
            } rounded-[20px] text-lg font-medium ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
