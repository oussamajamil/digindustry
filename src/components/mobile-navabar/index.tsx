"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MenuGlobal } from "../menu";

type NavBarTypeProps = React.ComponentProps<"div">;
function NavBarMobile({ className, ...props }: NavBarTypeProps): JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <nav
      className={cn(
        "sticky top-0  h-[3.5rem]  w-full px-[1rem] flex items-center justify-between shadow-md gap-[4rem] bg-white z-50 ",
        className
      )}
      {...props}
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
      <MenuGlobal />
    </nav>
  );
}

export default NavBarMobile;
