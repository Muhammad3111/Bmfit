import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import LocalSwitcher from "../localeswitcher/LocaleSwitcher";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const itemIds = [
  "Home",
  "About",
  "Workout Programs",
  "Recipes",
  "Store",
  "Login",
  "Sign up",
];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem title={i} key={i} />
    ))}
    <motion.li variants={variantsLi} className="text-black">
      <LocalSwitcher />
    </motion.li>
  </motion.ul>
);
