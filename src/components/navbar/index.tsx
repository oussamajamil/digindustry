"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { PopoverMenu } from "../popover";
import { data } from "./data";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

type NavBarTypeProps = React.ComponentProps<"div">;
function NavBar({ className, ...props }: NavBarTypeProps): JSX.Element {
  const [hovered, setHovered] = React.useState<number | undefined>(undefined);
  let pathname = usePathname() || "/";
  const { routes } = data;
  const { scrollYProgress, scrollY } = useScroll();

  const [direction, setDirection] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      setDirection(direction);
    }
  });

  return (
    <motion.nav
      className={cn(
        "w-full h-[84px] sticky top-0 z-10  px-[2rem] xl:px-[8rem] flex items-center justify-between border-b-2 shadow-md gap-[4rem] bg-white ",
        className
      )}
      initial={{
        y: 0,
      }}
      animate={{
        y: scrollY.get() > 100 ? (direction > 0 ? -100 : 0) : 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Image
        src="./logo.svg"
        alt="Logo"
        width={143}
        height={27}
        quality={100}
        style={{
          objectFit: "none",
        }}
      />
      <div className="flex  flex-1 items-center w-full  gap-[2rem] justify-evenly">
        {routes.map((item, index) => {
          const isActive =
            (pathname === item.path && (!hovered || hovered === index)) ||
            hovered === index;
          return (
            <div className="flex gap-2" key={index}>
              <Link
                key={index}
                href={item.path}
                className={cn("font-[600]  2xl:text-lg flex gap-2 relative ")}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(undefined)}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-item"
                    transition={{ duration: 0.5, type: "spring" }}
                    className="h-1 w-full absolute -bottom-1 bg-foreground rounded-full"
                  ></motion.div>
                )}
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <button className="bg-primary px-2 py-1 rounded text-primary-foreground">
          En
        </button>
      </div>
    </motion.nav>
  );
}

export default NavBar;
