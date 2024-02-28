import Image from "next/image";
import Hero from "./(main)/_components/hero";
import Transform from "./(main)/_components/transformative";
import SolutionsProductios from "./(main)/_components/solutions";
import { ProductionData, SolutionsData } from "../constants/data";
import Elvate from "./(main)/_components/elvate";
import ChooseUs from "./(main)/_components/chooseUs";
import Driving from "./(main)/_components/driving";
import { cn } from "@/lib/utils";
import { font } from "./layout";
export default function Home() {
  return (
    <main
      className={cn(
        "[&>*]:px-[2rem] [&>*]:py-[4rem] [&>*]:lg:px-[8rem]",
        font.className
      )}
    >
      <Hero />
      <Transform />
      <SolutionsProductios data={SolutionsData} url="solutions" />
      <Elvate />
      <SolutionsProductios data={ProductionData} url="products" />
      <ChooseUs />
      <Driving />
    </main>
  );
}
