import React, { Fragment } from "react";
import Details from "./_component/details";
import { dataOrganisation } from "@/constants/organisation";
import { cn } from "@/lib/utils";
import HeroCard from "@/components/hero-card";
import { EcosystemData } from "@/constants/data";
function Page() {
  return (
    <main
      className={cn(
        "[&>*]:px-[2rem] [&>*]:lg:px-[3rem] [&>*]:py-[4rem] [&>*]:xl:px-[8rem] pt-6 xl:pt-0"
      )}
    >
      <HeroCard {...EcosystemData} />
      {dataOrganisation.map((organisation, index) => (
        <Fragment key={index}>
          <Details index={index} data={organisation} />
        </Fragment>
      ))}
    </main>
  );
}

export default Page;
