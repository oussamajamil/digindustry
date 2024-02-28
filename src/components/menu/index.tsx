import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { Navigation } from "./navigate";
import { useDimensions } from "./use-dimension";
import { MenuToggle } from "./menu-toggle";
import { cn } from "@/lib/utils";
const sidebar = {
  open: (height = 1000) => ({
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MenuGlobal = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="relative" variants={sidebar} />
      <Navigation
        setOpen={toggleOpen}
        className={cn(
          "absolute top-[3rem] left-0 w-full h-full min-h-screen items-center  py-[4rem] flex flex-col px-2 text-white bg-primary z-[]",
          {
            hidden: !isOpen,
          }
        )}
      />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
