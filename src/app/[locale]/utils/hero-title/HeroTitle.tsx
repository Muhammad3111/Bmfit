import React from "react";

type HeroTitleProps = {
    children: React.ReactNode;
    className?: string;
    prefix?: boolean;
};

/**
 * HeroTitle component that displays a title with an optional prefix and className.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the title.
 * @param {string} [className] - Optional additional class names for styling the component.
 * @param {string} [prefix] - Optional prefix to display before the title.
 */

const HeroTitle = ({ children, className, prefix }: HeroTitleProps) => {
    return (
        <div
            className={`flex items-center font-semibold text-extra ${className}`}
        >
            <p className="text-sm">{prefix ? "///" : ""}</p>
            <p className={`text-lg ${className}`}>{children}</p>
        </div>
    );
};

export default HeroTitle;
