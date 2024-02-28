"use client";
import { SolutionsData } from "@/constants/data";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardHeroType } from "@/lib/type";
import { useRouter } from "next/navigation";

function HeroCard({ title, description, children }: CardHeroType) {
  const router = useRouter();
  const navigateToSection = (sectionId: string) => {
    router.push(`#${sectionId}`);
  };
  return (
    <div className="flex flex-col  bg-muted text-center">
      <h1 className="text-4xl font-[600]">{title}</h1>
      <p className="text-base font-medium mt-4">{description}</p>
      <div className="flex gap-[3rem]  flex-wrap items-center justify-center mt-[3rem]">
        {children.map((content, index) => (
          <motion.div
            onClick={() => navigateToSection(`${title}${index}`)}
            whileHover={{
              boxShadow: "0px 6px 20px 0px #abbed1c7",
            }}
            key={index}
            style={{
              boxShadow: "0px 6px 12px 0px #ABBED14D",
            }}
            className="flex flex-wrap flex-col items-center justify-center gap-6 p-8 bg-white rounded-md "
          >
            <Image
              src={content.image}
              alt={"test"}
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
            <h3 className="text-lg font-bold w-[8rem] h-[4rem] ">
              {content.title.toUpperCase()}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HeroCard;
