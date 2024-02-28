"use client";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { LayoutGridDemo } from "./_components/contente_grid";

const news = [
  {
    title: "Revolutionizing Energy Management in Industry X.0",
    description:
      "Explore how Digindustry X.0 revolutionizes resource optimization for sustainable solutions in the Energy, Resources & Utilities sector.",
    author: "Mohamed BENOUDA",
    avatar: "./publication/user-bonouda.png",
    date: "2021-10-10",
    views: 100,
    tag: "IOT & ELECTRONICS",
  },
  {
    title: "Revolutionizing Energy Management in Industry X.0 ||| ",
    description:
      "Explore how Digindustry X.0 revolutionizes resource optimization for sustainable solutions in the Energy, Resources & Utilities sector.",
    author: "Mohamed BENOUDA",
    avatar: "./publication/user-bonouda.png",
    date: "2021-10-10",
    views: 100,
    tag: "IOT & ELECTRONICS",
  },
  {
    title: "||||||Revolutionizing Energy Management in Industry X.0",
    description:
      "Explore how Digindustry X.0 revolutionizes resource optimization for sustainable solutions in the Energy, Resources & Utilities sector.",
    author: "Mohamed BENOUDA",
    avatar: "./publication/user-bonouda.png",
    date: "2021-10-10",
    views: 100,
    tag: "IOT & ELECTRONICS",
  },
];

const Author = ({ author, avatar }: { author: string; avatar: string }) => {
  return (
    <div className="flex items-center md:text-lg gap-2">
      <div className="w-[28px] h-[28px] relative rounded-full outline-2 outline  outline-white drop-shadow-sm  overflow-hidden ">
        <Image src={avatar} alt={"test"} fill />
      </div>
      <div className="md:text-lg">{author}</div>
    </div>
  );
};
function PagePublication() {
  const [selected, setSelected] = React.useState(0);
  const selectedNews = news[selected];
  return (
    <main className="">
      <div
        className="w-full flex flex-col items-start  bg-cover bg-center bg-no-repeat text-white p-[clamp(1rem,5vw,5rem)] "
        style={{
          backgroundImage:
            "linear-gradient(180deg, #000000 -6.74%, rgba(0, 0, 0, 0) 31.72%, rgba(0, 0, 0, 0) 51.54%, #000000 98.13%),url('./publication/ftr.png')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-[600] text-3xl text-[clamp(2rem,4vw,4rem)] text-center ">
          Latest <span className="underline">News</span>
        </h1>
        <div className="px-3 font-[500] py-2 bg-gray-500/50  bg-blur rounded-full w-fit mt-[clamp(3rem,16vw,14.75rem)]">
          {selectedNews.tag}
        </div>
        <div className="flex items-end justify-between gap-4 flex-wrap w-full">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={"selectedItem" + selected}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              className=" max-w-[35rem] overflow-hidden"
            >
              <h1
                key={"header" + selected}
                className="font-[600] text-[clamp(1rem,2.5vw,3rem)] mt-2 line-clamp-2"
              >
                {selectedNews.title}
              </h1>

              <p className="font-400 text-xs sm:text-sm md:text-base line-clamp-2">
                {selectedNews.description}
              </p>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={"author" + selected}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              className="flex flex-col items-end gap-2"
            >
              <Author
                author={selectedNews.author}
                avatar={selectedNews.avatar}
              />
              <div className="flex">{format(new Date(), "PPP")}</div>
              <div className="flex items-center gap-2">
                <Eye size={18} />
                <span>{selectedNews.views}</span>
                <span>views</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex">
          {news.map((n, index) => {
            const isSelected = index === selected;
            return (
              <button
                className="p-2 "
                key={index}
                onClick={() => setSelected(index)}
              >
                <span
                  className={cn(
                    "h-2 w-2 bg-white/75 transition-[width] rounded-full inline-block  ",
                    {
                      "w-6": isSelected,
                    }
                  )}
                ></span>
              </button>
            );
          })}
        </div>
      </div>
      <div className={cn("px-[2rem]  py-[4rem] lg:px-[8rem] ")}>
        <h1 className="font-[600] text-[clamp(1rem,2.5vw,3rem)]">
          Publications
        </h1>
        <p className="font-400 text-xs sm:text-sm md:text-base text-[#717171]">
          Discover Our Industry Narratives, Events, and Insights.
        </p>
        <div className="flex flex-col gap-4">
          <Tabs defaultValue="ALL" className="w-full mt-4">
            <TabsList className="flex bg-white gap-4 justify-between flex-wrap">
              <div className="flex gap-4">
                {["ALL", "IoT & Electronics"].map((tabValue, index) => (
                  <TabsTrigger
                    key={index}
                    value={tabValue}
                    className={`px-3 py-2 w-fit bg-[#F5F7FA]"
                  `}
                  >
                    {tabValue.charAt(0).toUpperCase() + tabValue.slice(1)}
                  </TabsTrigger>
                ))}
              </div>
              <div className="sm:flex gap-2  items-center hidden ">
                <span className="font-[400] text-sm">Sort by:</span>
                <Select>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsList>
            <TabsContent value="ALL" className="overflow-x-hidden">
              <LayoutGridDemo />
            </TabsContent>
            <TabsContent
              value="IoT & Electronics"
              className="overflow-x-hidden"
            >
              <LayoutGridDemo />
            </TabsContent>
          </Tabs>
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              className="mx-auto p-4  border-primary text-primary flex gap-3"
            >
              Show More
              <Image
                src="/icons/read-more.svg"
                width={10}
                height={10}
                alt="arrow-down"
              />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PagePublication;
