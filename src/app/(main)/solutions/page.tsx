import React, { Fragment } from "react";
import { solutionData } from "@/constants/solution";
import Details from "./_components/details";
import { cn } from "@/lib/utils";
import HeroCard from "@/components/hero-card";
import { SolutionsData } from "@/constants/data";

function About() {
  return (
    <main className={cn("[&>*]:px-[2rem] [&>*]:py-[4rem] [&>*]:lg:px-[8rem]")}>
      <HeroCard {...SolutionsData} />
      {solutionData.map((solution, index) => {
        return (
          <Fragment key={index}>
            <Details index={index} data={solution} />
          </Fragment>
        );
      })}
    </main>
  );
}

export default About;
