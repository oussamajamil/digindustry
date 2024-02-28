import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function Hero() {
  return (
    <div className=" min-h-[544px] flex   gap-4 flex-wrap bg-muted items-center justify-center xl:justify-between">
      <div className="flex flex-col gap-4 max-w-[300px]  lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[650px] ">
        <h1
          className="font-[600] text-left "
          style={{
            fontSize: "clamp(14px, 3vw, 4rem)",
          }}
        >
          Unleashing Digital Transformation in <br />
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#ca5630] to-primary">
            Industries
          </span>
        </h1>
        <p className="font-[400] text-left text-gray-400">
          Navigating the Future with Innovative Solutions
        </p>
        <Button className="px-4 py-2 w-fit mt-4">learn more</Button>
      </div>
      <Image
        className="sm:w-[300]] lg:w-[450px] aspect-video "
        src="./hero.svg"
        alt="Digital Transformation"
        width={391}
        height={260}
      />
    </div>
  );
}

export default Hero;
