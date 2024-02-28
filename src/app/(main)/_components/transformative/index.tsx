import React from "react";
import Image from "next/image";
import { TransformConntent } from "../../../../constants/data";

function Transform() {
  return (
    <div className="flex flex-col items-center min-h-[10rem] gap-1">
      <h1 className="text-lg sm:text-xl lg:text-3xl text-center ">
        Transformative Solutions by Digindustry X.0
      </h1>
      <span className="text-[8px] sm:text-[10px] lg:text-[14px] tex-center">
        Elevate Efficiency with Innovative Operational Strategies
      </span>
      <div className="flex flex-wrap justify-center  lg:justify-evenly gap-[1rem] mt-4 items-center">
        {TransformConntent.map((content, index) => (
          <div
            key={index}
            className="flex  flex-col items-center max-w-[22rem] shadow-lg  gap-2 bg-white rounded-xl h-[340px] px-8 py-4 "
          >
            <Image
              src={content.image}
              alt={"test"}
              width={70}
              height={70}
              className="w-[70px] h-[70px]"
            />
            <h3 className="text-lg font-bold text:sm sm:text-md">
              {content.title}
            </h3>
            <p className="font-[400] text-[#717171] text-left">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transform;
