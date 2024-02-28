import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
interface Props {
  index: number;
  data: {
    title: string;
    logo: string;
    subtitle: string;
    image: string;
    color: string;
    icon: string;
    name: string;
    information: {
      title: string;
      description: string;
    }[];
  };
}
function Details({
  index,
  data: { title, logo, subtitle, color, information, image, name, icon },
}: Props) {
  return (
    <section
      id={`ecosystem${index}`}
      className={cn("flex flex-col gap-4 ", {
        "bg-muted": index % 2 !== 0,
      })}
    >
      <h1 className="text-center text-primary  text-xl lg:text-2xl font-[700]">
        {title}
      </h1>
      <div
        className={cn(
          "flex w-full flex-col lg:flex-row flex-wrap  rounded-3xl overflow-hidden",
          {
            "lg:flex-row-reverse": index % 2 !== 0,
            "bg-muted": index % 2 === 0,
            "bg-white": index % 2 !== 0,
          }
        )}
      >
        <div className="flex items-center justify-center sm:mt-5 lg:mt-0 bg-inherit">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full lg:max-h-fit lg:w-fit rounded-3xl h-[25rem] lg:h-[40rem] "
          />
        </div>
        <div
          className={cn(
            "flex flex-col shadow flex-1 items-center justify-center gap-4 p-8"
          )}
        >
          <Image src={logo} alt={title} width={120} height={120} />
          <h2
            className={cn(`font-medium text-lg lg:text-3xl  w-full`, {
              "text-[#FA993A]": color === "#FA993A",
            })}
          >
            {subtitle}
          </h2>

          <ul className="w-full flex flex-col gap-2 mt-6">
            {information.map((info, index) => (
              <li key={index} className="flex flex-col">
                <h3
                  className={cn(`text-lg lg:text-xl font-medium flex gap-2 `, {
                    "text-[#3357A3]": ["FMC2E", "Digieye"].includes(name),
                    "text-[#A90019]": !["FMC2E", "Digieye"].includes(name),
                  })}
                >
                  <Image
                    src={icon}
                    alt={title}
                    width={40}
                    height={40}
                    className="inline"
                  />
                  {info.title}
                </h3>
                <p className="text-sm font-medium text-gray-400 px-8">
                  {info.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        className={cn(
          "flex gap-2 p-6 w-fit items-center mx-auto bg-[#A90019] active:bg-[#A90019] hover:bg-[#A90019] text-white mt-4",
          {
            "bg-[#FA993A] active:bg-[#FA993A] hover:bg-[#FA993A]  ":
              color === "#FA993A",
            "bg-[#3357A3] active:bg-[#3357A3] hover:bg-[#3357A3]":
              name === "Digieye",
          }
        )}
      >
        Discovre {name.toLocaleUpperCase()}
      </Button>
    </section>
  );
}

export default Details;
