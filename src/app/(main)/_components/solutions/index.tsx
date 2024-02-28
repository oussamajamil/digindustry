"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  url: string;
  data: {
    title: string;
    description: string;
    children: {
      title: string;
      image: string;
    }[];
  };
}
function SolutionsProductios({ data, url }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-muted items-center">
      <h1 className="text-3xl font-[600]">{data.title}</h1>
      <p className="text-sm mt-4">{data.description}</p>
      <div className="flex flex-wrap items-center gap-[6rem] justify-evenly  mt-8">
        {data.children.map((content, index) => (
          <Fragment key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <Image
                src={content.image}
                alt={"test"}
                width={62}
                height={62}
                className="w-[62px] h-[62px]"
              />
              <h3 className="text-lg font-bold cursor-pointer">
                {content.title}
              </h3>
            </motion.div>
          </Fragment>
        ))}
      </div>
      <Button
        className="mt-6 p-6"
        onClick={() => {
          router.push(url);
        }}
      >
        Discover More
      </Button>
    </div>
  );
}

export default SolutionsProductios;
