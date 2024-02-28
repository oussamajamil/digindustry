import React, { Fragment } from "react";
import { ProductData } from "@/constants/products";
import Details from "./_components/details";
import { cn } from "@/lib/utils";
import HeroCard from "@/components/hero-card";
import { ProductionData } from "@/constants/data";
function Page() {
  return (
    <main className={cn("[&>*]:px-[2rem] [&>*]:py-[4rem] [&>*]:lg:px-[8rem]")}>
      <HeroCard {...ProductionData} />
      {ProductData.map((product, index) => {
        return (
          <Fragment key={index}>
            <Details key={index} index={index} data={product} />
          </Fragment>
        );
      })}
    </main>
  );
}

export default Page;
