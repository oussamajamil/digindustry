import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsMenuItem = {
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

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/solutions",
    name: "Solutions",
  },
  {
    path: "/products",
    name: "Products",
  },
  {
    path: "/ecosystem",
    name: "Ecosystem",
  },
  {
    path: "/case-study",
    name: "Case Study",
  },
  {
    path: "/publications",
    name: "Publications",
  },
];
export const Navigation = ({
  className,
  setOpen,
}: {
  className?: string;
  setOpen?: any;
}) => (
  <motion.ul
    variants={variants}
    className={cn(
      "flex flex-col gap-[2rem] [&>*]:font-[600] [&>*]:text-2xl",
      className
    )}
  >
    {links.map(
      (
        data: {
          path: string;
          name: string;
        },
        index: number
      ) => (
        <motion.li
          variants={variantsMenuItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={data.path}
            onClick={() => {
              setOpen && setOpen(false);
            }}
            passHref
          >
            {data.name}
          </Link>
        </motion.li>
      )
    )}
  </motion.ul>
);
