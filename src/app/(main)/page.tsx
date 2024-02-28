import Image from "next/image";
import Hero from "./_components/hero";
import Transform from "./_components/transformative";
import SolutionsProductios from "./_components/solutions";
import { ProductionData, SolutionsData } from "../../constants/data";
import Elvate from "./_components/elvate";
import ChooseUs from "./_components/chooseUs";
import Driving from "./_components/driving";
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
