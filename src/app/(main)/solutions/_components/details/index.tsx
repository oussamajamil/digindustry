"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
interface Props {
  index: number;
  data: {
    title: string;
    description: string;
    subTitle: string;
    imageHero: string;
    information: {
      title: string;
      description: string;
    }[];
    image1: string;
    image2: string;
  };
}
function Details({ index, data }: Props) {
  return (
    <section
      id={`solutions${index}`}
      className={cn("min-h-[10rem] flex flex-col text-center gap-[2rem]", {
        "bg-muted": index % 2 !== 0,
      })}
    >
      <h1 className="text-primary text-3xl font-[600]">{data.title}</h1>
      <div
        className={cn(
          "flex mt-4  justify-center lg:justify-between items-center  lg:text-left flex-wrap lg:flex-nowrap  gap-[1rem] gap-y-2",
          {
            "lg:flex-row-reverse": index % 2 !== 0,
          }
        )}
      >
        <Image src={data.imageHero} alt={data.title} width={400} height={400} />
        <div className="flex flex-col  max-w-[45rem] gap-4">
          <h1 className="font-[600] text-2xl lg:text-4xl ">{data.subTitle}</h1>
          <p>{data.description}</p>
          <Button className="max-w-fit p-6 flex items-center justify-center">
            Learn More
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "flex  gap-x-[4rem] gap-y-[1rem]  lg:justify-between items-center lg:text-left flex-wrap lg:flex-nowrap justify-center",
          {
            "lg:flex-row-reverse": index % 2 !== 0,
          }
        )}
      >
        <ul className="flex flex-col  max-w-[45rem] gap-[1rem]">
          {data.information.map((info, index) => (
            <li key={index}>
              <h2 className="text-primary font-[600] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {info.title}
              </h2>
              <p>{info.description}</p>
            </li>
          ))}
        </ul>

        <div
          className="relative w-full lg:w-[450px]   aspect-video shrink-0  hover:[&>*]:shadow-lg"
          style={{
            transformStyle: "preserve-3d",
            perspective: "2000",
            transform: "rotateY(25deg) rotateX(2deg)",
          }}
        >
          <motion.div
            className="absolute inset-0   object-contain opacity-90 hover:opacity-100 hover:translate-[0,0,1] peer transition-opacity "
            whileHover={{
              z: 50,
              x: -50,
            }}
            style={{
              z: -100,
            }}
          >
            <Image
              src={data.image2}
              alt={data.title}
              width={400}
              height={225}
              className="w-full h-full"
            />
          </motion.div>
          <motion.div className="absolute top-10 left-6   object-contain peer-hover:opacity-90 transition-all duration-300 delay-500">
            <Image
              className="w-full h-full"
              src={data.image1}
              alt={data.title}
              width={400}
              height={225}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Details;
