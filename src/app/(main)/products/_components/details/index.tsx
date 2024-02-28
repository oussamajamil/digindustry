import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface ProductDetailsProps {
  index: number;
  data: {
    title: string;
    subTitle: string;
    description: string;
    image: string;
    information: {
      title: string;
      description: string;
    }[];
  };
}
function Details({
  index,
  data: { title, subTitle, description, image, information },
}: ProductDetailsProps) {
  return (
    <section
      id={`products${index}`}
      className={cn("flex flex-col gap-[2rem] border bg-white", {
        "bg-muted": index % 2 !== 0,
      })}
    >
      <h1 className="font-[600] text-primary text-3xl text-center">{title}</h1>
      <div
        className={cn(
          "flex gap-2 shadow-md  flex-wrap lg:flex-nowrap items-center justify-center bg-white",
          {
            "flex-row-reverse": index % 2 !== 0,
            "bg-muted": index % 2 === 0,
          }
        )}
      >
        <Image
          src={image}
          alt={title}
          width={474}
          height={500}
          className="w-[300px] h-[300px] lg:w-[474px] lg:h-[500px]"
        />
        <div className="flex flex-col gap-[2rem] items-center justify-center px-[1rem] lg:px-[3rem] py-[1rem]">
          <h2 className="font-[600] text-primary text-lg lg:text-2xl">
            {subTitle}
          </h2>
          <p className="text-[#333]">{description}</p>
          <ul className="flex flex-col gap-2 px-[1rem]">
            {information.map((info, index) => {
              return (
                <li key={index}>
                  <h3 className="font-[300] text-primary text-lg">
                    {info.title}
                  </h3>
                  <p className="text-[#333]">{info.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Button className="bg-primary p-6 w-fit mx-auto">View More</Button>
    </section>
  );
}

export default Details;
