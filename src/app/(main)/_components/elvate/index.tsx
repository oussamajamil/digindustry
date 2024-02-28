import React from "react";
import Image from "next/image";
function Elvate() {
  return (
    <div className="min-h-[10rem] flex   gap-2 lg:justify-between justify-center flex-wrap [&>*]:flex-0 [&>*]:lg:flex-1">
      <div className="flex flex-col gap-2">
        <h1 className="[&>span]:text-primary text-xl lg:text-4xl font-[600]">
          Elevate <span>Quality</span> ,<br /> Enhance <span>Safety</span>
          <br /> & Master Your <span>Workspace</span>
        </h1>
        <p className="font-[400] text-[16px]">
          Strategic Solutions for Seamless Operations <br /> and Peak
          Performance
        </p>
      </div>
      <div className="flex flex-col gap-3  ">
        <div className="flex  gap-3 [&>*]:w-[20rem] flex-wrap items-center justify-center ">
          <div className="flex items-center gap-3 flex-wrap">
            <Image
              src="/icons/digital-audits-control.svg"
              alt="Digital Audits"
              width={34}
              height={34}
            />
            <h3 className="font-[600] text-md  md:text-xl lg:text:2xl">
              Digital Audits & <br /> Controls
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/icons/incident-managment.svg"
              alt="Digital Audits"
              width={34}
              height={34}
            />

            <h3 className="font-[600] text-md  md:text-xl lg:text:2xl">
              Incident
              <br />
              Management
            </h3>
          </div>
        </div>
        <div className="flex gap-3 [&>*]:w-[20rem] flex-wrap justify-center">
          <div className="flex items-center gap-3">
            <Image
              src="/icons/ai-powered-decision-support.svg"
              alt="Digital Audits"
              width={34}
              height={34}
            />
            <h3 className="font-[600] text-md  md:text-xl lg:text:2xl">
              AI-Powered Decision <br /> Support
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/icons/client-satisfaction.svg"
              alt="Digital Audits"
              width={34}
              height={34}
            />

            <h3 className="font-[600] text-md  md:text-xl lg:text:2xl">
              Client Satisfaction &
              <br />
              Claims
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elvate;
