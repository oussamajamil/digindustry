import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}
function ImageTitle({ image, title, description }: Props) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={image}
        alt={"test"}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="absolute h-[8rem] rounded-md mx-4 p-2 bg-[#F5F7FA] justify-center flex flex-col  items-center gap-4 shadow-md -bottom-[1.5rem] text-center w-[90%]">
        <h3 className="text-primary font-[600]">{title}</h3>
        <p className="text-sm font-[400]">{description}</p>
      </div>
    </div>
  );
}

export default ImageTitle;
