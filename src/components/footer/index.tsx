"use client";
import React from "react";
import Image from "next/image";
import { Suppotrs } from "@/constants/data";

function Footer() {
  return (
    <div className="flex flex-col  bg-[#263238] min-h-[15rem]  justify-center gap-[1rem] py-[2rem] px-[2rem] lg:px-[8rem] lg:py-[2rem]">
      <Image
        src="./logo.svg"
        alt="Logo"
        width={143}
        height={60}
        quality={100}
        style={{
          objectFit: "none",
        }}
      />
      <div className="flex  gap-4 justify-between flex-wrap">
        <div className="max-w-[20rem]  flex flex-col gap-4">
          <h1 className="text-white text-xl font-bold">Our vision</h1>
          <p className="text-gray-400 px-2">
            At Digindustry X.0, we redefine industry standards with cutting-edge
            technologies, fostering operational excellence in the dynamic
            landscape of Industry X.0. With a focus on digitization,
            connectivity, and AI, we lead industries toward an efficient future.
          </p>
        </div>
        <div className="max-w-[20rem] flex flex-col gap-4 ">
          <h1 className="text-white text-lg font-bold">Solutions</h1>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Performance Management</p>
              <p className="text-gray-400">Production Efficiency</p>
              <p className="text-gray-400">Smart Product</p>
              <p className="text-gray-400">Predictive Quality</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Connected Workers</p>
              <p className="text-gray-400">Energy Monitoring</p>
              <p className="text-gray-400">AOI Quality Check</p>
            </div>
          </div>
        </div>
        <div className="max-w-[20rem] flex flex-col gap-4">
          <h1 className="text-white text-lg font-bold">Products</h1>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Connectivity Machine</p>
              <p className="text-gray-400">Vibration Sensor</p>
              <p className="text-gray-400">Computer Vision</p>
              <p className="text-gray-400">Temperature</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Energy</p>
              <p className="text-gray-400">RTLS</p>
              <p className="text-gray-400">GPS</p>
              <p className="text-gray-400">HCI</p>
            </div>
          </div>
        </div>
        <div className="max-w-[20rem] flex flex-col gap-4">
          <h1 className="text-white text-lg font-bold">Support</h1>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">Help center</p>
            <p className="text-gray-400">Terms of service</p>
            <p className="text-gray-400">status</p>
            <p className="text-gray-400">privacy policy</p>
          </div>
        </div>
      </div>
      <div className="text-white text-lg font-bold text-center">Contact us</div>
      <div className="flex gap-[2rem] flex-wrap justify-between my-2">
        {Suppotrs.map((support, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Image src={support.image} alt="support" width={30} height={30} />
            <p
              className="text-gray-400 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(support.value);
              }}
            >
              {support.value}
            </p>
          </div>
        ))}
      </div>
      <div className="text-gray-400 text-xs text-center">
        Copyright © 2024 Digindustry X.0. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
