import React from "react";
import { organisationData } from "../../../../constants/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function Driving() {
  return (
    <div className="w-full  flex flex-col items-center justify-center min-h-[10rem] bg-muted gap-[2rem]">
      <h1 className="font-[600] text-4xl">
        Driving Digindustry X.0 Innovation
      </h1>
      <p className="text-sm font-[400] text-[12px] text-[#717171]">
        Embark on a journey through Digindustry X.0 s vibrant ecosystem, where
        diverse teams seamlessly converge to propel the future of Industry X.0.
        Witness the collaborative strength of our dedicated teams below, as they
        unite to redefine standards and usher in a connected era of innovation.
        Explore the dynamic synergy that fuels our commitment to shaping
        industries in the digital age.
      </p>
      <div className="flex gap-[4rem] flex-wrap ">
        {organisationData.map((data, index) => (
          <Image
            key={index}
            src={data.image}
            alt={data.title}
            width={50}
            height={50}
          />
        ))}
      </div>
      <Button className="mt-2">Discover More</Button>
    </div>
  );
}

export default Driving;
