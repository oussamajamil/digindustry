"use client";
import React, { useState, useRef, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  title: string;
  description: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full  p-2 grid grid-cols-1 md:grid-cols-4  max-w-7xl mx-auto gap-4 h-fit auto-rows-auto">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(
            card.className,
            "rounded-xl min-h-[15rem] relative  overflow-hidden cursor-pointer  hover:shadow-2xl transition-shadow"
          )}
        >
          <div className="inset-0 bg-gradient-to-b from-black/50 to-transparent hover:bg-transparent transition-colors absolute z-[10]"></div>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex p-[2rem] justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <div
              className={cn(
                "absolute z-[20]  top-2 left-2  h-[90%]    flex-col w-fit  flex justify-between",
                {
                  hidden: selected?.id === card.id,
                }
              )}
            >
              <div className="text-white max-w-[25rem] p-4">
                <h3 className="text-[#ABBED1] font-[400] drop-shadow-md ">
                  {card.title}
                </h3>
                <p className="text-white font-[600]">{card.description}</p>
              </div>
              <Button
                className="w-fit"
                onClick={() => {
                  // handleClick(card);
                }}
              >
                Read More
              </Button>
            </div>
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute  h-full w-full left-0 top-0 bg-muted opacity-0 z-10 px-0",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover  absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl absolute z-[99999] debug">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
