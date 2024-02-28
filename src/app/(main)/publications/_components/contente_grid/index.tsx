"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../layout_grid";
export function LayoutGridDemo() {
  return (
    <div className="h-fit">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="w-full h-full justify-evenly">
      <p className="font-bold text-4xl text-white">HEALTH-TECH</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        “Made in Morocco” Connected Medical Cabins Delivered to Saudi Arabia
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="w-full h-full justify-evenly">
      <p className="font-bold text-4xl text-white">SMART CITIES</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Mr. MIRAOUI visits ABA TECHNOLOGY Center
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="w-full h-full justify-evenly">
      <p className="font-bold text-4xl text-white">IOT & ELECTRONICS</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        NEXTRONIC:Euro-Med IoT Leader at Vivatech
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="w-full h-full justify-evenly">
      <p className="font-bold text-4xl text-white">IOT & ELECTRONICS</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        DXperts: Superior PCBA Solutions for Digindustry X.0
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="w-full h-full justify-evenly">
      <p className="font-bold text-4xl text-white">HEALTH-TECH</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Rural Health Pact:Ait Taleb, Mediot Royal Agreement
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div className="w-full h-full justify-evenly">
      <p className="font-bold text-4xl text-white">AUGMENTED LOGISTICS</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        NEXTRONIC produces an intelligent dashboard, with a local integration
        rate of 93%
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 md:row-span-2",
    title: "HEALTH-TECH",
    description:
      "“Made in Morocco” Connected Medical Cabins Delivered to Saudi Arabia",
    thumbnail: "/publication/image1.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 md:row-span-3",
    title: "SMART CITIES",
    description: "Mr. MIRAOUI visits ABA TECHNOLOGY Center",

    thumbnail: "/publication/image2.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 md:row-span-3",
    title: "IOT & ELECTRONICS",
    description: "NEXTRONIC:Euro-Med IoT Leader at Vivatech",
    thumbnail: "/publication/image3.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    title: "IOT & ELECTRONICS",
    description: "DXperts: Superior PCBA Solutions for Digindustry X.0",
    className: "col-span-1 md:row-span-3 ",
    thumbnail: "/publication/image4.png",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1 md:row-span-3 ",
    title: "HEALTH-TECH",
    description: "Rural Health Pact:Ait Taleb, Mediot Royal Agreement",
    thumbnail: "/publication/image5.png",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-2 md:row-span-2",
    title: "AUGMENTED LOGISTICS",
    description:
      "NEXTRONIC produces an intelligent dashboard, with a local integration rate of 93%",
    thumbnail: "/publication/image6.png",
  },
];
